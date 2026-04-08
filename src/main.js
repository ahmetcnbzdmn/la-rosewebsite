import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

import './assets/style.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import { routes, scrollBehavior } from './router/config.js'

import en from './locales/en.json'
import tr from './locales/tr.json'

const LaRoseePreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#f9fafa',
            100: '#f0f3f6',
            200: '#e1e8ef',
            300: '#cad6e4',
            400: '#aebbd2',
            500: '#929fc0',
            600: '#7a82ab',
            700: '#646892',
            800: '#545679',
            900: '#474861',
            950: '#2f2f40'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{primary.500}',
                    inverseColor: '#ffffff',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.700}'
                },
                highlight: {
                    background: '{primary.50}',
                    focusBackground: '{primary.100}',
                    color: '{primary.700}',
                    focusColor: '{primary.800}'
                }
            }
        }
    }
});

export const createApp = ViteSSG(
    App,
    { routes, scrollBehavior },
    ({ app }) => {
        const i18n = createI18n({
            legacy: false,
            locale: 'tr',
            fallbackLocale: 'en',
            messages: { en, tr }
        })

        app.use(i18n)
        app.use(PrimeVue, {
            theme: {
                preset: LaRoseePreset,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'none',
                    cssLayer: false
                }
            }
        })
    }
)
