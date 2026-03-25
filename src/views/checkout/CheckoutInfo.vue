<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCart } from '../../composables/useCart.js'

const router = useRouter()
const { items, totalPrice } = useCart()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  district: '',
  postalCode: '',
  country: 'Türkiye',
  billingDifferent: false,
  billingAddress: '',
  billingCity: '',
  notes: '',
})

const errors = ref({})

function validate() {
  const e = {}
  const f = form.value
  if (!f.firstName.trim() || f.firstName.trim().length < 2) e.firstName = 'Ad en az 2 karakter olmalıdır'
  if (!f.lastName.trim() || f.lastName.trim().length < 2) e.lastName = 'Soyad en az 2 karakter olmalıdır'
  if (!f.email.trim() || !f.email.includes('@')) e.email = 'Geçerli e-posta giriniz'
  if (!f.phone.trim() || f.phone.trim().length < 10) e.phone = 'Geçerli telefon numarası giriniz (min. 10 hane)'
  if (!f.address.trim() || f.address.trim().length < 10) e.address = 'Adres en az 10 karakter olmalıdır'
  if (!f.city.trim() || f.city.trim().length < 2) e.city = 'Şehir zorunludur'
  errors.value = e
  return Object.keys(e).length === 0
}

function proceed() {
  if (!validate()) return
  sessionStorage.setItem('larose_checkout_info', JSON.stringify(form.value))
  router.push('/odeme/odeme')
}
</script>

