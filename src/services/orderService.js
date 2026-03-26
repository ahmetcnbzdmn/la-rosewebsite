const API_URL = import.meta.env.VITE_WEBSITE_API_URL || 'https://la-rose-backend-production.up.railway.app/api';

class OrderService {
  /**
   * Sipariş oluştur (misafir veya giriş yapmış)
   * @param {Object} orderData - { buyer, shippingAddress, items, paymentMethod, notes?, billingAddress? }
   * @returns {Promise<{ orderNumber, status, totalItems, createdAt }>}
   */
  async createOrder(orderData) {
    const token = localStorage.getItem('larose_token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers,
      body: JSON.stringify(orderData)
    });
    const data = await res.json();
    if (!res.ok) throw data;
    return data;
  }

  /**
   * Giriş yapmış kullanıcının siparişlerini getir
   */
  async getMyOrders() {
    const token = localStorage.getItem('larose_token');
    if (!token) throw { message: 'Giriş yapmanız gerekiyor' };

    const res = await fetch(`${API_URL}/orders/my`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    if (!res.ok) throw data;
    return data;
  }

  /**
   * Sipariş numarası + e-posta ile sorgula (misafir dahil)
   * @param {string} orderNumber
   * @param {string} email
   */
  async getOrderByNumber(orderNumber, email) {
    const res = await fetch(
      `${API_URL}/orders/${encodeURIComponent(orderNumber)}?email=${encodeURIComponent(email)}`
    );
    const data = await res.json();
    if (!res.ok) throw data;
    return data;
  }
}

export default new OrderService();
