const BASE_TITLE = 'La Rosée Paris'
const BASE_DESC = 'La Rosée Paris — %95+ doğal kökenli bileşenler, B Corp sertifikası ve sürdürülebilir ambalajlarla Fransa\'dan gelen cilt bakım uzmanı.'

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSEO({ title, description, image } = {}) {
  const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Doğal & Etkili Cilt Bakımı`
  const desc = description || BASE_DESC
  const img = image || 'https://larosee.com.tr/images/deodorant-hero.jpg'

  document.title = fullTitle

  setMeta('description', desc)
  setMeta('og:title', fullTitle, 'property')
  setMeta('og:description', desc, 'property')
  setMeta('og:image', img, 'property')
  setMeta('twitter:title', fullTitle)
  setMeta('twitter:description', desc)
  setMeta('twitter:image', img)
}
