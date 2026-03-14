<template>
  <div class="pharmacy-locator-page">
    <main class="Layout-module__content___wEYFD" id="content">
      <header class="pharmacy-hero-header">
        <div class="pharmacy-hero-content">
          <span class="pharmacy-hero-eyebrow">Partner Eczaneler</span>
          <h1 class="pharmacy-hero-title">En yakın La Rosée<br>eczanesini bulun</h1>
          <p class="pharmacy-hero-intro">Kişiselleştirilmiş uzman tavsiyesi için en yakın eczanenizi bulun. Fransa, Belçika, İspanya ve daha fazlasında 11.000+ partner eczane.</p>
          <div class="pharmacy-hero-actions">
            <a class="pharmacy-hero-btn" href="mailto:contact@larosee-cosmetiques.com">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Partner eczane olun
            </a>
          </div>
          <p class="pharmacy-hero-legal">Girdiğiniz bilgiler ortaklık talebiniz için La Rosée Cosmétiques ilgili departmanına iletilecektir.</p>
        </div>
        <div class="pharmacy-hero-bg"></div>
      </header>

      <div class="pharmacy-map-wrapper">
        <div class="pharmacy-search-bar">
          <div class="search-input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Şehir, posta kodu veya eczane adı ara..."
              class="pharmacy-search-input"
              @input="onSearch"
            />
            <button v-if="searchQuery" class="clear-btn" @click="clearSearch">✕</button>
          </div>
          <div v-if="searchQuery && filteredPharmacies.length > 0" class="search-results-count">
            {{ filteredPharmacies.length }} eczane bulundu
          </div>
        </div>

        <div class="map-and-list">
          <div class="pharmacy-list-panel" v-if="searchQuery">
            <div class="pharmacy-list-scroll">
              <div
                v-for="pharmacy in filteredPharmacies.slice(0, 50)"
                :key="pharmacy.id"
                class="pharmacy-list-item"
                @click="focusPharmacy(pharmacy)"
                :class="{ active: selectedPharmacy && selectedPharmacy.id === pharmacy.id }"
              >
                <div class="pharmacy-list-name">{{ pharmacy.name }}</div>
                <div class="pharmacy-list-address">{{ pharmacy.address }}</div>
                <div class="pharmacy-list-city">{{ pharmacy.zip }} {{ pharmacy.city }} · {{ countryName(pharmacy.country) }}</div>
              </div>
              <div v-if="filteredPharmacies.length > 50" class="more-results">
                +{{ filteredPharmacies.length - 50 }} daha fazla sonuç. Aramayı daraltın.
              </div>
            </div>
          </div>

          <div class="map-container" ref="mapContainer"></div>
        </div>
      </div>

      <aside class="NewsletterSection-module__root___j9mxB">
        <img
          srcSet="https://larosee.twic.pics/687x625/7de8cb25a6/pictogrammes_enveloppe-bleu.png/m/687x625?twic=v1/resize=687 1x, https://larosee.twic.pics/687x625/7de8cb25a6/pictogrammes_enveloppe-bleu.png/m/687x625?twic=v1/resize=1374 2x"
          src="https://larosee.twic.pics/687x625/7de8cb25a6/pictogrammes_enveloppe-bleu.png/m/687x625"
          width="687" height="625" alt="" loading="lazy" decoding="async"
          class="NewsletterSection-module__icon___O--LE"
        />
        <h2 class="Heading-module__root___NpBjo NewsletterSection-module__heading___PQV1f" data-font-size="md">Bültenimize kaydolun!</h2>
        <div class="TextContainer-module__root___3x88v NewsletterSection-module__text___au1e0">
          <p>Kaydolduğunuzda %10 indirim kazanın. Özel önizlemeleri, en iyi ipuçlarımızı ve size özel teklifleri kaçırmayın!</p>
        </div>
        <form class="NewsletterSection-module__form___gaiv9" action="/contact?newsletter=true" method="post">
          <div>
            <div class="Input-module__root___xpABX">
              <input class="Input-module__control___V7V8B" placeholder="Email" required type="email" name="email"/>
              <label class="Input-module__label___Uin1P">Email</label>
            </div>
          </div>
          <button class="Button-module__root___Djkf0 NewsletterSection-module__submit___zI-PU" data-variant="flat" data-size="md" type="submit">Gönder</button>
        </form>
        <div class="NewsletterSection-module__social-networks___vlyL-">
          <p>Bizi takip edin</p>
          <ul class="SocialNetworks-module__root___0FcMc">
            <li><a href="https://instagram.com/laroseecosmetiques" target="_blank" rel="noopener noreferrer" title="Instagram"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16V2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z" fill="currentcolor"></path></svg></a></li>
            <li><a href="https://www.facebook.com/laroseecosmetiques" target="_blank" rel="noopener noreferrer" title="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073C24 5.446 18.627 0.072998 12 0.072998C5.373 0.072998 0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927V15.542H7.078V12.072H10.125V9.43C10.125 6.423 11.917 4.761 14.658 4.761C15.97 4.761 17.344 4.996 17.344 4.996V7.949H15.83C14.339 7.949 13.874 8.874 13.874 9.823V12.073H17.202L16.67 15.543H13.874V23.928C19.612 23.027 24 18.062 24 12.073Z" fill="currentcolor"></path></svg></a></li>
          </ul>
        </div>
      </aside>

      <aside class="Reassurances-module__root___evF-d">
        <h2 style="position:absolute;border:0;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;word-wrap:normal">Güvenceler</h2>
        <ul class="Reassurances-module__list___xTpiW">
          <li class="Reassurances-module__item___diEAt">
            <article class="IconWithText-module__root___o-KFW" data-size="lg" data-align="center" data-border="true">
              <img src="https://larosee.twic.pics/101x100/496ca65e00/livraison.svg" width="101" height="100" alt="" loading="lazy" decoding="async" class="IconWithText-module__icon___ST6u4"/>
              <div class="IconWithText-module__text___C0gVA">
                <p class="IconWithText-module__title___BAcgw">Ücretsiz Kargo</p>
                <p>25TL üzeri siparişlerde</p>
              </div>
            </article>
          </li>
          <li class="Reassurances-module__item___diEAt">
            <article class="IconWithText-module__root___o-KFW" data-size="lg" data-align="center" data-border="true">
              <img src="https://larosee.twic.pics/152x150/110e69b8d2/echantillon.svg" width="152" height="150" alt="" loading="lazy" decoding="async" class="IconWithText-module__icon___ST6u4"/>
              <div class="IconWithText-module__text___C0gVA">
                <p class="IconWithText-module__title___BAcgw">1 ücretsiz numune</p>
                <p>her siparişte talep üzerine</p>
              </div>
            </article>
          </li>
          <li class="Reassurances-module__item___diEAt">
            <article class="IconWithText-module__root___o-KFW" data-size="lg" data-align="center" data-border="true">
              <img src="https://larosee.twic.pics/101x100/50787b3336/pharmacies.svg" width="101" height="100" alt="" loading="lazy" decoding="async" class="IconWithText-module__icon___ST6u4"/>
              <div class="IconWithText-module__text___C0gVA">
                <p class="IconWithText-module__title___BAcgw">Partner Eczaneler</p>
                <p><router-link to="/en-ww/pharmacy-locator">yakınınızdaki eczaneyi bulun</router-link></p>
              </div>
            </article>
          </li>
          <li class="Reassurances-module__item___diEAt">
            <article class="IconWithText-module__root___o-KFW" data-size="lg" data-align="center" data-border="true">
              <img src="https://larosee.twic.pics/101x100/efbb8a48d8/sav.svg" width="101" height="100" alt="" loading="lazy" decoding="async" class="IconWithText-module__icon___ST6u4"/>
              <div class="IconWithText-module__text___C0gVA">
                <p class="IconWithText-module__title___BAcgw">Sorunuz mu var?</p>
                <p><router-link to="/en-ww/contact">bize ulaşın</router-link></p>
              </div>
            </article>
          </li>
        </ul>
      </aside>

      <aside class="BCorp-module__root___8-Roy">
        <div class="BCorp-module__content___ISZXE">
          <h2 class="BCorp-module__logo___4DmT9">
            <img src="https://larosee.twic.pics/81x118/1786c2c8d6/certified_b_corporation_b_corp_logo_2022_black_rgb-1.svg" width="81" height="118" alt="Certified B Corporation" loading="lazy" decoding="async"/>
          </h2>
          <div>
            <div class="Heading-module__root___NpBjo BCorp-module__heading___eiN8k" data-font-size="sm">
              <p>La Rosée B Corp sertifikalıdır.<br/>Bu sertifika, sorumlu ve katılımcı bir şirket olmaya olan derin ve samimi bağlılığımızı göstermektedir.</p>
            </div>
            <router-link data-variant="underline" class="Link-module__root___YqUoP" to="/en-ww/certification-b-corp">Taahhütlerimizi keşfedin</router-link>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'
