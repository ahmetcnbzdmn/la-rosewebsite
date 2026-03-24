<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth.js'

const router = useRouter()
const { login, register } = useAuth()

const isLogin = ref(true)
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')
const showForgotPassword = ref(false)

const loginForm = reactive({
  email: '',
  password: ''
})

const registerForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  phone: ''
})

const forgotForm = reactive({
  email: ''
})

const validationErrors = ref([])

const switchTab = (tab) => {
  isLogin.value = tab === 'login'
  errorMsg.value = ''
  successMsg.value = ''
  validationErrors.value = []
  showForgotPassword.value = false
}

const handleLogin = async () => {
  errorMsg.value = ''
  if (!loginForm.email || !loginForm.password) {
    errorMsg.value = 'Lütfen tüm alanları doldurun'
    return
  }
  loading.value = true
  try {
    await login(loginForm.email, loginForm.password)
    router.push('/account')
  } catch (err) {
    errorMsg.value = err.message || 'Giriş başarısız'
  } finally {
    loading.value = false
  }
}

const handleRegister = async () => {
  errorMsg.value = ''
  validationErrors.value = []

  if (registerForm.password !== registerForm.passwordConfirm) {
    errorMsg.value = 'Şifreler eşleşmiyor'
    return
  }

  loading.value = true
  try {
    await register({
      firstName: registerForm.firstName,
      lastName: registerForm.lastName,
      email: registerForm.email,
      password: registerForm.password,
      phone: registerForm.phone
    })
    router.push('/account')
  } catch (err) {
    if (err.errors && err.errors.length) {
      validationErrors.value = err.errors
      errorMsg.value = ''
    } else {
      errorMsg.value = err.message || 'Kayıt başarısız'
    }
  } finally {
    loading.value = false
  }
}

