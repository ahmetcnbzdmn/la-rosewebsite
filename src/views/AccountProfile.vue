<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth.js'
import authService from '../services/authService.js'
import orderService from '../services/orderService.js'
import { useFavorites } from '../composables/useFavorites.js'

const router = useRouter()
const { state, logout, fetchUser } = useAuth()
const loading = ref(true)

// Siparişler
const orders = ref([])
const ordersLoading = ref(false)

// Favoriler
const { favorites, removeFavorite } = useFavorites()

// Şifre değiştirme
const showPasswordForm = ref(false)
const passwordLoading = ref(false)
const passwordError = ref('')
const passwordSuccess = ref('')
const passwordForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

onMounted(async () => {
  if (!state.isLoggedIn) {
    router.push('/account/login')
    return
  }
  try {
    await fetchUser()
    // Siparişleri çek
    ordersLoading.value = true
    try {
      const res = await orderService.getMyOrders()
      orders.value = res.data || []
    } catch {
      orders.value = []
    } finally {
      ordersLoading.value = false
    }
  } catch {
    router.push('/account/login')
  } finally {
    loading.value = false
  }
})

const handleLogout = () => {
  logout()
  router.push('/')
}

const handleChangePassword = async () => {
  passwordError.value = ''
  passwordSuccess.value = ''

  if (!passwordForm.currentPassword || !passwordForm.newPassword) {
    passwordError.value = 'Lütfen tüm alanları doldurun'
    return
  }
  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    passwordError.value = 'Şifreler eşleşmiyor'
    return
  }

  passwordLoading.value = true
  try {
    const res = await authService.changePassword(
      passwordForm.currentPassword,
      passwordForm.newPassword
    )
    passwordSuccess.value = res.message || 'Şifreniz başarıyla değiştirildi'
    passwordForm.currentPassword = ''
    passwordForm.newPassword = ''
    passwordForm.confirmPassword = ''
    setTimeout(() => {
      showPasswordForm.value = false
      passwordSuccess.value = ''
    }, 3000)
  } catch (err) {
    if (err.errors && err.errors.length) {
      passwordError.value = err.errors.map(e => e.message).join('\n')
    } else {
      passwordError.value = err.message || 'Şifre değiştirme başarısız'
    }
  } finally {
    passwordLoading.value = false
  }
}