import pharmaciesData from '../assets/pharmacies_optimized.json'

// Fix Leaflet default icon path issue with Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
})

const mapContainer = ref(null)
const searchQuery = ref('')
const selectedPharmacy = ref(null)

let map = null
let markerCluster = null
let allMarkers = []
let searchTimeout = null

const countryNames = {
  Fr: 'Fransa',
  Be: 'Belçika',
  Es: 'İspanya',
  Lu: 'Lüksemburg',
  Ch: 'İsviçre',
  It: 'İtalya',
  De: 'Almanya',
  Nl: 'Hollanda',
  Pt: 'Portekiz',
  At: 'Avusturya',
}

function countryName(code) {
  return countryNames[code] || code
}

const filteredPharmacies = computed(() => {
  if (!searchQuery.value.trim()) return []
  const q = searchQuery.value.toLowerCase().trim()
  return pharmaciesData.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.city.toLowerCase().includes(q) ||
    p.zip.toLowerCase().includes(q) ||
    (p.address && p.address.toLowerCase().includes(q))
  )
})

function onSearch() {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    if (!map || !markerCluster) return

    if (!searchQuery.value.trim()) {
      // Show all markers
      markerCluster.clearLayers()
      markerCluster.addLayers(allMarkers)
      map.setView([46.5, 4.0], 6)
      return
    }

    const results = filteredPharmacies.value
    if (results.length === 0) return

    // Filter markers to only matching ones
    const matchingIds = new Set(results.map(p => p.id))
    const matchingMarkers = allMarkers.filter(m => matchingIds.has(m.options.pharmacyId))

    markerCluster.clearLayers()
    markerCluster.addLayers(matchingMarkers)

    if (matchingMarkers.length > 0) {
      const group = L.featureGroup(matchingMarkers)
      map.fitBounds(group.getBounds().pad(0.2), { maxZoom: 14 })
    }
  }, 300)
}

