<script setup>
import { useCart } from '../../composables/useCart.js'
import { useRouter } from 'vue-router'

const { items, totalCount, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart()
const router = useRouter()

function formatPrice(val) {
  if (!val) return null
  const n = parseFloat(String(val).replace(/[^0-9.]/g, ''))
  return isNaN(n) ? null : n.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })
}

function itemTotal(item) {
  const n = parseFloat(String(item.price || '0').replace(/[^0-9.]/g, '')) || 0
  return n * item.quantity
}
</script>

<template>
  <main class="cart-page">
    <!-- Progress bar -->
    <div class="checkout-progress">
      <div class="checkout-progress__inner">
        <span class="step active">1. Sepet</span>
        <span class="step-arrow">›</span>
        <span class="step">2. Bilgiler</span>
        <span class="step-arrow">›</span>
        <span class="step">3. Ödeme</span>
      </div>
    </div>

    <div class="cart-page__container">
      <h1 class="cart-page__title">Sepetim</h1>

      <!-- Empty -->
      <div v-if="items.length === 0" class="cart-empty">
        <p>Sepetiniz boş.</p>
        <router-link to="/collections/tum-urunler" class="cart-empty__btn">Alışverişe Devam Et</router-link>
      </div>

      <div v-else class="cart-layout">
        <!-- Items -->
        <div class="cart-items">
          <div v-for="item in items" :key="item.id" class="cart-row">
            <div class="cart-row__image">
              <img v-if="item.image" :src="item.image" :alt="item.name" />
              <div v-else class="cart-row__no-img" />
            </div>
            <div class="cart-row__details">
              <router-link :to="'/products/' + item.slug" class="cart-row__name">{{ item.name }}</router-link>
              <span v-if="item.subtitle" class="cart-row__subtitle">{{ item.subtitle }}</span>
            </div>
            <div class="cart-row__qty">
              <button @click="updateQuantity(item.id, item.quantity - 1)" class="qty-btn">−</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(item.id, item.quantity + 1)" class="qty-btn">+</button>
            </div>
            <div class="cart-row__price">
              <span v-if="itemTotal(item) > 0">{{ formatPrice(itemTotal(item)) }}</span>
              <span v-else class="cart-row__price--na">—</span>
            </div>
            <button class="cart-row__remove" @click="removeFromCart(item.id)" title="Sil">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Summary -->
        <div class="cart-summary">
          <h2>Sipariş Özeti</h2>
          <div class="cart-summary__row">
            <span>Ürün Sayısı</span>
            <span>{{ totalCount }} adet</span>
          </div>
          <div v-if="totalPrice > 0" class="cart-summary__row cart-summary__row--total">
            <span>Toplam</span>
            <span>{{ totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}</span>
          </div>
          <div class="cart-summary__row cart-summary__shipping">
            <span>Kargo</span>
            <span class="text-green">Hesaplanacak</span>
          </div>
          <button class="cart-summary__btn" @click="router.push('/odeme/bilgiler')">
            Siparişi Tamamla
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <router-link to="/collections/tum-urunler" class="cart-summary__continue">← Alışverişe Devam Et</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.cart-page {
  --font-serif: "Chaparral Pro", ui-serif, serif;
  background: #fafafa;
  min-height: 100vh;
  padding-top: 80px;
}
.checkout-progress {
  background: white;
  border-bottom: 1px solid #eee;
  padding: 16px 24px;
}
.checkout-progress__inner {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #ccc;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.step.active { color: #00B1EB; }
.step-arrow { color: #e0e0e0; }
.cart-page__container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}
.cart-page__title {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 400;
  color: #3f3f3f;
  margin: 0 0 32px;
}
.cart-empty {
  text-align: center;
  padding: 80px 20px;
  color: #999;
}
.cart-empty__btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 28px;
  background: #00B1EB;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.cart-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
  align-items: start;
}
@media (max-width: 900px) { .cart-layout { grid-template-columns: 1fr; } }
.cart-items { background: white; border-radius: 8px; border: 1px solid #f0f0f0; overflow: hidden; }
.cart-row {
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  gap: 16px;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f5f5f5;
}
.cart-row:last-child { border-bottom: none; }
.cart-row__image { width: 80px; height: 80px; border-radius: 6px; overflow: hidden; background: #f9f9f9; }
.cart-row__image img { width: 100%; height: 100%; object-fit: cover; }
.cart-row__no-img { width: 100%; height: 100%; background: #f0f0f0; }
.cart-row__name {
  font-size: 14px;
  font-weight: 600;
  color: #3f3f3f;
  text-decoration: none;
  display: block;
  margin-bottom: 4px;
}
.cart-row__name:hover { color: #00B1EB; }
.cart-row__subtitle { font-size: 12px; color: #999; }
.cart-row__qty {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 4px 10px;
}
.cart-row__qty span { font-size: 14px; font-weight: 600; min-width: 20px; text-align: center; }
.qty-btn { background: none; border: none; cursor: pointer; font-size: 16px; color: #666; padding: 0; transition: color 0.2s; }
.qty-btn:hover { color: #3f3f3f; }
.cart-row__price { font-weight: 700; font-size: 15px; color: #3f3f3f; min-width: 80px; text-align: right; }
.cart-row__price--na { color: #ccc; font-weight: 400; }
.cart-row__remove { background: none; border: none; cursor: pointer; color: #ccc; padding: 4px; transition: color 0.2s; }
.cart-row__remove:hover { color: #e53935; }
/* Summary */
.cart-summary {
  background: white;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  padding: 24px;
  position: sticky;
  top: 100px;
}
.cart-summary h2 { font-size: 16px; font-weight: 700; color: #3f3f3f; margin: 0 0 20px; text-transform: uppercase; letter-spacing: 0.05em; }
.cart-summary__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 14px;
  color: #666;
}
.cart-summary__row--total { font-weight: 700; font-size: 16px; color: #3f3f3f; }
.text-green { color: #4caf50; }
.cart-summary__btn {
  width: 100%;
  height: 52px;
  background: #00B1EB;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  transition: background 0.2s;
}
.cart-summary__btn:hover { background: #0095c8; }
.cart-summary__continue {
  display: block;
  text-align: center;
  margin-top: 14px;
  font-size: 13px;
  color: #999;
  text-decoration: none;
  transition: color 0.2s;
}
.cart-summary__continue:hover { color: #3f3f3f; }
</style>
