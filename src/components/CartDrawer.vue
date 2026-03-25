<script setup>
import { useCart } from '../composables/useCart.js'
import { useRouter } from 'vue-router'

const { items, isOpen, totalCount, totalPrice, removeFromCart, updateQuantity, closeCart } = useCart()
const router = useRouter()

function goToCheckout() {
  closeCart()
  router.push('/sepet')
}

function formatPrice(price) {
  if (!price) return null
  const num = parseFloat(String(price).replace(/[^0-9.]/g, ''))
  if (isNaN(num)) return null
  return num.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })
}
</script>

<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div v-if="isOpen" class="cart-overlay" @click="closeCart" />
  </Transition>

  <!-- Drawer -->
  <Transition name="slide">
    <div v-if="isOpen" class="cart-drawer" role="dialog" aria-label="Sepet">
      <!-- Header -->
      <div class="cart-drawer__header">
        <div class="cart-drawer__title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.75 9.75H21.25L19.75 20.25H4.25L2.75 9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
          <span>Sepetim</span>
          <span v-if="totalCount > 0" class="cart-drawer__count">{{ totalCount }}</span>
        </div>
        <button class="cart-drawer__close" @click="closeCart" aria-label="Kapat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Empty state -->
      <div v-if="items.length === 0" class="cart-drawer__empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" opacity="0.3">
          <path d="M7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M2.75 9.75H21.25L19.75 20.25H4.25L2.75 9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <p>Sepetiniz boş</p>
        <button class="cart-drawer__shop-btn" @click="closeCart">Alışverişe Başla</button>
      </div>

      <!-- Items -->
      <div v-else class="cart-drawer__items">
        <div v-for="item in items" :key="item.id" class="cart-item">
          <div class="cart-item__image">
            <img v-if="item.image" :src="item.image" :alt="item.name" />
            <div v-else class="cart-item__image-placeholder">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.3">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <div class="cart-item__info">
            <p class="cart-item__name">{{ item.name }}</p>
            <p v-if="item.subtitle" class="cart-item__subtitle">{{ item.subtitle }}</p>
            <div class="cart-item__bottom">
              <div class="cart-item__qty">
                <button @click="updateQuantity(item.id, item.quantity - 1)" class="qty-btn" aria-label="Azalt">−</button>
                <span>{{ item.quantity }}</span>
                <button @click="updateQuantity(item.id, item.quantity + 1)" class="qty-btn" aria-label="Artır">+</button>
              </div>
              <span v-if="formatPrice(item.price)" class="cart-item__price">
                {{ formatPrice(item.price * item.quantity) }}
              </span>
            </div>
          </div>
          <button class="cart-item__remove" @click="removeFromCart(item.id)" aria-label="Sil">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div v-if="items.length > 0" class="cart-drawer__footer">
        <div v-if="totalPrice > 0" class="cart-drawer__total">
          <span>Toplam</span>
          <span class="cart-drawer__total-price">
            {{ totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}
          </span>
        </div>
        <button class="cart-drawer__checkout-btn" @click="goToCheckout">
          Sepete Git
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  backdrop-filter: blur(2px);
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 420px;
  max-width: 100vw;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 40px rgba(0,0,0,0.12);
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }

/* Header */
.cart-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
}
.cart-drawer__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #3f3f3f;
}
.cart-drawer__count {
  background: #00B1EB;
  color: white;
  font-size: 11px;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-drawer__close {
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  padding: 4px;
  display: flex;
  transition: color 0.2s;
}
.cart-drawer__close:hover { color: #3f3f3f; }

/* Empty */
.cart-drawer__empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #999;
  padding: 40px;
}
.cart-drawer__empty p { font-size: 16px; }
.cart-drawer__shop-btn {
  background: none;
  border: 1.5px solid #3f3f3f;
  padding: 10px 24px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  color: #3f3f3f;
  transition: all 0.2s;
}
.cart-drawer__shop-btn:hover { background: #3f3f3f; color: white; }

/* Items */
.cart-drawer__items {
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.cart-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}
.cart-item__image {
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  background: #f9f9f9;
}
.cart-item__image img { width: 100%; height: 100%; object-fit: cover; }
.cart-item__image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
}
.cart-item__info {
  flex: 1;
  min-width: 0;
}
.cart-item__name {
  font-size: 14px;
  font-weight: 600;
  color: #3f3f3f;
  margin: 0 0 4px;
  line-height: 1.3;
}
.cart-item__subtitle {
  font-size: 12px;
  color: #999;
  margin: 0 0 10px;
}
.cart-item__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-item__qty {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  padding: 2px 8px;
}
.cart-item__qty span { font-size: 14px; font-weight: 600; color: #3f3f3f; min-width: 16px; text-align: center; }
.qty-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}
.qty-btn:hover { color: #3f3f3f; }
.cart-item__price {
  font-size: 14px;
  font-weight: 700;
  color: #3f3f3f;
}
.cart-item__remove {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #ccc;
  padding: 2px;
  transition: color 0.2s;
}
.cart-item__remove:hover { color: #e53935; }

/* Footer */
.cart-drawer__footer {
  padding: 20px 24px 28px;
  border-top: 1px solid #f0f0f0;
}
.cart-drawer__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 15px;
  color: #3f3f3f;
}
.cart-drawer__total-price {
  font-size: 18px;
  font-weight: 700;
}
.cart-drawer__checkout-btn {
  width: 100%;
  height: 52px;
  background: #00B1EB;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.2s;
}
.cart-drawer__checkout-btn:hover { background: #0095c8; }

@media (max-width: 480px) {
  .cart-drawer { width: 100vw; }
}
</style>
