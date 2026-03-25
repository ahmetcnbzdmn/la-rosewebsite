<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'
import { fetchProducts } from '../services/productService.js'
import { useCart } from '../composables/useCart.js'
import { useFavorites } from '../composables/useFavorites.js'

const route = useRoute()
const { addToCart } = useCart()
const { toggleFavorite, isFavorited } = useFavorites()

const products = ref([])
const loading = ref(true)
const error = ref(null)

const collectionNames = {
  'les-produits': 'Ürünler',
  'les-indispensables-de-l-hiver': 'Kış Koleksiyonu',
  'soin-visage': 'Yüz Bakımı',
  'yuz-bakimi': 'Yüz Bakımı',
  'soins-corps': 'Vücut Bakımı',
  'vucut-bakimi': 'Vücut Bakımı',
  'soins-maquillages': 'Makyaj & Bakım',
  'makyaj-bakim': 'Makyaj & Bakım',
  'soins-bebe': 'Bebek Bakımı',
  'bebek-bakimi': 'Bebek Bakımı',
  'solaires': 'Güneş Bakımı',
  'gunes-bakimi': 'Güneş Bakımı',
  'hygiene-du-quotidien': 'Günlük Hijyen',
  'gunluk-hijyen': 'Günlük Hijyen',
  'accessoires': 'Aksesuar',
  'aksesuarlar': 'Aksesuar',
  'best-seller': 'Çok Satanlar',
  'nouveautes': 'Yeni Gelenler',
  'tum-urunler': 'Tüm Ürünler'
}

const displayTitle = computed(() => {
  const collectionId = route.params.id
  if (collectionId && collectionNames[collectionId]) return collectionNames[collectionId]
  if (collectionId) return collectionId.replace(/-/g, ' ')
  return 'Koleksiyon'
})

const filteredProducts = computed(() => {
  const collectionId = route.params.id
  if (!collectionId || collectionId === 'les-produits' || collectionId === 'tum-urunler') {
    return products.value
  }
  return products.value.filter(p => p.category === collectionId)
})

const addedFeedback = ref(null)

function handleAddToCart(product) {
  addToCart(product)
  addedFeedback.value = product.id
  setTimeout(() => { addedFeedback.value = null }, 1500)
}

async function loadProducts() {
  loading.value = true
  error.value = null
  try {
    products.value = await fetchProducts()
  } catch (e) {
    error.value = 'Ürünler yüklenirken bir hata oluştu.'
  } finally {
    loading.value = false
  }
}

onMounted(loadProducts)

watch(() => route.params.id, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="Collections-root">
    <div class="Collections-header">
      <h1 class="Collections-title">{{ displayTitle }}</h1>
      <p class="Collections-count" v-if="!loading">{{ filteredProducts.length }} ürün</p>
    </div>

    <div v-if="loading" class="Collections-loading">
      <div class="loader"></div>
      <p>Ürünler yükleniyor...</p>
    </div>
    <p v-else-if="error" class="Collections-error">{{ error }}</p>

    <div v-else class="Collections-grid">
      <div v-for="product in filteredProducts" :key="product.slug" class="PCard">
        <router-link :to="'/urunler/' + product.slug" class="PCard-link">
          <div class="PCard-img-wrap">
            <img :src="product.image" :alt="product.name_tr || product.name" loading="lazy" />
            <div v-if="product.badges && product.badges.length" class="PCard-badges">
              <span v-for="tag in product.badges" :key="tag" class="PCard-badge">
                {{ { 'New': 'Yeni', 'Rechargeable': 'Yenilenebilir', 'New collection': 'Yeni Koleksiyon', 'Bundle': 'Set', 'Limited edition': 'Sınırlı Baskı' }[tag] || tag }}
              </span>
            </div>
          </div>
          <div class="PCard-info">
            <h3 class="PCard-name">{{ product.name_tr || product.name }}</h3>
            <p class="PCard-subtitle" v-if="product.subtitle">{{ product.subtitle }}</p>
            <p class="PCard-price" v-if="product.price">₺{{ Number(product.price).toLocaleString('tr-TR', { minimumFractionDigits: 2 }) }}</p>
          </div>
        </router-link>
        <div class="PCard-actions">
          <button class="PCard-add-btn" :class="{ 'added': addedFeedback === product.id }" @click="handleAddToCart(product)">
            <template v-if="addedFeedback === product.id">✓ Eklendi</template>
            <template v-else>Sepete Ekle</template>
          </button>
          <button
            class="PCard-fav-btn"
            :class="{ 'is-fav': isFavorited(product.id) }"
            @click="toggleFavorite(product)"
            :title="isFavorited(product.id) ? 'Favorilerden Çıkar' : 'Favorilere Ekle'"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="!loading && !error && filteredProducts.length === 0" class="Collections-empty">
      <p>Bu kategoride henüz ürün bulunmuyor.</p>
      <router-link to="/collections/tum-urunler" class="browse-link">Tüm Ürünleri Gör →</router-link>
    </div>
  </div>
</template>

<style scoped>
.Collections-root {
  padding: 140px 4% 80px;
  max-width: 1440px;
  margin: 0 auto;
}

.Collections-header {
  margin-bottom: 48px;
  text-align: center;
}

.Collections-title {
  font-size: clamp(32px, 6vw, 48px);
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
  color: #3f3f3f;
}

.Collections-count {
  color: #666;
  font-size: 14px;
}

.Collections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 32px 20px;
}

