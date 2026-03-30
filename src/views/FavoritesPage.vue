<script setup>
import { useFavorites } from '../composables/useFavorites.js'

const { favorites, removeFavorite } = useFavorites()

const IKAS_STORE_URL = 'https://magaza.larosee.com.tr'
</script>

<template>
  <main class="favorites-root">
    <header class="favorites-header">
      <h1>Favorilerim</h1>
      <p v-if="favorites.length > 0">{{ favorites.length }} ürün</p>
    </header>

    <div class="favorites-container">
      <!-- Empty state -->
      <div v-if="favorites.length === 0" class="favorites-empty">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" opacity="0.25">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h2>Favori listeniz boş</h2>
        <p>Beğendiğiniz ürünleri kalp ikonuna tıklayarak favorilere ekleyin.</p>
        <router-link to="/collections/tum-urunler" class="favorites-empty__btn">Ürünleri Keşfet</router-link>
      </div>

      <!-- Grid -->
      <div v-else class="favorites-grid">
        <div v-for="product in favorites" :key="product.id" class="fav-card">
          <router-link :to="'/products/' + product.slug" class="fav-card__link">
            <div class="fav-card__image-wrap">
              <img v-if="product.image" :src="product.image" :alt="product.name" loading="lazy" />
              <div v-else class="fav-card__no-image">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" opacity="0.2">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>
            </div>
            <div class="fav-card__info">
              <h4>{{ product.name }}</h4>
              <p>{{ product.subtitle }}</p>
            </div>
          </router-link>
          <div class="fav-card__actions">
            <a :href="IKAS_STORE_URL" target="_blank" rel="noopener" class="fav-card__cart-btn">
              Satın Al
            </a>
            <button class="fav-card__remove-btn" @click="removeFavorite(product.id)" title="Favoriden Çıkar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#e53935">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#e53935" stroke-width="1.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.favorites-root {
  --font-serif: "Chaparral Pro", ui-serif, serif;
  --font-sans: "Basis Grotesque Pro", system-ui, sans-serif;
  background: white;
  min-height: 100vh;
}
.favorites-header {
  padding: 100px 0 48px;
  background: linear-gradient(white 0%, #ebf3fc 100%);
  text-align: center;
}
.favorites-header h1 {
  font-family: var(--font-serif);
  font-size: clamp(28px, 6vw, 52px);
  font-weight: 400;
  color: #3f3f3f;
  margin: 0 0 8px;
}
.favorites-header p { font-size: 15px; color: #999; margin: 0; }
.favorites-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 48px 16px 80px;
}
.favorites-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 20px;
  color: #999;
  text-align: center;
}
.favorites-empty h2 { font-size: 22px; color: #3f3f3f; margin: 0; }
.favorites-empty p { font-size: 15px; max-width: 360px; margin: 0; }
.favorites-empty__btn {
  margin-top: 8px;
  padding: 12px 32px;
  background: #00B1EB;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: background 0.2s;
}
.favorites-empty__btn:hover { background: #0095c8; }
.favorites-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 16px;
}
@media (max-width: 1100px) { .favorites-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 720px) { .favorites-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .favorites-grid { grid-template-columns: 1fr; } }
.fav-card {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s;
}
.fav-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.07); }
.fav-card__link { text-decoration: none; color: inherit; display: flex; flex-direction: column; }
.fav-card__image-wrap {
  aspect-ratio: 1;
  background: #f9f9f9;
  overflow: hidden;
}
.fav-card__image-wrap img { width: 100%; height: 100%; object-fit: cover; }
.fav-card__no-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fav-card__info { padding: 16px 16px 0; }
.fav-card__info h4 {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 400;
  color: #3f3f3f;
  margin: 0 0 4px;
  line-height: 1.3;
}
.fav-card__info p { font-size: 13px; color: #999; margin: 0; }
.fav-card__actions {
  display: flex;
  align-items: center;
  gap: 0;
  margin-top: auto;
  border-top: 1px solid #f0f0f0;
}
.fav-card__cart-btn {
  flex: 1;
  height: 44px;
  background: white;
  border: none;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  color: #3f3f3f;
  transition: background 0.2s;
}
.fav-card__cart-btn:hover { background: #f7f9fb; }
.fav-card__remove-btn {
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  border-left: 1px solid #f0f0f0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e53935;
  transition: background 0.2s;
  flex-shrink: 0;
}
.fav-card__remove-btn:hover { background: #fff5f5; }
</style>