function clearSearch() {
  searchQuery.value = ''
  selectedPharmacy.value = null
  if (map && markerCluster) {
    markerCluster.clearLayers()
    markerCluster.addLayers(allMarkers)
    map.setView([46.5, 4.0], 6)
  }
}

function focusPharmacy(pharmacy) {
  selectedPharmacy.value = pharmacy
  if (!map) return

  map.setView([pharmacy.lat, pharmacy.lng], 15)

  // Find and open popup for this marker
  const marker = allMarkers.find(m => m.options.pharmacyId === pharmacy.id)
  if (marker) {
    markerCluster.zoomToShowLayer(marker, () => {
      marker.openPopup()
    })
  }
}

function createPopupContent(pharmacy) {
  return `
    <div class="pharmacy-popup">
      <strong class="popup-name">${pharmacy.name}</strong>
      <div class="popup-address">${pharmacy.address}</div>
      <div class="popup-city">${pharmacy.zip} ${pharmacy.city}</div>
      <div class="popup-country">${countryName(pharmacy.country)}</div>
      <a class="popup-directions" href="https://www.google.com/maps/dir/?api=1&destination=${pharmacy.lat},${pharmacy.lng}" target="_blank" rel="noopener">
        Yol tarifi al →
      </a>
    </div>
  `
}

onMounted(() => {
  if (!mapContainer.value) return

  // Initialize map centered on France/Europe
  map = L.map(mapContainer.value, {
    center: [46.5, 4.0],
    zoom: 6,
    zoomControl: true,
  })

  // OpenStreetMap tiles (free, no API key)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map)

  // Custom rose-colored marker icon
  const roseIcon = L.divIcon({
    html: `<div class="pharmacy-pin">
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20C24 5.373 18.627 0 12 0z" fill="#2f7fb8"/>
        <circle cx="12" cy="12" r="5" fill="white"/>
      </svg>
    </div>`,
    className: '',
    iconSize: [24, 32],
    iconAnchor: [12, 32],
    popupAnchor: [0, -32],
  })

  // Create marker cluster group
  markerCluster = L.markerClusterGroup({
    chunkedLoading: true,
    chunkProgress: null,
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
  })

  // Create all markers
  allMarkers = pharmaciesData.map(pharmacy => {
    const marker = L.marker([pharmacy.lat, pharmacy.lng], {
      pharmacyId: pharmacy.id,
      icon: roseIcon,
    })
    marker.bindPopup(createPopupContent(pharmacy), { maxWidth: 250 })
    return marker
  })

  markerCluster.addLayers(allMarkers)
  map.addLayer(markerCluster)
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
  clearTimeout(searchTimeout)
})
</script>

