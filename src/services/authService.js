const API_URL = import.meta.env.VITE_WEBSITE_API_URL || 'https://la-rose-backend-production.up.railway.app/api';

class AuthService {
  // Kayıt
  async register(userData) {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await res.json();
    if (!res.ok) throw data;
    if (data.data?.token) {
      localStorage.setItem('larose_token', data.data.token);
      localStorage.setItem('larose_user', JSON.stringify(data.data));
    }
    return data;
  }

  // Giriş
  async login(email, password) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw data;
    if (data.data?.token) {
      localStorage.setItem('larose_token', data.data.token);
      localStorage.setItem('larose_user', JSON.stringify(data.data));
    }
    return data;
  }

  // Profil bilgileri
  async getMe() {
    const token = this.getToken();
    if (!token) throw { message: 'Giriş yapmanız gerekiyor' };

    const res = await fetch(`${API_URL}/auth/me`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 401) this.logout();
      throw data;
    }
    return data;
  }

  // Şifre sıfırlama isteği
  async forgotPassword(email) {
    const res = await fetch(`${API_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (!res.ok) throw data;
    return data;
  }

  // Şifre sıfırla (token ile)
  async resetPassword(token, password) {
    const res = await fetch(`${API_URL}/auth/reset-password/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    const data = await res.json();
    if (!res.ok) throw data;
    if (data.data?.token) {
      localStorage.setItem('larose_token', data.data.token);
      localStorage.setItem('larose_user', JSON.stringify(data.data));
    }
    return data;
  }

  // Şifre değiştir (giriş yapmış kullanıcı)
  async changePassword(currentPassword, newPassword) {
    const token = this.getToken();
    if (!token) throw { message: 'Giriş yapmanız gerekiyor' };

    const res = await fetch(`${API_URL}/auth/change-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ currentPassword, newPassword })
    });
    const data = await res.json();
    if (!res.ok) throw data;
    // Yeni token'i kaydet
    if (data.data?.token) {
      localStorage.setItem('larose_token', data.data.token);
    }
    return data;
  }

  // Çıkış
  logout() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('larose_token');
    localStorage.removeItem('larose_user');
  }

  // Token al
  getToken() {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('larose_token');
  }

  // Kullanıcı bilgisi al
  getUser() {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('larose_user');
    return user ? JSON.parse(user) : null;
  }

  // Giriş durumu
  isLoggedIn() {
    return !!this.getToken();
  }
}

export default new AuthService();
