import { reactive } from 'vue';
import authService from '../services/authService.js';

const state = reactive({
  user: authService.getUser(),
  isLoggedIn: authService.isLoggedIn(),
  loading: false
});

export function useAuth() {
  const login = async (email, password) => {
    state.loading = true;
    try {
      const res = await authService.login(email, password);
      state.user = res.data;
      state.isLoggedIn = true;
      return res;
    } finally {
      state.loading = false;
    }
  };

  const register = async (userData) => {
    state.loading = true;
    try {
      const res = await authService.register(userData);
      state.user = res.data;
      state.isLoggedIn = true;
      return res;
    } finally {
      state.loading = false;
    }
  };

  const logout = () => {
    authService.logout();
    state.user = null;
    state.isLoggedIn = false;
  };

  const fetchUser = async () => {
    if (!authService.isLoggedIn()) return;
    state.loading = true;
    try {
      const res = await authService.getMe();
      state.user = res.data;
      state.isLoggedIn = true;
    } catch {
      logout();
    } finally {
      state.loading = false;
    }
  };

  return {
    state,
    login,
    register,
    logout,
    fetchUser
  };
}