<template>
  <main class="checkout-info">
    <div class="checkout-progress">
      <div class="checkout-progress__inner">
        <router-link to="/sepet" class="step done">1. Sepet</router-link>
        <span class="step-arrow">›</span>
        <span class="step active">2. Bilgiler</span>
        <span class="step-arrow">›</span>
        <span class="step">3. Ödeme</span>
      </div>
    </div>

    <div class="ci-container">
      <div class="ci-left">
        <h2 class="ci-section-title">Teslimat Bilgileri</h2>

        <form class="ci-form" @submit.prevent="proceed">
          <div class="ci-row">
            <div class="ci-field" :class="{ 'has-error': errors.firstName }">
              <label>Ad *</label>
              <input v-model="form.firstName" type="text" placeholder="Adınız" />
              <span v-if="errors.firstName" class="ci-error">{{ errors.firstName }}</span>
            </div>
            <div class="ci-field" :class="{ 'has-error': errors.lastName }">
              <label>Soyad *</label>
              <input v-model="form.lastName" type="text" placeholder="Soyadınız" />
              <span v-if="errors.lastName" class="ci-error">{{ errors.lastName }}</span>
            </div>
          </div>

          <div class="ci-row">
            <div class="ci-field" :class="{ 'has-error': errors.email }">
              <label>E-posta *</label>
              <input v-model="form.email" type="email" placeholder="ornek@email.com" />
              <span v-if="errors.email" class="ci-error">{{ errors.email }}</span>
            </div>
            <div class="ci-field" :class="{ 'has-error': errors.phone }">
              <label>Telefon *</label>
              <input v-model="form.phone" type="tel" placeholder="0500 000 00 00" />
              <span v-if="errors.phone" class="ci-error">{{ errors.phone }}</span>
            </div>
          </div>

          <div class="ci-field" :class="{ 'has-error': errors.address }">
            <label>Teslimat Adresi *</label>
            <textarea v-model="form.address" rows="2" placeholder="Mahalle, sokak, bina no, daire no" />
            <span v-if="errors.address" class="ci-error">{{ errors.address }}</span>
          </div>

          <div class="ci-row">
            <div class="ci-field" :class="{ 'has-error': errors.city }">
              <label>Şehir *</label>
              <input v-model="form.city" type="text" placeholder="İstanbul" />
              <span v-if="errors.city" class="ci-error">{{ errors.city }}</span>
            </div>
            <div class="ci-field">
              <label>İlçe</label>
              <input v-model="form.district" type="text" placeholder="Kadıköy" />
            </div>
            <div class="ci-field ci-field--sm">
              <label>Posta Kodu</label>
              <input v-model="form.postalCode" type="text" placeholder="34710" />
            </div>
          </div>

          <div class="ci-field">
            <label>Ülke</label>
            <input v-model="form.country" type="text" disabled />
          </div>

          <div class="ci-field">
            <label>Sipariş Notu (isteğe bağlı)</label>
            <textarea v-model="form.notes" rows="2" placeholder="Teslimat ile ilgili not..." />
          </div>

          <div class="ci-checkbox">
            <input id="billing-diff" type="checkbox" v-model="form.billingDifferent" />
            <label for="billing-diff">Fatura adresi teslimat adresinden farklı</label>
          </div>

          <div v-if="form.billingDifferent" class="ci-billing-section">
            <h3 class="ci-section-title ci-section-title--sm">Fatura Adresi</h3>
            <div class="ci-field">
              <label>Fatura Adresi</label>
              <textarea v-model="form.billingAddress" rows="2" placeholder="Fatura adresi" />
            </div>
            <div class="ci-field">
              <label>Fatura Şehri</label>
              <input v-model="form.billingCity" type="text" placeholder="Şehir" />
            </div>
          </div>

          <button type="submit" class="ci-submit-btn">
            Ödemeye Geç
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </form>
      </div>

      <!-- Order Summary Sidebar -->
      <div class="ci-right">
        <h2 class="ci-section-title">Sipariş Özeti</h2>
        <div class="ci-order-items">
          <div v-for="item in items" :key="item.id" class="ci-order-item">
            <div class="ci-order-item__img">
              <img v-if="item.image" :src="item.image" :alt="item.name" />
              <div v-else class="ci-order-item__no-img" />
              <span class="ci-order-item__qty">{{ item.quantity }}</span>
            </div>
            <span class="ci-order-item__name">{{ item.name }}</span>
          </div>
        </div>
        <div v-if="totalPrice > 0" class="ci-order-total">
          <span>Toplam</span>
          <span>{{ totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.checkout-info {
  background: #fafafa;
  min-height: 100vh;
  padding-top: 80px;
  --blue: #00B1EB;
  --font-serif: "Chaparral Pro", ui-serif, serif;
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
.step.active { color: var(--blue); }
.step.done { color: #3f3f3f; text-decoration: none; }
.step.done:hover { color: var(--blue); }
.step-arrow { color: #e0e0e0; }
.ci-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
}
@media (max-width: 900px) { .ci-container { grid-template-columns: 1fr; } }
.ci-section-title {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #3f3f3f;
  margin: 0 0 24px;
}
.ci-section-title--sm { font-size: 14px; margin-top: 24px; }
.ci-form { display: flex; flex-direction: column; gap: 16px; }
.ci-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.ci-row .ci-field--sm { grid-column: span 1; max-width: 140px; }
.ci-field { display: flex; flex-direction: column; gap: 6px; }
.ci-field label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #666; }
.ci-field input,
.ci-field textarea,
.ci-field select {
  border: 1.5px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 14px;
  color: #3f3f3f;
  background: white;
  font-family: inherit;
  transition: border-color 0.2s;
  resize: vertical;
}
.ci-field input:focus,
.ci-field textarea:focus { outline: none; border-color: var(--blue); }
.ci-field input:disabled { background: #f9f9f9; color: #999; }
.has-error input,
.has-error textarea { border-color: #e53935; }
.ci-error { font-size: 12px; color: #e53935; }
.ci-checkbox { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #3f3f3f; cursor: pointer; }
.ci-checkbox input { width: 16px; height: 16px; cursor: pointer; accent-color: var(--blue); }
.ci-billing-section { background: #f9f9f9; border-radius: 6px; padding: 16px; display: flex; flex-direction: column; gap: 14px; }
.ci-submit-btn {
  height: 52px;
  background: var(--blue);
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
  margin-top: 8px;
  transition: background 0.2s;
}
.ci-submit-btn:hover { background: #0095c8; }
/* Sidebar */
.ci-right {
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 24px;
  position: sticky;
  top: 100px;
}
.ci-order-items { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
.ci-order-item { display: flex; align-items: center; gap: 12px; }
.ci-order-item__img {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  overflow: visible;
  flex-shrink: 0;
}
.ci-order-item__img img { width: 48px; height: 48px; object-fit: cover; border-radius: 4px; }
.ci-order-item__no-img { width: 48px; height: 48px; background: #f0f0f0; border-radius: 4px; }
.ci-order-item__qty {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #666;
  color: white;
  font-size: 10px;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ci-order-item__name { font-size: 13px; color: #3f3f3f; line-height: 1.3; }
.ci-order-total {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
  color: #3f3f3f;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}
</style>
