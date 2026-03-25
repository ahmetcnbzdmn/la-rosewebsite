<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import products from '../assets/products.json'

const route = useRoute()
const product = computed(() => {
  const slug = route.params.slug || route.path.split('/').pop()
  return products.find(p => p.slug === slug)
})

const quantity = ref(1)
const isAdding = ref(false)
const showSuccess = ref(false)

const categoryLabel = computed(() => {
  const labels = {
    'yuz-bakimi': 'Yüz Bakımı',
    'vucut-bakimi': 'Vücut Bakımı',
    'makyaj-bakim': 'Makyaj & Bakım',
    'bebek-bakimi': 'Bebek Bakımı',
    'gunes-bakimi': 'Güneş Bakımı',
    'rutinler': 'Rutinler',
    'gunluk-hijyen': 'Günlük Hijyen',
    'aksesuar': 'Aksesuar'
  }
  return labels[product.value?.category] || 'Ürünler'
})

const addToCart = () => {
  if (isAdding.value) return
  isAdding.value = true
  
  // Simulate API call/animation
  setTimeout(() => {
    isAdding.value = false
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 2000)
  }, 800)
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <main v-if="product" class="ProductPage-module__root">
    <div class="ProductPage-module__container">
      <!-- Breadcrumb -->
      <nav class="Breadcrumb-module__root" aria-label="Breadcrumb">
        <ol class="Breadcrumb-module__list">
          <li class="Breadcrumb-module__item">
            <router-link to="/collections/tum-urunler">Ürünler</router-link>
          </li>
          <li class="Breadcrumb-module__item">
            <router-link :to="'/collections/' + product.category">{{ categoryLabel }}</router-link>
          </li>
          <li class="Breadcrumb-module__item" aria-current="page">
            {{ product.name_tr || product.name }}
          </li>
        </ol>
      </nav>

      <div class="ProductMain-module__root">
        <!-- Media Section -->
        <div class="ProductMedia-module__root">
          <div class="ProductMedia-module__image-wrapper">
            <img :src="product.image" :alt="product.name_tr || product.name" class="ProductMedia-module__image">
          </div>
        </div>

        <!-- Info Section -->
        <div class="ProductSidebar-module__root">
          <div class="ProductSidebar-module__content">
            <h1 class="ProductTitle-module__root">
              {{ product.name_tr || product.name }}
            </h1>
            <p v-if="product.name_tr && product.name" class="ProductTitle-module__subtitle">
              {{ product.name }}
            </p>
            
            <div class="ProductPrice-module__root">
              <span class="ProductPrice-module__price">{{ product.price || 'Fiyat bilgisi için iletişime geçin' }}</span>
              <span class="ProductPrice-module__meta">{{ product.subtitle }}</span>
            </div>

            <div class="ProductDescription-module__root">
              <p v-for="(line, index) in product.details.split('\n')" :key="index">
                {{ line }}
              </p>
            </div>

            <div class="ProductActions-module__root">
              <div class="ProductActions-module__quantity">
                <button @click="quantity > 1 && quantity--" :disabled="quantity <= 1" class="qty-btn" aria-label="Azalt">-</button>
                <span class="qty-value">{{ quantity }}</span>
                <button @click="quantity++" class="qty-btn" aria-label="Artır">+</button>
              </div>
              <button 
                @click="addToCart" 
                class="ProductActions-module__add-btn"
                :class="{ 'is-adding': isAdding, 'is-success': showSuccess }"
              >
                <span v-if="!isAdding && !showSuccess">Sepete Ekle</span>
                <span v-else-if="isAdding" class="loader"></span>
                <span v-else-if="showSuccess" class="success-text">✓ Eklendi</span>
              </button>
            </div>

            <div class="ProductFeatures-module__root">
              <div class="ProductFeature-module__item">
                <span class="ProductFeature-module__icon">🌿</span>
                <span class="ProductFeature-module__text">%100 Doğal ve Temiz İçerik</span>
              </div>
              <div class="ProductFeature-module__item">
                <span class="ProductFeature-module__icon">🐰</span>
                <span class="ProductFeature-module__text">Cruelty-Free</span>
              </div>
              <div class="ProductFeature-module__item">
                <span class="ProductFeature-module__icon">🌍</span>
                <span class="ProductFeature-module__text">Ekolojik Ambalaj</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div v-else class="ProductPage-module__loading">
    <p>Ürün yükleniyor...</p>
    <router-link to="/collections/tum-urunler">Tüm Ürünlere Dön</router-link>
  </div>
