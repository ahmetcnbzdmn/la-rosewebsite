<script setup>
import { ref, computed } from 'vue'
import products from '../assets/products.json'

const hoveredSlug = ref(null)

const categories = [
  { label: 'Tüm Ürünler', filter: null },
  { label: 'Yüz Bakımı', filter: 'yuz-bakimi' },
  { label: 'Vücut Bakımı', filter: 'vucut-bakimi' },
  { label: 'Saç Bakımı', filter: 'sac-bakimi' },
  { label: 'Makyaj & Bakım', filter: 'makyaj-bakim' },
  { label: 'Bebek Bakımı', filter: 'bebek-bakimi' },
  { label: 'Güneş Bakımı', filter: 'gunes-bakimi' },
  { label: 'Rutinler', filter: 'rutinler' },
  { label: 'Günlük Hijyen', filter: 'gunluk-hijyen' },
  { label: 'Aksesuar', filter: 'aksesuar' },
]

const activeCategory = ref(null)

const filteredProducts = computed(() => {
  if (!activeCategory.value) return products
  return products.filter(p => p.category === activeCategory.value)
})

function setCategory(filter) {
  activeCategory.value = filter
}
</script>

<template>
  <main class="allproducts-layout" id="content">
    <header class="collection-header">
      <h1 class="collection-title">Tüm Ürünler</h1>
      <div class="collection-desc">
        <p>Tüm ürünlerimiz doğal ve etkilidir. En hassas ciltler dahil her cilt tipine özel bakım sunar.</p>
      </div>
    </header>

    <section class="subnav" aria-label="Kategoriler">
      <nav class="subnav-scroll">
        <ul class="subnav-list">
          <li v-for="cat in categories" :key="cat.label" class="subnav-item">
            <button
              :class="['subnav-btn', { active: activeCategory === cat.filter }]"
              @click="setCategory(cat.filter)"
            >
              {{ cat.label }}
            </button>
          </li>
        </ul>
      </nav>
    </section>

    <ul class="product-grid">
      <li v-for="product in filteredProducts" :key="product.slug">
        <div
          class="product-card"
          @mouseenter="hoveredSlug = product.slug"
          @mouseleave="hoveredSlug = null"
        >
          <div class="card-content">
            <div class="img-wrapper">
              <router-link :to="'/en-ww/products/' + product.slug" class="img-link" tabindex="-1" aria-hidden="true">
                <img
                  v-if="product.image"
                  :src="product.image"
                  :alt="product.name"
                  class="img-primary"
                  loading="lazy"
                />
                <img
                  v-if="product.image2"
                  :src="product.image2"
                  :alt="product.name"
                  class="img-secondary"
                  :class="{ visible: hoveredSlug === product.slug }"
                  loading="lazy"
                />
              </router-link>

              <ul v-if="product.badges && product.badges.length" class="badges">
                <li v-for="badge in product.badges" :key="badge" class="badge">
                  {{ { 'New': 'Yeni', 'Rechargeable': 'Yenilenebilir', 'New collection': 'Yeni Koleksiyon', 'Bundle': 'Set', 'Limited edition': 'Sınırlı Baskı' }[badge] || badge }}
                </li>
              </ul>
            </div>

            <router-link :to="'/en-ww/products/' + product.slug" class="product-name">
              {{ product.name_tr || product.name }}
            </router-link>

            <p v-if="product.subtitle" class="product-subtitle">{{ product.subtitle }}</p>

            <p v-if="product.price" class="product-price">
              <span>{{ product.price }}</span>
            </p>
          </div>

          <div class="card-action">
            <router-link :to="'/en-ww/products/' + product.slug" class="btn-view">
              Ürünü İncele
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.allproducts-layout {
  padding-top: 56px;
}

.collection-header {
  padding: 40px 4% 24px;
  text-align: center;
}

.collection-title {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 12px;
}

.collection-desc {
  max-width: 600px;
  margin: 0 auto;
  font-size: 14px;
  color: #505050;
  line-height: 1.6;
}

.subnav {
  position: sticky;
  top: 56px;
  z-index: 10;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}

.subnav-scroll {
  overflow-x: auto;
  scrollbar-width: none;
  padding: 0 4%;
}

.subnav-scroll::-webkit-scrollbar { display: none; }

.subnav-list {
  display: flex;
  white-space: nowrap;
  margin: 0;
  padding: 0;
}

.subnav-item { flex-shrink: 0; }

.subnav-btn {
  display: block;
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 500;
  color: #505050;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  letter-spacing: 0.01em;
}

.subnav-btn:hover,
.subnav-btn.active {
  color: #1a1a1a;
  border-bottom-color: #1a1a1a;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 24px 4% 80px;
  margin: 0;
}

@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px 2% 60px;
  }
}

.product-card {
  display: flex;
  flex-direction: column;
  padding: 12px 8px 20px;
}

.card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.img-wrapper {
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
  margin-bottom: 12px;
  aspect-ratio: 292 / 340;
}

.img-link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}

.img-primary {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.4s ease;
}

.img-secondary {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.img-secondary.visible { opacity: 1; }

.badges {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 2;
}

.badge {
  display: inline-block;
  background: #fff;
  color: #1a1a1a;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 3px 7px;
  border-radius: 2px;
  line-height: 1.4;
}

.product-name {
  font-size: 13px;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  line-height: 1.3;
  margin-bottom: 4px;
  display: block;
}

.product-name:hover { text-decoration: underline; }

.product-subtitle {
  font-size: 12px;
  color: #505050;
  font-style: italic;
  margin-bottom: 6px;
  line-height: 1.3;
}

.product-price {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-top: auto;
  padding-top: 6px;
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.price-eur {
  font-size: 11px;
  font-weight: 400;
  color: #888;
}

.card-action {
  overflow: hidden;
  max-height: 0;
  margin-top: 0;
  transition: max-height 0.3s ease, margin-top 0.3s ease;
}

.product-card:hover .card-action {
  max-height: 60px;
  margin-top: 10px;
}

.btn-view {
  display: block;
  width: 100%;
  padding: 10px 16px;
  background: #1a1a1a;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  border-radius: 2px;
  transition: background 0.2s;
}

.btn-view:hover { background: #333; }

@media (max-width: 640px) {
  .product-card { padding: 8px 4px 14px; }
  .card-action { max-height: 50px; }
  .product-card:hover .card-action {
    max-height: 50px;
    margin-top: 8px;
  }
}
</style>
