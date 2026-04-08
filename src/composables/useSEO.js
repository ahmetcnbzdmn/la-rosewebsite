import { useHead } from '@unhead/vue'

const BASE_TITLE = 'La Rosée Paris'
const BASE_DESC = 'La Rosée Paris — %95+ doğal kökenli bileşenler, B Corp sertifikası ve sürdürülebilir ambalajlarla Fransa\'dan gelen cilt bakım uzmanı.'

export function useSEO({ title, description, image } = {}) {
  const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Doğal & Etkili Cilt Bakımı`
  const desc = description || BASE_DESC
  const img = image || 'https://larosee.com.tr/images/deodorant-hero.jpg'

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: img },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: img },
    ]
  })
}