/* Product Card */
.PCard {
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  background: white;
  transition: box-shadow 0.3s ease;
}

.PCard:hover {
  box-shadow: 0 8px 28px rgba(0,0,0,0.06);
}

.PCard-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.PCard-img-wrap {
  aspect-ratio: 4/5;
  background: #f7f7f7;
  overflow: hidden;
  position: relative;
}

.PCard-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.PCard:hover .PCard-img-wrap img {
  transform: scale(1.05);
}

.PCard-badges {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 2;
}

.PCard-badge {
  background: white;
  color: #3f3f3f;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.PCard-info {
  padding: 18px 16px 0;
  text-align: center;
}

.PCard-name {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 6px;
  line-height: 1.4;
  color: #3f3f3f;
}

.PCard-subtitle {
  font-size: 13px;
  color: #888;
  margin-bottom: 8px;
}

.PCard-price {
  font-weight: 700;
  font-size: 16px;
  color: #2f2f40;
  margin-bottom: 16px;
}

/* Actions */
.PCard-actions {
  display: flex;
  border-top: 1px solid #eee;
  margin-top: auto;
}

.PCard-add-btn {
  flex: 1;
  height: 48px;
  background: white;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #3f3f3f;
  cursor: pointer;
  transition: all 0.2s;
}

.PCard-add-btn:hover {
  background: #f5f7fa;
}

.PCard-add-btn.added {
  background: #ecfdf5;
  color: #059669;
}

.PCard-fav-btn {
  width: 48px;
  height: 48px;
  background: white;
  border: none;
  border-left: 1px solid #eee;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  transition: all 0.2s;
  flex-shrink: 0;
}

.PCard-fav-btn:hover { color: #e53935; background: #fff5f5; }
.PCard-fav-btn.is-fav { color: #e53935; }
.PCard-fav-btn.is-fav svg { fill: #e53935; }

/* States */
.Collections-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  color: #999;
  gap: 1rem;
}

.loader {
  width: 36px;
  height: 36px;
  border: 3px solid #e5e7eb;
  border-top-color: #646892;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.Collections-error {
  text-align: center;
  padding: 60px 0;
  color: #e53935;
}

.Collections-empty {
  text-align: center;
  padding: 80px 0;
  color: #888;
}

.browse-link {
  display: inline-block;
  margin-top: 12px;
  color: #646892;
  font-weight: 600;
  text-decoration: none;
}

.browse-link:hover { color: #474861; }

@media (max-width: 768px) {
  .Collections-root {
    padding-top: 110px;
  }
  .Collections-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 10px;
  }
  .PCard-name { font-size: 14px; }
  .PCard-price { font-size: 14px; }
  .PCard-add-btn { font-size: 10px; height: 42px; }
  .PCard-fav-btn { width: 42px; height: 42px; }
}
</style>
