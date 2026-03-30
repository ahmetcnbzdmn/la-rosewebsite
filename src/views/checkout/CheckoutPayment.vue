<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCart } from '../../composables/useCart.js'
import orderService from '../../services/orderService.js'

const router = useRouter()
const { items, totalPrice, clearCart } = useCart()

const checkoutInfo = ref(null)
const loading = ref(false)
const errorMsg = ref('')
const paymentMethod = ref('card') // 'card' | 'transfer'

onMounted(() => {
  const stored = sessionStorage.getItem('larose_checkout_info')
  if (!stored) { router.replace('/odeme/bilgiler'); return }
  checkoutInfo.value = JSON.parse(stored)
})

async function submitOrder() {
  if (!checkoutInfo.value || !items.length) return
  loading.value = true
  errorMsg.value = ''

  try {
    const info = checkoutInfo.value

    const orderData = {
      buyer: {
        firstName: info.firstName,
        lastName: info.lastName,
        email: info.email,
        phone: info.phone
      },
      shippingAddress: {
        address: info.address,
        district: info.district || '',
        city: info.city,
        postalCode: info.postalCode || '',
        country: 'Türkiye'
      },
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        slug: item.slug || '',
        subtitle: item.subtitle || '',
        image: item.image || '',
        quantity: item.quantity
      })),
      paymentMethod: paymentMethod.value,
      notes: info.notes || ''
    }

    const result = await orderService.createOrder(orderData)

    // Başarılı — sepeti ve oturum verisini temizle, onay sayfasına yönlendir
    clearCart()
    sessionStorage.removeItem('larose_checkout_info')
    sessionStorage.setItem('larose_last_order', JSON.stringify({
      orderNumber: result.data.orderNumber,
      status: result.data.status,
      totalItems: result.data.totalItems,
      createdAt: result.data.createdAt,
      paymentMethod: paymentMethod.value,
      email: info.email
    }))
    router.push('/odeme/tamamlandi')
  } catch (err) {
    if (err?.errors?.length) {
      // Backend validasyon hataları — ilk birkaçını göster
      errorMsg.value = err.errors.map(e => e.message).join(' · ')
    } else {
      errorMsg.value = err?.message || 'Sipariş oluşturulamadı. Lütfen tekrar deneyin.'
    }
    loading.value = false
  }
}
</script>

