import { reactive, computed } from 'vue'

const STORAGE_KEY = 'larose_cart'

function loadFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const state = reactive({
  items: loadFromStorage(),
  isOpen: false,
})

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
}

export function useCart() {
  const totalCount = computed(() =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    state.items.reduce((sum, item) => {
      const price = parseFloat(String(item.price || '0').replace(/[^0-9.]/g, '')) || 0
      return sum + price * item.quantity
    }, 0)
  )

  function addToCart(product, qty = 1) {
    const existing = state.items.find(i => i.id === product.id)
    if (existing) {
      existing.quantity += qty
    } else {
      state.items.push({
        id: product.id,
        slug: product.slug,
        name: product.name_tr || product.name,
        image: product.image,
        subtitle: product.subtitle,
        price: product.price || null,
        quantity: qty,
      })
    }
    save()
    state.isOpen = true
  }

  function removeFromCart(productId) {
    const idx = state.items.findIndex(i => i.id === productId)
    if (idx !== -1) state.items.splice(idx, 1)
    save()
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) { removeFromCart(productId); return }
    const item = state.items.find(i => i.id === productId)
    if (item) { item.quantity = quantity; save() }
  }

  function clearCart() {
    state.items.splice(0)
    save()
  }

  return {
    items: state.items,
    isOpen: computed({
      get: () => state.isOpen,
      set: (v) => { state.isOpen = v },
    }),
    totalCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart: () => { state.isOpen = true },
    closeCart: () => { state.isOpen = false },
  }
}
