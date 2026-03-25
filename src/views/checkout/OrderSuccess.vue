<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const orderInfo = ref(null)

onMounted(() => {
  const stored = sessionStorage.getItem('larose_last_order')
  if (stored) {
    orderInfo.value = JSON.parse(stored)
    sessionStorage.removeItem('larose_last_order')
  }
})
</script>

<template>
  <main class="success-page">
    <div class="success-card">
      <!-- Checkmark animation -->
      <div class="success-icon">
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="25" stroke="#4caf50" stroke-width="2" fill="none" class="circle"/>
          <path d="M14 27l8 8 16-16" stroke="#4caf50" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="check"/>
        </svg>
      </div>

      <h1>Siparişiniz Alındı!</h1>
      <p class="success-sub">Siparişinizi aldık ve en kısa sürede işleme koyuyoruz. Onay e-postası e-posta adresinize gönderilecektir.</p>

      <!-- Sipariş numarası -->
      <div v-if="orderInfo?.orderNumber" class="success-order-number">
        <span class="son-label">Sipariş Numarası</span>
        <span class="son-value">{{ orderInfo.orderNumber }}</span>
      </div>

      <div class="success-info-box">
        <div class="success-info-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00B1EB" stroke-width="1.5"/>
            <path d="M2 8l10 6 10-6" stroke="#00B1EB" stroke-width="1.5"/>
          </svg>
          <span>Onay e-postası {{ orderInfo?.email ? orderInfo.email + ' adresine' : '' }} gönderildi</span>
        </div>
        <!-- Havale uyarısı -->
        <div v-if="orderInfo?.paymentMethod === 'transfer'" class="success-info-row warning">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#e67e22" stroke-width="1.5"/>
            <path d="M12 9v4M12 17h.01" stroke="#e67e22" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>Ödemenizi 2 iş günü içinde havale / EFT ile gönderiniz</span>
        </div>
        <div class="success-info-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="#00B1EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Kargo takibi e-posta ile bildirilecektir</span>
        </div>
      </div>

      <div class="success-actions">
        <router-link to="/collections/tum-urunler" class="success-btn success-btn--primary">
          Alışverişe Devam Et
        </router-link>
        <router-link to="/account" class="success-btn success-btn--outline">
          Siparişlerim
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.success-page {
  background: #fafafa;
  min-height: 100vh;
  padding: 120px 20px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.success-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  padding: 56px 48px;
  max-width: 520px;
  width: 100%;
  text-align: center;
}
.success-icon {
  margin-bottom: 28px;
  display: flex;
  justify-content: center;
}
.circle {
  stroke-dasharray: 157;
  stroke-dashoffset: 157;
  animation: draw-circle 0.6s ease forwards;
}
.check {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: draw-check 0.4s ease 0.5s forwards;
}
@keyframes draw-circle {
  to { stroke-dashoffset: 0; }
}
@keyframes draw-check {
  to { stroke-dashoffset: 0; }
}
h1 {
  font-family: "Chaparral Pro", ui-serif, serif;
  font-size: 32px;
  font-weight: 400;
  color: #3f3f3f;
  margin: 0 0 12px;
}
.success-sub {
  font-size: 15px;
  color: #888;
  line-height: 1.6;
  margin: 0 0 32px;
}
/* Order number */
.success-order-number {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0fbff;
  border: 1px solid #c8ecfb;
  border-radius: 8px;
  padding: 16px 24px;
  margin-bottom: 20px;
  gap: 4px;
}
.son-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
  font-weight: 600;
}
.son-value {
  font-size: 22px;
  font-weight: 700;
  color: #00B1EB;
  letter-spacing: 0.05em;
}
.success-info-box {
  background: #f0fbff;
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.success-info-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #3f3f3f;
}
.success-info-row.warning {
  background: #fff8f0;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 13px;
  color: #e67e22;
}
.success-actions { display: flex; flex-direction: column; gap: 12px; }
.success-btn {
  display: block;
  width: 100%;
  height: 52px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.success-btn--primary { background: #00B1EB; color: white; }
.success-btn--primary:hover { background: #0095c8; }
.success-btn--outline { border: 1.5px solid #3f3f3f; color: #3f3f3f; }
.success-btn--outline:hover { background: #3f3f3f; color: white; }
</style>