<template>
  <main class="checkout-payment">
    <div class="checkout-progress">
      <div class="checkout-progress__inner">
        <router-link to="/sepet" class="step done">1. Sepet</router-link>
        <span class="step-arrow">›</span>
        <router-link to="/odeme/bilgiler" class="step done">2. Bilgiler</router-link>
        <span class="step-arrow">›</span>
        <span class="step active">3. Ödeme</span>
      </div>
    </div>

    <div class="cp-container">
      <!-- Left: Payment -->
      <div class="cp-left">
        <h2 class="cp-title">Ödeme Yöntemi</h2>

        <!-- Customer summary -->
        <div v-if="checkoutInfo" class="cp-customer-box">
          <div class="cp-customer-row">
            <span>{{ checkoutInfo.firstName }} {{ checkoutInfo.lastName }}</span>
            <router-link to="/odeme/bilgiler" class="cp-edit-link">Değiştir</router-link>
          </div>
          <div class="cp-customer-row muted">
            <span>{{ checkoutInfo.email }} · {{ checkoutInfo.phone }}</span>
          </div>
          <div class="cp-customer-row muted">
            <span>{{ checkoutInfo.address }}, {{ checkoutInfo.district }} {{ checkoutInfo.city }}</span>
          </div>
        </div>

        <!-- Payment method tabs -->
        <div class="cp-methods">
          <button
            :class="['cp-method-tab', { active: paymentMethod === 'card' }]"
            @click="paymentMethod = 'card'"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M2 10H22" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            Kredi / Banka Kartı
          </button>
          <button
            :class="['cp-method-tab', { active: paymentMethod === 'transfer' }]"
            @click="paymentMethod = 'transfer'"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5"/>
              <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            Havale / EFT
          </button>
        </div>

        <!-- Card payment (Iyzico) -->
        <div v-if="paymentMethod === 'card'" class="cp-card-section">
          <!-- Iyzico entegrasyonu buraya yerleşecek -->
          <div class="cp-iyzico-placeholder">
            <div class="cp-iyzico-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#00B1EB" stroke-width="1.5"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#00B1EB" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>256-bit SSL ile güvenli ödeme</span>
            </div>
            <!-- Iyzico'nun form içeriği burada oluşacak -->
            <div id="iyzipay-checkout-form" class="cp-iyzico-form-container">
              <div class="cp-iyzico-info">
                <div style="font-size:20px; font-weight:900; letter-spacing:-0.5px; color:#0052cc; margin-bottom:8px;">iyzico</div>
                <p>Güvenli ödeme <strong>iyzico</strong> altyapısı ile gerçekleştirilecektir.</p>
                <p class="cp-iyzico-small">Kredi kartı, banka kartı ve taksit seçenekleri kullanılabilir.</p>
              </div>

              <!-- Demo kart formu — iyzico entegrasyonu sonrası kaldırılacak -->
              <div class="cp-demo-form">
                <div class="cp-field">
                  <label>Kart Üzerindeki İsim</label>
                  <input type="text" placeholder="AD SOYAD" />
                </div>
                <div class="cp-field">
                  <label>Kart Numarası</label>
                  <input type="text" placeholder="0000 0000 0000 0000" maxlength="19" />
                </div>
                <div class="cp-field-row">
                  <div class="cp-field">
                    <label>Son Kullanma Tarihi</label>
                    <input type="text" placeholder="AA/YY" maxlength="5" />
                  </div>
                  <div class="cp-field">
                    <label>CVV</label>
                    <input type="text" placeholder="000" maxlength="3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Security badges -->
          <div class="cp-security">
            <span>🔒 Güvenli Ödeme</span>
            <span>· Visa</span>
            <span>· Mastercard</span>
            <span>· Troy</span>
          </div>
        </div>

        <!-- Bank transfer -->
        <div v-if="paymentMethod === 'transfer'" class="cp-transfer-section">
          <p class="cp-transfer-info">Siparişinizi tamamladıktan sonra banka bilgileri e-posta adresinize gönderilecektir.</p>
          <div class="cp-bank-info">
            <div class="cp-bank-row"><span>Banka</span><span>Türkiye İş Bankası</span></div>
            <div class="cp-bank-row"><span>Hesap Adı</span><span>La Rosée Cosmétiques</span></div>
            <div class="cp-bank-row"><span>IBAN</span><span>TR__ ____ ____ ____ ____ __</span></div>
          </div>
        </div>

        <!-- Hata mesajı -->
        <div v-if="errorMsg" class="cp-error-msg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 8v5M12 16h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          {{ errorMsg }}
        </div>

        <button class="cp-pay-btn" :disabled="loading" @click="submitOrder">
          <span v-if="loading" class="cp-loader"></span>
          <span v-else>
            {{ paymentMethod === 'card' ? 'Siparişi Onayla ve Öde' : 'Sipariş Ver' }}
            <span v-if="totalPrice > 0"> · {{ totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}</span>
          </span>
        </button>

        <p class="cp-terms">
          Siparişi onaylayarak
          <router-link to="/mesafeli-satis-sozlesmesi" target="_blank">Mesafeli Satış Sözleşmesi</router-link>'ni
          ve <router-link to="/gizlilik-ve-guvenlik-sozlesmesi" target="_blank">Kullanım Koşulları</router-link>'nı kabul etmiş sayılırsınız.
        </p>
      </div>

      <!-- Right: Summary -->
      <div class="cp-right">
        <h2 class="cp-summary-title">Sipariş Özeti</h2>
        <div class="cp-summary-items">
          <div v-for="item in items" :key="item.id" class="cp-summary-item">
            <div class="cp-summary-item__img-wrap">
              <img v-if="item.image" :src="item.image" :alt="item.name" />
              <div v-else class="cp-no-img" />
              <span class="cp-summary-item__qty">{{ item.quantity }}</span>
            </div>
            <span class="cp-summary-item__name">{{ item.name }}</span>
          </div>
        </div>
        <div v-if="totalPrice > 0" class="cp-summary-total">
          <span>Toplam</span>
          <strong>{{ totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}</strong>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.checkout-payment {
  background: #fafafa;
  min-height: 100vh;
  padding-top: 80px;
  --blue: #00B1EB;
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
.cp-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
}
@media (max-width: 900px) { .cp-container { grid-template-columns: 1fr; } }
.cp-title {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #3f3f3f;
  margin: 0 0 20px;
}
/* Customer box */
.cp-customer-box {
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 16px 20px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cp-customer-row { display: flex; justify-content: space-between; font-size: 14px; color: #3f3f3f; }
.cp-customer-row.muted { color: #999; font-size: 13px; }
.cp-edit-link { font-size: 13px; color: var(--blue); text-decoration: none; }
.cp-edit-link:hover { text-decoration: underline; }
/* Method tabs */
.cp-methods { display: flex; gap: 12px; margin-bottom: 24px; }
.cp-method-tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 52px;
  border: 1.5px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  font-size: 13px;
  font-weight: 600;
  color: #999;
  cursor: pointer;
  transition: all 0.2s;
}
.cp-method-tab.active { border-color: var(--blue); color: var(--blue); background: #f0fbff; }
/* Iyzico section */
.cp-iyzico-placeholder { background: white; border: 1px solid #f0f0f0; border-radius: 8px; padding: 24px; }
.cp-iyzico-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #00B1EB;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}
.cp-iyzico-form-container { display: flex; flex-direction: column; gap: 20px; }
.cp-iyzico-info { text-align: center; padding: 8px 0; }
.cp-iyzico-info p { font-size: 14px; color: #666; margin: 8px 0 0; }
.cp-iyzico-small { font-size: 12px !important; color: #aaa !important; }
/* Demo form */
.cp-demo-form { display: flex; flex-direction: column; gap: 14px; }
.cp-field { display: flex; flex-direction: column; gap: 6px; }
.cp-field label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #888; }
.cp-field input {
  border: 1.5px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px 14px;
  font-size: 15px;
  color: #3f3f3f;
  font-family: inherit;
  transition: border-color 0.2s;
  letter-spacing: 0.1em;
}
.cp-field input:focus { outline: none; border-color: var(--blue); }
.cp-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.cp-security { display: flex; gap: 8px; font-size: 12px; color: #999; margin-top: 14px; }
/* Transfer */
.cp-transfer-section { background: white; border: 1px solid #f0f0f0; border-radius: 8px; padding: 24px; }
.cp-transfer-info { font-size: 14px; color: #666; margin-bottom: 20px; }
.cp-bank-info { display: flex; flex-direction: column; gap: 12px; }
.cp-bank-row { display: flex; justify-content: space-between; font-size: 14px; padding-bottom: 10px; border-bottom: 1px solid #f5f5f5; }
.cp-bank-row span:first-child { color: #999; }
.cp-bank-row span:last-child { font-weight: 600; color: #3f3f3f; }
/* Pay button */
.cp-pay-btn {
  width: 100%;
  height: 56px;
  background: #3f3f3f;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background 0.2s;
}
.cp-pay-btn:hover:not(:disabled) { background: #000; }
.cp-pay-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.cp-loader {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.cp-terms { font-size: 12px; color: #aaa; text-align: center; margin-top: 12px; line-height: 1.5; }
.cp-terms a { color: #666; }
/* Error */
.cp-error-msg {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff5f5;
  border: 1px solid #ffd7d7;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 13px;
  color: #c0392b;
  margin-top: 16px;
}
/* Right sidebar */
.cp-right {
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 24px;
  position: sticky;
  top: 100px;
}
.cp-summary-title { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #3f3f3f; margin: 0 0 20px; }
.cp-summary-items { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
.cp-summary-item { display: flex; align-items: center; gap: 12px; }
.cp-summary-item__img-wrap { position: relative; width: 48px; height: 48px; flex-shrink: 0; }
.cp-summary-item__img-wrap img { width: 48px; height: 48px; object-fit: cover; border-radius: 4px; }
.cp-no-img { width: 48px; height: 48px; background: #f0f0f0; border-radius: 4px; }
.cp-summary-item__qty {
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
.cp-summary-item__name { font-size: 13px; color: #3f3f3f; line-height: 1.3; }
.cp-summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #3f3f3f;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}
</style>
