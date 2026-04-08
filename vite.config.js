import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const products = JSON.parse(readFileSync(resolve(__dirname, 'src/assets/products.json'), 'utf-8'))
const megaMenuData = JSON.parse(readFileSync(resolve(__dirname, 'src/assets/mega_menu_data.json'), 'utf-8'))

export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    includedRoutes() {
      const staticRoutes = [
        '/',
        '/collections/tum-urunler',
        '/hikayemiz',
        '/ekolojik-donusum',
        '/formullerimiz',
        '/ambalajlarimiz',
        '/dayanisma',
        '/certification-b-corp',
        '/taahhutlerimiz',
        '/nemlendirme-uzmanligimiz',
        '/gunes-bakimi',
        '/iptal-ve-iade-sartlari',
        '/mesafeli-satis-sozlesmesi',
        '/gizlilik-ve-guvenlik-sozlesmesi',
        '/sikca-sorulan-sorular',
        '/iletisim',
        '/policies/cerez-politikasi',
        '/policies/gizlilik-politikasi',
        '/policies/yasal-uyari',
      ]

      const productRoutes = products.map(p => `/urunler/${p.slug}`)
      const collectionRoutes = megaMenuData.collections.map(c => `/collections/${c.slug}`)

      return [...staticRoutes, ...productRoutes, ...collectionRoutes]
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.rosapmobile.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
