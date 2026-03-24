<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import authService from '../services/authService.js'

const route = useRoute()
const router = useRouter()
const token = route.params.token

const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')
const validationErrors = ref([])

const form = reactive({
  password: '',
  passwordConfirm: ''
})

const handleReset = async () => {
  errorMsg.value = ''
  successMsg.value = ''
  validationErrors.value = []

  if (!form.password) {
    errorMsg.value = 'Lütfen yeni şifrenizi girin'
    return
  }

  if (form.password !== form.passwordConfirm) {
    errorMsg.value = 'Şifreler eşleşmiyor'
    return
  }

  loading.value = true
  try {
    const res = await authService.resetPassword(token, form.password)
    successMsg.value = res.message || 'Şifreniz başarıyla sıfırlandı!'
    setTimeout(() => {
      router.push('/account')
    }, 2000)
  } catch (err) {
    if (err.errors) validationErrors.value = err.errors
    errorMsg.value = err.message || 'Şifre sıfırlama başarısız'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="reset-page">
    <div class="reset-container">
      <div class="reset-card">
        <div class="reset-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#646892" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>

        <h1>Yeni Şifre Belirleyin</h1>
        <p class="subtitle">Hesabınız için yeni bir şifre oluşturun.</p>

        <div v-if="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
        <div v-if="validationErrors.length" class="alert alert-error">
          <span v-for="(err, i) in validationErrors" :key="i">{{ err.message }}<br v-if="i < validationErrors.length - 1" /></span>
        </div>
        <div v-if="successMsg" class="alert alert-success">
          {{ successMsg }}
          <br /><small>Hesabınıza yönlendiriliyorsunuz...</small>
        </div>

        <form v-if="!successMsg" @submit.prevent="handleReset" class="reset-form">
          <div class="form-group">
            <label for="new-pass">Yeni Şifre</label>
            <input id="new-pass" v-model="form.password" type="password" placeholder="En az 8 karakter" required autocomplete="new-password" />
            <small class="hint">En az 8 karakter, büyük harf, küçük harf ve rakam</small>
          </div>
          <div class="form-group">
            <label for="confirm-pass">Şifre Tekrar</label>
            <input id="confirm-pass" v-model="form.passwordConfirm" type="password" placeholder="Şifrenizi tekrar girin" required autocomplete="new-password" />
          </div>
          <button type="submit" class="btn-primary" :disabled="loading">
            <span v-if="loading" class="spinner"></span>
            {{ loading ? 'Kaydediliyor...' : 'Şifreyi Sıfırla' }}
          </button>
        </form>

        <router-link to="/account/login" class="back-link">← Giriş sayfasına dön</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reset-page {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fb;
  padding: 2rem;
}

.reset-container {
  width: 100%;
  max-width: 440px;
}

.reset-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid #eef1f6;
}

.reset-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #f0f3f8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.reset-card h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f2f40;
  text-align: center;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #7a82ab;
  font-size: 0.95rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.reset-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #474861;
}

.form-group input {
  padding: 0.75rem 1rem;
  border: 1.5px solid #e1e8ef;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #2f2f40;
  background: #f9fafa;
  outline: none;
  transition: all 0.2s;
}

.form-group input:focus {
  border-color: #929fc0;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(146, 159, 192, 0.15);
}

.hint {
  font-size: 0.78rem;
  color: #aebbd2;
}

.btn-primary {
  padding: 0.85rem 1.5rem;
  background: #474861;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.btn-primary:hover:not(:disabled) {
  background: #2f2f40;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(47, 47, 64, 0.25);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.alert {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
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
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.back-link {
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  color: #7a82ab;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}

.back-link:hover {
  color: #474861;
}
</style>
