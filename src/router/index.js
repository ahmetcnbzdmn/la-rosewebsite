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
          path: 'collections/tum-urunler',
          alias: ['en-ww/collections/tum-urunler', 'collections/les-produits', 'en-ww/collections/les-produits'],
          name: 'all-products',
          component: () => import('../views/AllProducts.vue')
        },
        {
          path: 'collections/:id',
          alias: ['en-ww/collections/:id'],
          name: 'collection',
          component: () => import('../views/Collections.vue')
        },
        ...productRoutes,
        {
          path: 'hikayemiz',
          alias: ['en-ww/hikayemiz', 'engagements/notre-histoire', 'en-ww/engagements/notre-histoire'],
          name: 'our-story',
          component: () => import('../views/OurStory.vue')
        },
        {
          path: 'ekolojik-donusum',
          alias: ['en-ww/ekolojik-donusum', 'engagements/la-transition-ecologique-au-coeur-de-toutes-nos-decisions', 'en-ww/engagements/la-transition-ecologique-au-coeur-de-toutes-nos-decisions'],
          name: 'ecological-transition',
          component: () => import('../views/EcologicalTransition.vue')
        },
        {
          path: 'formullerimiz',
          alias: ['en-ww/formullerimiz', 'engagements/nos-formules', 'en-ww/engagements/nos-formules'],
          name: 'our-formulas',
          component: () => import('../views/OurFormulas.vue')
        },
        {
          path: 'ambalajlarimiz',
          alias: ['en-ww/ambalajlarimiz', 'engagements/nos-packagings', 'en-ww/engagements/nos-packagings'],
          name: 'our-packagings',
          component: () => import('../views/OurPackagings.vue')
        },
        {
          path: 'dayanisma',
          alias: ['en-ww/dayanisma', 'engagements/des-actions-concretes-pour-la-planete', 'en-ww/engagements/des-actions-concretes-pour-la-planete'],
          name: 'solidarity',
          component: () => import('../views/Solidarity.vue')
        },
        {
          path: 'certification-b-corp',
          alias: ['en-ww/certification-b-corp'],
          name: 'certification-b-corp',
          component: () => import('../views/BCorp.vue')
        },
        {
          path: 'taahhutlerimiz/:slug',
          alias: ['engagements/:slug', 'en-ww/engagements/:slug'],
          name: 'engagement-detail',
          component: () => import('../views/EngagementDetail.vue')
        },
        {
          path: 'pharmacy-locator',
          alias: ['en-ww/pharmacy-locator'],
          name: 'pharmacy-locator',
          component: () => import('../views/PharmacyLocator.vue')
        },
        {
          path: 'eczanelerimiz',
          name: 'pharmacies',
          component: () => import('../views/PharmacyList.vue')
        },
        {
          path: 'taahhutlerimiz',
          alias: ['engagements', 'en-ww/engagements'],
          name: 'our-commitments',
          component: () => import('../views/OurCommitments.vue')
        },
        {
          path: 'nemlendirme-uzmanligimiz',
          alias: ['pages/l-hydratation-notre-expertise', 'en-ww/pages/l-hydratation-notre-expertise', 'engagements/l-hydratation-notre-expertise'],
          name: 'expertise',
          component: () => import('../views/Expertise.vue')
        },
        {
          path: 'gunes-bakimi',
          alias: ['pages/les-solaires-oceans', 'en-ww/pages/les-solaires-oceans', 'gunes-bakimimiz-ve-okyanuslar'],
          name: 'sun-care',
          component: () => import('../views/SunCare.vue')
        },
        {
          path: 'iptal-ve-iade-sartlari',
          alias: ['en-ww/iptal-ve-iade-sartlari', 'policies/iade-politikasi', 'policies/politique-de-retour'],
          name: 'return-policy',
          component: () => import('../views/ReturnPolicy.vue')
        },
        {
          path: 'mesafeli-satis-sozlesmesi',
          alias: ['en-ww/mesafeli-satis-sozlesmesi', 'policies/satis-kosullari', 'policies/conditions-generales-de-vente'],
          name: 'terms-of-sales',
          component: () => import('../views/TermsOfSales.vue')
        },
        {
          path: 'gizlilik-ve-guvenlik-sozlesmesi',
          alias: ['en-ww/gizlilik-ve-guvenlik-sozlesmesi', 'policies/hizmet-kosullari', 'policies/conditions-generales-d-utilisation-du-site'],
          name: 'terms-of-service',
          component: () => import('../views/TermsOfService.vue')
        },
        {
          path: 'sikca-sorulan-sorular',
          alias: ['en-ww/sikca-sorulan-sorular', 'faq', 'en-ww/faq'],
          name: 'faq',
          component: () => import('../views/Faq.vue')
        },
        {
          path: 'iletisim',
          alias: ['en-ww/iletisim', 'contact', 'en-ww/contact'],
          name: 'contact',
          component: () => import('../views/Contact.vue')
        },
        {
          path: 'policies/cerez-politikasi',
          alias: ['en-ww/policies/cerez-politikasi', 'policies/politique-de-gestion-des-cookies', 'en-ww/policies/politique-de-gestion-des-cookies'],
          name: 'cookie-policy',
          component: () => import('../views/CookiePolicy.vue')
        },
        {
          path: 'policies/gizlilik-politikasi',
          alias: ['en-ww/policies/gizlilik-politikasi', 'policies/politique-de-confidentialite', 'en-ww/policies/politique-de-confidentialite'],
          name: 'privacy-policy',
          component: () => import('../views/PrivacyPolicy.vue')
        },
        {
          path: 'policies/yasal-uyari',
          alias: ['en-ww/policies/yasal-uyari', 'policies/mentions-legales', 'en-ww/policies/mentions-legales'],
          name: 'legal-notice',
          component: () => import('../views/LegalNotice.vue')
        },
        {
          path: 'account/login',
          alias: ['en-ww/account/login'],
          name: 'auth-login',
          component: () => import('../views/AuthLogin.vue')
        },
        {
          path: 'account',
          alias: ['en-ww/account'],
          name: 'account-profile',
          component: () => import('../views/AccountProfile.vue')
        },
        {
          path: 'reset-password/:token',
          alias: ['en-ww/reset-password/:token'],
          name: 'reset-password',
          component: () => import('../views/ResetPassword.vue')
        },
        {
          path: 'favoriler',
          name: 'favorites',
          component: () => import('../views/FavoritesPage.vue')
        },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
