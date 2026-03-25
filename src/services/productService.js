const API_URL = import.meta.env.DEV
  ? '/api/products/website'
  : 'https://api.rosapmobile.com/products/website'

let _cache = null
let _cacheTime = 0
const CACHE_TTL = 60 * 1000 // 1 dakika

export async function fetchProducts() {
  const now = Date.now()
  if (_cache && (now - _cacheTime) < CACHE_TTL) return _cache
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Ürünler yüklenemedi')
  const data = await res.json()
  _cache = data.items
  _cacheTime = now
  return _cache
}

export async function fetchProductBySlug(slug) {
  const products = await fetchProducts()
  return products.find(p => p.slug === slug) || null
}

export function clearCache() {
  _cache = null
  _cacheTime = 0
}
