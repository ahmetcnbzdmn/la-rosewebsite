<script setup>
import { useRoute } from 'vue-router'
import products from '../assets/products.json'

const route = useRoute()
</script>

<template>
  <div class="Collections-module__root___38d2z">
    <div class="Collections-module__header___1vJ_B">
      <h1 class="Collections-module__title___2vB3k">{{ $route.params.id.replace(/-/g, ' ') }}</h1>
      <p class="Collections-module__count___3u_5l">{{ products.length }} products</p>
    </div>

    <div class="Collections-module__grid___1X_36">
      <div v-for="product in products" :key="product.slug" class="ProductCard-module__root___1v_36">
        <router-link :to="'/en-ww/products/' + product.slug" class="ProductCard-module__link___2v_36">
          <div class="ProductCard-module__image-wrapper___3v_36">
            <img :src="product.image" :alt="product.name" class="ProductCard-module__image___4v_36" loading="lazy" />
          </div>
          <div class="ProductCard-module__info___5v_36">
            <h3 class="ProductCard-module__name___6v_36">{{ product.name }}</h3>
            <p class="ProductCard-module__price___7v_36">{{ product.price }}</p>
          </div>
        </router-link>
        <button class="ProductCard-module__add-to-cart___8v_36">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Collections-module__root___38d2z {
  padding: 160px 4% 60px;
  max-width: 1440px;
  margin: 0 auto;
}

.Collections-module__header___1vJ_B {
  margin-bottom: 40px;
  text-align: center;
}

.Collections-module__title___2vB3k {
  font-family: inherit;
  font-size: 48px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.Collections-module__count___3u_5l {
  color: #666;
  font-size: 14px;
}

.Collections-module__grid___1X_36 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px 20px;
}

.ProductCard-module__root___1v_36 {
  display: flex;
  flex-direction: column;
}

.ProductCard-module__link___2v_36 {
  text-decoration: none;
  color: inherit;
}

.ProductCard-module__image-wrapper___3v_36 {
  aspect-ratio: 4/5;
  background-color: #f7f7f7;
  overflow: hidden;
  margin-bottom: 16px;
  border-radius: 4px;
}

.ProductCard-module__image___4v_36 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.ProductCard-module__root___1v_36:hover .ProductCard-module__image___4v_36 {
  transform: scale(1.05);
}

.ProductCard-module__info___5v_36 {
  padding: 0;
}

.ProductCard-module__name___6v_36 {
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  line-height: 1.4;
}

.ProductCard-module__price___7v_36 {
  font-weight: 700;
  font-size: 15px;
}

.ProductCard-module__add-to-cart___8v_36 {
  margin-top: 16px;
  height: 48px;
  background: white;
  color: #000;
  border: 1px solid #000;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.ProductCard-module__add-to-cart___8v_36:hover {
  background: #000;
  color: #fff;
}

@media (max-width: 768px) {
  .Collections-module__root___38d2z {
    padding-top: 120px;
  }
  .Collections-module__title___2vB3k {
    font-size: 32px;
  }
  .Collections-module__grid___1X_36 {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 12px;
  }
}
</style>
