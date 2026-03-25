import { reactive, computed } from 'vue'

const STORAGE_KEY = 'larose_favorites'

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
})

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
}

export function useFavorites() {
  function isFavorited(productId) {
    return state.items.some(i => i.id === productId)
  }

  function toggleFavorite(product) {
    const idx = state.items.findIndex(i => i.id === product.id)
    if (idx !== -1) {
      state.items.splice(idx, 1)
    } else {
      state.items.push({
        id: product.id,
        slug: product.slug,
        name: product.name_tr || product.name,
        image: product.image,
        subtitle: product.subtitle,
        category: product.category,
      })
    }
    save()
  }

  function removeFavorite(productId) {
    const idx = state.items.findIndex(i => i.id === productId)
    if (idx !== -1) { state.items.splice(idx, 1); save() }
  }

  return {
    favorites: state.items,
    totalCount: computed(() => state.items.length),
    isFavorited,
    toggleFavorite,
    removeFavorite,
  }
}