</template>

<style scoped>
.ProductPage-module__root {
  --font-family-serif: "Chaparral Pro", ui-serif, serif;
  --font-family-sans: "Basis Grotesque Pro", system-ui, sans-serif;
  --color-text-main: #3f3f3f;
  --color-text-muted: #666;
  --color-larosee-blue: #00B1EB;
  --background-blue: #ebf3fc;
  
  padding-top: 100px;
  background: white;
  min-height: 100vh;
}

.ProductPage-module__container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px 120px;
}

.Breadcrumb-module__root {
  margin-bottom: 40px;
}

.Breadcrumb-module__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 13px;
  color: var(--color-text-muted);
}

.Breadcrumb-module__item + .Breadcrumb-module__item::before {
  content: "/";
  margin: 0 10px;
  color: #ccc;
}

.Breadcrumb-module__item a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.Breadcrumb-module__item a:hover {
  color: var(--color-text-main);
}

.ProductMain-module__root {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.ProductMedia-module__image-wrapper {
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
}

.ProductMedia-module__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ProductSidebar-module__content {
  position: sticky;
  top: 120px;
}

.ProductTitle-module__root {
  font-family: var(--font-family-serif);
  font-size: 40px;
  font-weight: 400;
  color: var(--color-text-main);
  margin-bottom: 8px;
  line-height: 1.2;
}

.ProductTitle-module__subtitle {
  font-size: 18px;
  color: var(--color-text-muted);
  font-style: italic;
  margin-bottom: 24px;
}

.ProductPrice-module__root {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
}

.ProductPrice-module__price {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-main);
}

.ProductPrice-module__meta {
  font-size: 14px;
  color: var(--color-text-muted);
}

.ProductDescription-module__root {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-bottom: 40px;
  white-space: pre-line;
}

.ProductActions-module__root {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
  align-items: stretch;
  height: 54px;
}

.ProductActions-module__quantity {
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  border-radius: 50px;
  padding: 0 4px;
  background: white;
  min-width: 120px;
}

.qty-btn {
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: var(--color-text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.qty-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.qty-value {
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: var(--color-text-main);
}

.ProductActions-module__add-btn {
  flex: 1;
  background: var(--color-larosee-blue);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.ProductActions-module__add-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 177, 235, 0.3);
}

.ProductActions-module__add-btn:active {
  transform: translateY(0);
}

.ProductActions-module__add-btn.is-adding {
  background: #f0f0f0;
  color: transparent;
  pointer-events: none;
}

.ProductActions-module__add-btn.is-success {
  background: #4caf50;
  transform: scale(1.02);
}

.loader {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-larosee-blue);
  border-bottom-color: transparent;
  border-radius: 50%;
  position: absolute;
  animation: rotation 1s linear infinite;
}

.success-text {
  animation: fadeIn 0.3s ease;
}

@keyframes rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.ProductFeatures-module__root {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
  border-top: 1px solid #eee;
}

.ProductFeature-module__item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--color-text-main);
  font-weight: 500;
}

.ProductFeature-module__icon {
  font-size: 20px;
}

@media (max-width: 1024px) {
  .ProductPage-module__root {
    padding-top: 80px;
  }

  .ProductPage-module__container {
    padding: 0 20px 60px;
  }

  .ProductMain-module__root {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .ProductSidebar-module__content {
    position: static;
  }

  .ProductTitle-module__root {
    font-size: 32px;
    text-align: center;
  }

  .ProductTitle-module__subtitle {
    text-align: center;
  }

  .ProductPrice-module__root {
    justify-content: center;
  }

  .ProductDescription-module__root {
    text-align: center;
  }

  .ProductActions-module__root {
    flex-direction: column;
    height: auto;
    gap: 16px;
  }

  .ProductActions-module__quantity {
    width: 100%;
    height: 54px;
    min-height: 54px;
    justify-content: center;
  }
  
  .ProductActions-module__add-btn {
    width: 100%;
    height: 54px;
    min-height: 54px;
  }
}
</style>
