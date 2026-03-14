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
          path: 'collections/les-produits',
          name: 'all-products',
          component: () => import('../views/AllProducts.vue')
        },
        {
          path: 'collections/:id',
          name: 'collection',
          component: () => import('../views/Collections.vue')
        },
        ...productRoutes,
        {
          path: 'engagements/notre-histoire',
          name: 'our-story',
          component: () => import('../views/OurStory.vue')
        },
        {
          path: 'engagements/:slug',
          name: 'engagement-detail',
          component: () => import('../views/EngagementDetail.vue')
        },
        {
          path: 'pharmacy-locator',
          name: 'pharmacy-locator',
          component: () => import('../views/PharmacyLocator.vue')
        },
        {
          path: 'engagements',
          name: 'our-commitments',
          component: () => import('../views/OurCommitments.vue')
        },
        {
          path: 'pages/l-hydratation-notre-expertise',
          name: 'expertise',
          component: () => import('../views/Expertise.vue')
        },
        {
          path: 'pages/les-solaires-oceans',
          name: 'sun-care',
          component: () => import('../views/SunCare.vue')
        },
        {
          path: 'policies/politique-de-retour',
          name: 'return-policy',
          component: () => import('../views/ReturnPolicy.vue')
        },
        {
          path: 'faq',
          name: 'faq',
          component: () => import('../views/Faq.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/Contact.vue')
        },
        {
          path: 'policies/conditions-generales-de-vente',
          name: 'terms-of-sales',
          component: () => import('../views/TermsOfSales.vue')
        },
        {
          path: 'policies/conditions-generales-d-utilisation-du-site',
          name: 'terms-of-service',
          component: () => import('../views/TermsOfService.vue')
        },
        {
          path: 'policies/politique-de-gestion-des-cookies',
          name: 'cookie-policy',
          component: () => import('../views/CookiePolicy.vue')
        }
      ]
    }
  ]
})

export default router
