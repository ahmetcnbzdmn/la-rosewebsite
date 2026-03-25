<script setup>
import { ref, computed } from 'vue'
import products from '../assets/products.json'

const hoveredSlug = ref(null)

const categories = [
  { label: 'Tüm Ürünler', filter: null },
  { label: 'Yüz Bakımı', filter: 'yuz-bakimi' },
  { label: 'Vücut Bakımı', filter: 'vucut-bakimi' },
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
  window.scrollTo({ top: 300, behavior: 'smooth' })
}
</script>

<template>
  <main class="AllProducts-module__root" id="content">
    <header class="CollectionHeader-module__root">
      <div class="CollectionHeader-module__content">
        <h1 class="Heading-module__root CollectionHeader-module__title">Tüm Ürünler</h1>
        <div class="CollectionHeader-module__description">
          <p>La Rosée dünyasının tüm <em>doğal</em>, <em>etkili</em> ve <em>duyusal</em> ürünlerini keşfedin. En hassas ciltler dahil her cilt tipine özel bir bakım mutlaka var.</p>
        </div>
      </div>
    </header>

    <div class="CollectionGrid-module__container">
      <nav class="CollectionSubnav-module__root">
        <ul class="CollectionSubnav-module__list">
          <li v-for="cat in categories" :key="cat.label">
            <button
              :class="['CollectionSubnav-module__button', { active: activeCategory === cat.filter }]"
              @click="setCategory(cat.filter)"
            >
              {{ cat.label }}
            </button>
          </li>
        </ul>
      </nav>

      <div class="CollectionGrid-module__products">
        <div v-for="product in filteredProducts" :key="product.slug" class="ProductCard-module__root">
          <router-link :to="'/products/' + product.slug" class="ProductCard-module__link">
            <div class="ProductCard-module__image-container">
              <img :src="product.image" :alt="product.name" class="ProductCard-module__image" loading="lazy">
              <div v-if="product.badges && product.badges.length" class="ProductCard-module__tags">
                <span v-for="tag in product.badges" :key="tag" class="Badge-module__root">
                    {{ { 'New': 'Yeni', 'Rechargeable': 'Yenilenebilir', 'New collection': 'Yeni Koleksiyon', 'Bundle': 'Set', 'Limited edition': 'Sınırlı Baskı' }[tag] || tag }}
                </span>
              </div>
            </div>
            <div class="ProductCard-module__info">
              <h4 class="ProductCard-module__title">{{ product.name_tr || product.name }}</h4>
              <p class="ProductCard-module__desc">{{ product.subtitle }}</p>
              <p class="ProductCard-module__price">{{ product.price }}</p>
            </div>
          </router-link>
          <button class="ProductCard-module__add-btn">Ekle</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.AllProducts-module__root {
    --rgb-hawkes-blue: 235 243 252;
    --background-blue: rgb(var(--rgb-hawkes-blue));
    --font-family-serif: "Chaparral Pro", ui-serif, serif;
    --font-family-sans: "Basis Grotesque Pro", system-ui, sans-serif;
    --font-family-cursive: "Dancing Script", cursive;
    
    background-color: white;
}

.CollectionHeader-module__root {
    padding: 120px 0 60px;
    background-image: linear-gradient(white 0%, var(--background-blue) 100%);
    text-align: center;
}

.CollectionHeader-module__content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
}

.CollectionHeader-module__title {
    font-family: var(--font-family-serif);
    font-size: clamp(32px, 8vw, 64px);
    font-weight: 400;
    margin-bottom: 24px;
    color: #3f3f3f;
}

.CollectionHeader-module__description {
    font-family: var(--font-family-sans);
    font-size: 18px;
    color: #666;
    line-height: 1.6;
}

.CollectionHeader-module__description em {
    font-family: var(--font-family-cursive);
    font-style: normal;
    font-weight: 600;
    color: #3f3f3f;
}

.CollectionGrid-module__container {
    max-width: 1856px;
    margin: 0 auto;
    padding: 40px 16px 120px;
}

.CollectionSubnav-module__root {
    border-bottom: 1px solid #eee;
    margin-bottom: 60px;
    position: sticky;
    top: 70px;
    background: white;
    z-index: 10;
}

.CollectionSubnav-module__list {
    display: flex;
    overflow-x: auto;
    gap: 32px;
    padding: 8px 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.CollectionSubnav-module__list::-webkit-scrollbar {
    display: none;
}

.CollectionSubnav-module__button {
    background: none;
    border: none;
    padding: 12px 0;
    font-size: 14px;
    font-weight: 600;
    color: #999;
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    transition: color 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.CollectionSubnav-module__button:hover,
.CollectionSubnav-module__button.active {
    color: #3f3f3f;
}

.CollectionSubnav-module__button.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #34AAFF;
}

.CollectionGrid-module__products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 16px;
}

@media (max-width: 1200px) {
    .CollectionGrid-module__products {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .CollectionGrid-module__products {
        grid-template-columns: 1fr;
    }
    
    .CollectionHeader-module__root {
        padding: 80px 0 40px;
    }
}

/* Product Card - Matching Home.vue precisely */
.ProductCard-module__root {
    background: white;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: box-shadow 0.3s ease;
    border: 1px solid #f0f0f0;
}

.ProductCard-module__root:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.ProductCard-module__link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
}

.ProductCard-module__image-container {
    aspect-ratio: 292 / 340;
    background: #f9f9f9;
    position: relative;
}

.ProductCard-module__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ProductCard-module__info {
    padding: 24px 20px 0 20px;
    text-align: center;
}

.ProductCard-module__title {
    font-family: var(--font-family-serif);
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 8px 0;
    color: #3f3f3f;
}

.ProductCard-module__desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
    line-height: 1.4;
    min-height: 40px;
}

.ProductCard-module__price {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 20px;
}

.ProductCard-module__add-btn {
    width: 100%;
    height: 50px;
    background: white;
    border: none;
    border-top: 1px solid rgb(229, 231, 235);
    border-radius: 0;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: rgb(63, 63, 63);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
}

.ProductCard-module__add-btn:hover {
    background: rgb(247, 249, 251);
}

.ProductCard-module__tags {
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 2;
}

.Badge-module__root {
    background: white;
    color: rgb(63, 63, 63);
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
