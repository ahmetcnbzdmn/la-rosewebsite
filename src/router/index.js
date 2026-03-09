import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomeView from '../views/Home.vue'
import { productRoutes } from './productRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          alias: 'en-ww',
          name: 'home',
          component: HomeView
        },
        {
          path: 'en-ww/collections/les-produits',
          name: 'all-products',
          component: () => import('../views/AllProducts.vue')
        },
        {
          path: 'en-ww/collections/:id',
          name: 'collection',
          component: () => import('../views/Collections.vue')
        },
        ...productRoutes,
        {
          path: 'en-ww/engagements/notre-histoire',
          name: 'our-story',
          component: () => import('../views/OurStory.vue')
        },
        {
          path: 'en-ww/pharmacy-locator',
          name: 'pharmacy-locator',
          component: () => import('../views/PharmacyLocator.vue')
        },
        {
          path: 'en-ww/engagements',
          name: 'our-commitments',
          component: () => import('../views/OurCommitments.vue')
        },
        {
          path: 'en-ww/pages/l-hydratation-notre-expertise',
          name: 'expertise',
          component: () => import('../views/Expertise.vue')
        },
        {
          path: 'en-ww/pages/les-solaires-oceans',
          name: 'sun-care',
          component: () => import('../views/SunCare.vue')
        },
        {
          path: 'en-ww/policies/politique-de-retour',
          name: 'return-policy',
          component: () => import('../views/ReturnPolicy.vue')
        },
        {
          path: 'en-ww/faq',
          name: 'faq',
          component: () => import('../views/Faq.vue')
        },
        {
          path: 'en-ww/contact',
          name: 'contact',
          component: () => import('../views/Contact.vue')
        },
        {
          path: 'en-ww/policies/conditions-generales-de-vente',
          name: 'terms-of-sales',
          component: () => import('../views/TermsOfSales.vue')
        },
        {
          path: 'en-ww/policies/conditions-generales-d-utilisation-du-site',
          name: 'terms-of-service',
          component: () => import('../views/TermsOfService.vue')
        }
      ]
    }
  ]
})

export default router