<style scoped>
/* ── Hero Header ─────────────────────────────────── */
.pharmacy-hero-header {
  position: relative;
  background: linear-gradient(135deg, #0a3d62 0%, #1a6fa8 50%, #2196a8 100%);
  overflow: hidden;
  padding: 64px 48px 56px;
}

.pharmacy-hero-bg {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.07) 0%, transparent 60%),
    radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* Subtle pharmacy cross pattern */
.pharmacy-hero-bg::before {
  content: '';
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Crect x='22' y='5' width='16' height='50' rx='4' fill='rgba(255,255,255,0.12)'/%3E%3Crect x='5' y='22' width='50' height='16' rx='4' fill='rgba(255,255,255,0.12)'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
}

.pharmacy-hero-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.pharmacy-hero-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin-bottom: 16px;
  background: rgba(255,255,255,0.12);
  padding: 5px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.2);
}

.pharmacy-hero-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 300;
  color: #fff;
  line-height: 1.2;
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.pharmacy-hero-intro {
  font-size: 1rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
  margin: 0 0 28px;
  max-width: 480px;
}

.pharmacy-hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.pharmacy-hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #fff;
  color: #0a3d62;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.2s, transform 0.15s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}

.pharmacy-hero-btn:hover {
  background: #f0f7ff;
  transform: translateY(-1px);
}

.pharmacy-hero-legal {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  margin: 0;
  max-width: 400px;
}

/* ── Map wrapper ─────────────────────────────────── */
.pharmacy-map-wrapper {
  margin: 0;
  background: #f9f7f5;
}

.pharmacy-search-bar {
  padding: 20px 24px 12px;
  background: #fff;
  border-bottom: 1px solid #e8e0d8;
}

.search-input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f5f0eb;
  border-radius: 8px;
  padding: 10px 16px;
  border: 1px solid #ddd;
}

.search-input-wrap svg {
  color: #888;
  flex-shrink: 0;
}

.pharmacy-search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
  color: #333;
}

.pharmacy-search-input::placeholder {
  color: #aaa;
}

.clear-btn {
  border: none;
  background: none;
  cursor: pointer;
  color: #888;
  font-size: 14px;
  padding: 0 4px;
}

.search-results-count {
  margin-top: 8px;
  font-size: 13px;
  color: #666;
}

.map-and-list {
  display: flex;
  height: 560px;
}

.pharmacy-list-panel {
  width: 320px;
  flex-shrink: 0;
  background: #fff;
  border-right: 1px solid #e8e0d8;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.pharmacy-list-scroll {
  overflow-y: auto;
  flex: 1;
}

.pharmacy-list-item {
  padding: 12px 16px;
  border-bottom: 1px solid #f0ebe5;
  cursor: pointer;
  transition: background 0.15s;
}

.pharmacy-list-item:hover,
.pharmacy-list-item.active {
  background: #f5f0eb;
}

.pharmacy-list-name {
  font-weight: 600;
  font-size: 13px;
  color: #222;
  margin-bottom: 2px;
}

.pharmacy-list-address {
  font-size: 12px;
  color: #666;
}

.pharmacy-list-city {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.more-results {
  padding: 12px 16px;
  font-size: 12px;
  color: #999;
  text-align: center;
  font-style: italic;
}

.map-container {
  flex: 1;
  height: 560px;
  min-height: 400px;
}

@media (max-width: 768px) {
  .map-and-list {
    flex-direction: column;
    height: auto;
  }

  .pharmacy-list-panel {
    width: 100%;
    height: 200px;
    border-right: none;
    border-bottom: 1px solid #e8e0d8;
  }

  .map-container {
    height: 400px;
  }
}
</style>

<style>
/* Global styles for Leaflet popup content */
.pharmacy-popup {
  font-family: inherit;
  min-width: 180px;
}

.popup-name {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #222;
  margin-bottom: 6px;
}

.popup-address,
.popup-city,
.popup-country {
  font-size: 12px;
  color: #555;
  line-height: 1.4;
}

.popup-directions {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  color: #2f7fb8;
  text-decoration: none;
  font-weight: 600;
}

.popup-directions:hover {
  text-decoration: underline;
}

.pharmacy-pin {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