const handleForgotPassword = async () => {
  errorMsg.value = ''
  successMsg.value = ''
  if (!forgotForm.email) {
    errorMsg.value = 'Lütfen e-posta adresinizi girin'
    return
  }
  loading.value = true
  try {
    const authService = (await import('../services/authService.js')).default
    const res = await authService.forgotPassword(forgotForm.email)
    if (res.resetUrl) {
      successMsg.value = res.message + '\n\n' + res.resetUrl
    } else {
      successMsg.value = res.message
    }
    forgotForm.email = ''
  } catch (err) {
    errorMsg.value = err.message || 'İşlem başarısız'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-container">
      <!-- Sol taraf - Görsel -->
      <div class="auth-visual">
        <div class="auth-visual-content">
          <img 
            src="https://a.storyblok.com/f/196368/1920x2886/9cc1da4e79/ecran-connexion-2025.jpg" 
            alt="La Rosée" 
          />
          <div class="auth-visual-overlay">
            <h2>La Rosée</h2>
            <p>Doğallığın gücünü keşfedin</p>
          </div>
        </div>
      </div>

      <!-- Sağ taraf - Form -->
      <div class="auth-form-section">
        <!-- Şifremi Unuttum -->
        <div v-if="showForgotPassword" class="auth-form-wrapper">
          <button class="back-btn" @click="showForgotPassword = false; errorMsg = ''; successMsg = ''">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M5 12L12 5M5 12L12 19"/>
            </svg>
            Geri
          </button>
          <h1>Şifremi Unuttum</h1>
          <p class="auth-subtitle">E-posta adresinize şifre sıfırlama bağlantısı göndereceğiz.</p>

          <div v-if="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
          <div v-if="successMsg" class="alert alert-success" style="white-space: pre-line; word-break: break-all;">{{ successMsg }}</div>

          <form @submit.prevent="handleForgotPassword" class="auth-form">
            <div class="form-group">
              <label for="forgot-email">E-posta</label>
              <input id="forgot-email" v-model="forgotForm.email" type="email" placeholder="ornek@email.com" required />
            </div>
            <button type="submit" class="btn-primary" :disabled="loading">
              <span v-if="loading" class="spinner"></span>
              {{ loading ? 'Gönderiliyor...' : 'Bağlantı Gönder' }}
            </button>
          </form>
        </div>

        <!-- Giriş / Kayıt -->
        <div v-else class="auth-form-wrapper">
          <div class="auth-tabs">
            <button :class="['tab', { active: isLogin }]" @click="switchTab('login')">Giriş Yap</button>
            <button :class="['tab', { active: !isLogin }]" @click="switchTab('register')">Kayıt Ol</button>
          </div>

          <div v-if="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
          <div v-if="validationErrors.length" class="alert alert-error">
            <span v-for="(err, i) in validationErrors" :key="i">{{ err.message }}<br v-if="i < validationErrors.length - 1" /></span>
          </div>

          <!-- Giriş Formu -->
          <form v-if="isLogin" @submit.prevent="handleLogin" class="auth-form">
            <div class="form-group">
              <label for="login-email">E-posta</label>
              <input id="login-email" v-model="loginForm.email" type="email" placeholder="ornek@email.com" required autocomplete="email" />
            </div>
            <div class="form-group">
              <label for="login-password">Şifre</label>
              <input id="login-password" v-model="loginForm.password" type="password" placeholder="••••••••" required autocomplete="current-password" />
            </div>
            <button type="button" class="forgot-link" @click="showForgotPassword = true; errorMsg = ''">
              Şifremi unuttum
            </button>
            <button type="submit" class="btn-primary" :disabled="loading">
              <span v-if="loading" class="spinner"></span>
              {{ loading ? 'Giriş yapılıyor...' : 'Giriş Yap' }}
            </button>
          </form>

          <!-- Kayıt Formu -->
          <form v-else @submit.prevent="handleRegister" class="auth-form">
            <div class="form-row">
              <div class="form-group">
                <label for="reg-firstname">Ad</label>
                <input id="reg-firstname" v-model="registerForm.firstName" type="text" placeholder="Adınız" required />
              </div>
              <div class="form-group">
                <label for="reg-lastname">Soyad</label>
                <input id="reg-lastname" v-model="registerForm.lastName" type="text" placeholder="Soyadınız" required />
              </div>
            </div>
            <div class="form-group">
              <label for="reg-email">E-posta</label>
              <input id="reg-email" v-model="registerForm.email" type="email" placeholder="ornek@email.com" required autocomplete="email" />
            </div>
            <div class="form-group">
              <label for="reg-phone">Telefon <span class="optional">(isteğe bağlı)</span></label>
              <input id="reg-phone" v-model="registerForm.phone" type="tel" placeholder="05XX XXX XX XX" />
            </div>
            <div class="form-group">
              <label for="reg-password">Şifre</label>
              <input id="reg-password" v-model="registerForm.password" type="password" placeholder="En az 8 karakter" required autocomplete="new-password" />
              <small class="hint">En az 8 karakter, büyük harf, küçük harf ve rakam içermelidir</small>
            </div>
            <div class="form-group">
              <label for="reg-confirm">Şifre Tekrar</label>
              <input id="reg-confirm" v-model="registerForm.passwordConfirm" type="password" placeholder="Şifrenizi tekrar girin" required autocomplete="new-password" />
            </div>
            <button type="submit" class="btn-primary" :disabled="loading">
              <span v-if="loading" class="spinner"></span>
              {{ loading ? 'Kayıt yapılıyor...' : 'Kayıt Ol' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  background: #f8f9fb;
}

.auth-container {
  display: flex;
  width: 100%;
  min-height: calc(100vh - 80px);
}

/* Sol görsel panel */
.auth-visual {
  flex: 1;
  position: relative;
  overflow: hidden;
  display: none;
}

@media (min-width: 64rem) {
  .auth-visual {
    display: block;
  }
}

.auth-visual-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.auth-visual-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.auth-visual-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem 2.5rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
  color: white;
}

.auth-visual-overlay h2 {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.auth-visual-overlay p {
  font-size: 1.1rem;
  opacity: 0.85;
}

/* Sağ form panel */
.auth-form-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #fff;
}

.auth-form-wrapper {
  width: 100%;
  max-width: 420px;
}

.auth-form-wrapper h1 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2f2f40;
  margin-bottom: 0.5rem;
}

.auth-subtitle {
  color: #7a82ab;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

/* Tabs */
.auth-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e1e8ef;
}

.tab {
  flex: 1;
  padding: 0.9rem 1rem;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: #aebbd2;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
}

.tab.active {
  color: #2f2f40;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #929fc0;
}

.tab:hover:not(.active) {
  color: #646892;
}

/* Form */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
  letter-spacing: 0.02em;
}

.form-group .optional {
  font-weight: 400;
  color: #aebbd2;
}

.form-group input {
  padding: 0.75rem 1rem;
  border: 1.5px solid #e1e8ef;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #2f2f40;
  transition: all 0.2s;
  background: #f9fafa;
  outline: none;
}

.form-group input:focus {
  border-color: #929fc0;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(146, 159, 192, 0.15);
}

.form-group input::placeholder {
  color: #cad6e4;
}

.hint {
  font-size: 0.78rem;
  color: #aebbd2;
  margin-top: 2px;
}

/* Forgot password link */
.forgot-link {
  background: none;
  border: none;
  color: #7a82ab;
  font-size: 0.85rem;
  cursor: pointer;
  text-align: right;
  margin-top: -0.5rem;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: #474861;
}

/* Back button */
.back-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  color: #7a82ab;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1.5rem;
  transition: color 0.2s;
}

.back-btn:hover {
  color: #474861;
}

/* Primary button */
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

/* Alerts */
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

/* Spinner */
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

/* Responsive */
@media (max-width: 63.99rem) {
  .auth-container {
    min-height: calc(100vh - 60px);
  }
  
  .auth-form-section {
    padding: 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