const formatDate = (dateStr) => {
  if (!dateStr) return '-'
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="account-page">
    <div class="account-container" v-if="!loading && state.user">
      <!-- Hoşgeldin başlık -->
      <div class="account-header">
        <div class="avatar">
          {{ (state.user.firstName?.[0] || '').toUpperCase() }}{{ (state.user.lastName?.[0] || '').toUpperCase() }}
        </div>
        <div class="header-text">
          <h1>Hoş geldiniz, {{ state.user.firstName }}!</h1>
          <p>Hesap bilgilerinizi buradan görüntüleyebilirsiniz.</p>
        </div>
      </div>

      <!-- Bilgi kartları -->
      <div class="info-grid">
        <div class="info-card">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h3>Kişisel Bilgiler</h3>
          <div class="info-rows">
            <div class="info-row">
              <span class="info-label">Ad Soyad</span>
              <span class="info-value">{{ state.user.firstName }} {{ state.user.lastName }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">E-posta</span>
              <span class="info-value">{{ state.user.email }}</span>
            </div>
            <div class="info-row" v-if="state.user.phone">
              <span class="info-label">Telefon</span>
              <span class="info-value">{{ state.user.phone }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Üyelik Tarihi</span>
              <span class="info-value">{{ formatDate(state.user.createdAt) }}</span>
            </div>
          </div>
        </div>

        <div class="info-card orders-card">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
          </div>
          <h3>Siparişlerim</h3>

          <div v-if="ordersLoading" class="empty-state">
            <div class="loader" style="width:24px;height:24px;border-width:2px;margin:0 auto 8px;"></div>
            <p>Yükleniyor...</p>
          </div>

          <div v-else-if="orders.length === 0" class="empty-state">
            <p>Henüz siparişiniz bulunmuyor.</p>
            <router-link to="/collections/tum-urunler" class="browse-link">Ürünleri Keşfet →</router-link>
          </div>

          <div v-else class="orders-list">
            <div v-for="order in orders" :key="order._id" class="order-item">
              <div class="order-item__header">
                <span class="order-num">{{ order.orderNumber }}</span>
                <span :class="['order-status', `order-status--${order.status}`]">
                  {{ order.status === 'pending' ? 'Beklemede' : order.status === 'confirmed' ? 'Onaylandı' : order.status === 'shipped' ? 'Kargoda' : order.status === 'delivered' ? 'Teslim Edildi' : order.status === 'cancelled' ? 'İptal' : order.status }}
                </span>
              </div>
              <div class="order-item__meta">
                <span>{{ formatDate(order.createdAt) }}</span>
                <span>· {{ order.totalItems }} ürün</span>
                <span>· {{ order.paymentMethod === 'card' ? 'Kredi Kartı' : 'Havale / EFT' }}</span>
              </div>
              <div class="order-item__products">
                {{ order.items.map(i => i.name).join(', ') }}
              </div>
            </div>
          </div>
        </div>

        <div class="info-card">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h3>Favorilerim <span v-if="favorites.length" class="fav-count">{{ favorites.length }}</span></h3>

          <div v-if="favorites.length === 0" class="empty-state">
            <p>Henüz favori ürününüz yok.</p>
            <router-link to="/collections/tum-urunler" class="browse-link">Ürünlere Göz At →</router-link>
          </div>

          <div v-else class="fav-list">
            <div v-for="item in favorites" :key="item.id" class="fav-item">
              <router-link :to="`/urunler/${item.slug}`" class="fav-item__img-wrap">
                <img v-if="item.image" :src="item.image" :alt="item.name" />
                <div v-else class="fav-no-img" />
              </router-link>
              <div class="fav-item__info">
                <router-link :to="`/urunler/${item.slug}`" class="fav-item__name">{{ item.name }}</router-link>
                <span v-if="item.subtitle" class="fav-item__sub">{{ item.subtitle }}</span>
              </div>
              <button class="fav-item__remove" @click="removeFavorite(item.id)" title="Favorilerden çıkar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <router-link to="/favoriler" class="browse-link" style="margin-top:8px;display:inline-block;">Tüm Favoriler →</router-link>
          </div>
        </div>
      </div>

      <!-- Şifre Değiştir -->
      <div class="password-section">
        <div class="info-card">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <div class="password-header">
            <h3>Şifre Değiştir</h3>
            <button v-if="!showPasswordForm" class="change-btn" @click="showPasswordForm = true; passwordError = ''; passwordSuccess = ''">
              Değiştir
            </button>
          </div>

          <div v-if="showPasswordForm" class="password-form-wrapper">
            <div v-if="passwordError" class="alert alert-error" style="white-space: pre-line;">{{ passwordError }}</div>
            <div v-if="passwordSuccess" class="alert alert-success">{{ passwordSuccess }}</div>

            <form v-if="!passwordSuccess" @submit.prevent="handleChangePassword" class="password-form">
              <div class="form-group">
                <label>Mevcut Şifre</label>
                <input v-model="passwordForm.currentPassword" type="password" placeholder="Mevcut şifreniz" required />
              </div>
              <div class="form-group">
                <label>Yeni Şifre</label>
                <input v-model="passwordForm.newPassword" type="password" placeholder="En az 8 karakter" required />
                <small class="hint">En az 8 karakter, büyük harf, küçük harf ve rakam</small>
              </div>
              <div class="form-group">
                <label>Yeni Şifre Tekrar</label>
                <input v-model="passwordForm.confirmPassword" type="password" placeholder="Yeni şifrenizi tekrar" required />
              </div>
              <div class="password-actions">
                <button type="button" class="cancel-btn" @click="showPasswordForm = false">İptal</button>
                <button type="submit" class="save-btn" :disabled="passwordLoading">
                  <span v-if="passwordLoading" class="spinner"></span>
                  {{ passwordLoading ? 'Kaydediliyor...' : 'Kaydet' }}
                </button>
              </div>
            </form>
          </div>

          <p v-else class="password-hint">Şifrenizi değiştirmek için "Değiştir" butonuna tıklayın.</p>
        </div>
      </div>

      <!-- Çıkış butonu -->
      <div class="logout-section">
        <button class="btn-logout" @click="handleLogout">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Çıkış Yap
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-else-if="loading" class="loading-state">
      <div class="loader"></div>
      <p>Yükleniyor...</p>
    </div>
  </div>
</template>

<style scoped>
.account-page {
  min-height: calc(100vh - 80px);
  background: #f8f9fb;
  padding: 2rem 1.5rem 4rem;
}

.account-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Header */
.account-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #474861, #646892);
  border-radius: 16px;
  color: white;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.3);
}

.header-text h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.header-text p {
  opacity: 0.8;
  font-size: 0.95rem;
}

/* Info grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.info-card {
  background: white;
  border-radius: 14px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  border: 1px solid #eef1f6;
  transition: transform 0.2s, box-shadow 0.2s;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
}

.card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #f0f3f8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646892;
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #2f2f40;
  margin-bottom: 1rem;
}

.info-rows {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0f3f8;
}

.info-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.info-label {
  font-size: 0.85rem;
  color: #7a82ab;
  font-weight: 500;
}

.info-value {
  font-size: 0.9rem;
  color: #2f2f40;
  font-weight: 500;
  text-align: right;
}

.empty-state {
  text-align: center;
  padding: 1rem 0;
}

.empty-state p {
  color: #aebbd2;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.browse-link {
  color: #646892;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.browse-link:hover {
  color: #474861;
}

/* Favorites */
.fav-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #646892;
  color: white;
  font-size: 11px;
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  vertical-align: middle;
}
.fav-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f3f8;
}
.fav-item:last-of-type { border-bottom: none; }
.fav-item__img-wrap {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}
.fav-item__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fav-no-img {
  width: 48px;
  height: 48px;
  background: #f0f3f8;
  border-radius: 8px;
}
.fav-item__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.fav-item__name {
  font-size: 13px;
  font-weight: 600;
  color: #2f2f40;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fav-item__name:hover { color: #646892; }
.fav-item__sub {
  font-size: 12px;
  color: #aebbd2;
}
.fav-item__remove {
  background: none;
  border: none;
  color: #c0c0d0;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  transition: color 0.15s, background 0.15s;
  flex-shrink: 0;
}
.fav-item__remove:hover { color: #c44; background: #fff0f0; }

/* Orders */
.orders-card {
  grid-column: 1 / -1;
}
.orders-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.order-item {
  border: 1px solid #eef1f6;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: background 0.15s;
}
.order-item:hover { background: #f8f9fb; }
.order-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order-num {
  font-size: 14px;
  font-weight: 700;
  color: #474861;
  letter-spacing: 0.03em;
}
.order-status {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 20px;
}
.order-status--pending    { background: #fff8e1; color: #f59e0b; }
.order-status--confirmed  { background: #e8f5e9; color: #2e7d32; }
.order-status--shipped    { background: #e3f2fd; color: #1565c0; }
.order-status--delivered  { background: #e8f5e9; color: #2e7d32; }
.order-status--cancelled  { background: #fce4ec; color: #c62828; }
.order-item__meta {
  font-size: 12px;
  color: #aebbd2;
  display: flex;
  gap: 4px;
}
.order-item__products {
  font-size: 13px;
  color: #7a82ab;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Logout */
.logout-section {
  text-align: center;
  padding-top: 1rem;
}

.btn-logout {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: white;
  color: #c44;
  border: 1.5px solid #fdd;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-logout:hover {
  background: #fff0f0;
  border-color: #c44;
}

/* Loading */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
  color: #7a82ab;
}

.loader {
  width: 40px;
  height: 40px;
  border: 3px solid #e1e8ef;
  border-top-color: #646892;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Password section */
.password-section {
  margin-bottom: 2rem;
}

.password-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.change-btn {
  padding: 0.4rem 1rem;
  background: #f0f3f8;
  color: #646892;
  border: 1px solid #e1e8ef;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.change-btn:hover {
  background: #646892;
  color: white;
}

.password-form-wrapper {
  margin-top: 1rem;
}

.password-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.password-form .form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.password-form .form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #474861;
}

.password-form .form-group input {
  padding: 0.7rem 1rem;
  border: 1.5px solid #e1e8ef;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #2f2f40;
  background: #f9fafa;
  outline: none;
  transition: all 0.2s;
}

.password-form .form-group input:focus {
  border-color: #929fc0;
  background: white;
  box-shadow: 0 0 0 3px rgba(146, 159, 192, 0.15);
}

.hint {
  font-size: 0.78rem;
  color: #aebbd2;
}

.password-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.cancel-btn {
  padding: 0.6rem 1.25rem;
  background: white;
  color: #7a82ab;
  border: 1.5px solid #e1e8ef;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.cancel-btn:hover {
  border-color: #aebbd2;
}

.save-btn {
  padding: 0.6rem 1.5rem;
  background: #474861;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.save-btn:hover:not(:disabled) {
  background: #2f2f40;
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.password-hint {
  color: #aebbd2;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.alert {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.alert-error {
  background: #fff0f0;
  color: #c44;
  border: 1px solid #fdd;
}

.alert-success {
  background: #f0fff4;
  color: #2a7;
  border: 1px solid #cfc;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

/* Responsive */
@media (max-width: 640px) {
  .account-header {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .header-text h1 {
    font-size: 1.25rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
  
  .info-value {
    text-align: left;
  }
  
  .password-actions {
    flex-direction: column;
  }
}
</style>
