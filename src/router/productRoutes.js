export const productRoutes = [
  {
    path: 'urunler/:slug',
    alias: ['products/:slug'],
    name: 'product-detail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: 'en-ww/products/:slug',
    name: 'product-detail-en',
    component: () => import('../views/ProductDetail.vue')
  }
];