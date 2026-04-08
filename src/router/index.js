import { createRouter, createWebHistory } from 'vue-router'
import { routes, scrollBehavior } from './config.js'

export { routes, scrollBehavior }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
})

export default router
