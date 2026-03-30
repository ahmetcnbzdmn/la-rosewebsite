<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useSEO } from '../composables/useSEO.js'
import { useI18n } from 'vue-i18n'
useSEO({ title: 'Doğal & Etkili Cilt Bakımı', description: 'La Rosée Paris — Fransız eczanelerinin No.1 doğal kozmetik markası. %95+ doğal kökenli, B Corp sertifikalı yüz, vücut, güneş ve bebek bakım ürünleri. Türkiye\'ye özel fiyatlarla.' })
import { fetchProducts } from '../services/productService.js'
import Button from 'primevue/button'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { t } = useI18n()
const IKAS_STORE_URL = 'https://magaza.larosee.com.tr'

const newArrivalsList = ref([])
const bestsellersList = ref([])

onMounted(async () => {
  // Swiper'ları başlat
  new Swiper('.HomeHeader-module__root___NRDQF', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  new Swiper('.HomeShoppables-module__carousel', {
    modules: [Navigation],
    slidesPerView: 1.5,
    spaceBetween: 16,
    breakpoints: {
      640: { slidesPerView: 2.5 },
      1024: { slidesPerView: 4.5 },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // Öne çıkarılan ürünleri yükle (max 8: sol grid 4 + sağ grid 4)
  try {
    const all = await fetchProducts()
    const featured = all.filter(p => p.featured_web).slice(0, 8)
    // İlk 4 → Yeni Gelenler (sol grid), sonraki 4 → Çok Satanlar (sağ grid)
    newArrivalsList.value = featured.slice(0, 4)
    bestsellersList.value = featured.slice(4, 8)
  } catch (e) {
    console.error('Öne çıkan ürünler yüklenemedi:', e)
  }
})

const shoppableVideos = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: 'La Rosée',
  src: `/videos/v${i + 1}.mp4`
}))

const activeVideo = ref(null)
const isModalOpen = ref(false)

const openVideo = (video) => {
  activeVideo.value = video
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  activeVideo.value = null
  document.body.style.overflow = ''
}
</script>

<template>
<main class="Layout-module__content___wEYFD" id="content"><header class="swiper HomeHeader-module__root___NRDQF" style="--progress-duration:8s" data-paused="false"><div class="swiper-wrapper">
    <!-- Slide 1: Image 1 -->
    <div class="swiper-slide">
      <div class="Hero-module__root___x7nJW">
        <div class="Hero-module__media___h24l9">
          <img src="../assets/hero-1.jpg" alt="La Rosée Hero 1" class="hero-slide-img">
        </div>
        <div class="Hero-module__content___6hUpl">
          <div class="Hero-module__pause-zone___m9W13">
            <h1 class="Heading-module__root___NpBjo Hero-module__title___ak74S" data-font-size="lg">Doğal ve Etkili Cilt Bakımı</h1>
            <router-link class="Button-module__root___Djkf0 Hero-module__link___QJaJI" data-variant="light" data-size="md" to="/collections/yuz-bakimi">Hemen Al</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide 2: Image 3 (renamed to hero-2) -->
    <div class="swiper-slide">
      <div class="Hero-module__root___x7nJW">
        <div class="Hero-module__media___h24l9">
          <img src="../assets/hero-2.jpg" alt="La Rosée Hero 2" class="hero-slide-img">
        </div>
        <div class="Hero-module__content___6hUpl">
          <div class="Hero-module__pause-zone___m9W13">
            <h1 class="Heading-module__root___NpBjo Hero-module__title___ak74S" data-font-size="lg">Vücudunuz İçin En İyisi</h1>
            <router-link class="Button-module__root___Djkf0 Hero-module__link___QJaJI" data-variant="light" data-size="md" to="/collections/vucut-bakimi">Keşfet</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide 3: Image 4 (renamed to hero-3) -->
    <div class="swiper-slide">
      <div class="Hero-module__root___x7nJW">
        <div class="Hero-module__media___h24l9">
          <img src="../assets/hero-3.jpg" alt="La Rosée Hero 3" class="hero-slide-img">
        </div>
        <div class="Hero-module__content___6hUpl">
          <div class="Hero-module__pause-zone___m9W13">
            <h1 class="Heading-module__root___NpBjo Hero-module__title___ak74S" data-font-size="lg">Bebekler İçin Saf Dokunuş</h1>
            <router-link class="Button-module__root___Djkf0 Hero-module__link___QJaJI" data-variant="light" data-size="md" to="/collections/bebek-bakimi">İncele</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide 4: Alt Başlık (renamed to hero-4) -->
    <div class="swiper-slide">
      <div class="Hero-module__root___x7nJW">
        <div class="Hero-module__media___h24l9">
          <img src="../assets/hero-4.jpg" alt="La Rosée Hero 4" class="hero-slide-img">
        </div>
        <div class="Hero-module__content___6hUpl">
          <div class="Hero-module__pause-zone___m9W13">
            <h1 class="Heading-module__root___NpBjo Hero-module__title___ak74S" data-font-size="lg">La Rosée Uzmanlığı</h1>
            <router-link class="Button-module__root___Djkf0 Hero-module__link___QJaJI" data-variant="light" data-size="md" to="/nemlendirme-uzmanligimiz">Öğren</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="swiper-pagination"></div>
</header>
 <section class="SpotlightCollections-module__root___M0bxv">
  <div class="SpotlightCollections-module__intro">
    <h2 class="SpotlightCollections-module__text">
      10 yılı aşkın süredir geleceğin güzelliğini şekillendiriyoruz: <em>sürdürülebilir</em>, <em>bilinçli</em> ve <em>kararlı</em>.
    </h2>
  </div>

  <div class="SpotlightCollections-module__collections">
    <!-- Collection 1: Yeni Gelenler (Grid on Left, Large on Right) -->
    <div class="SpotlightCollection-module__root">
      <div class="SpotlightCollection-module__left">
        <h3 class="Eyebrow-module__root">Yeni Gelenler</h3>
        <div class="SpotlightCollection-module__products">
          <div v-for="product in newArrivalsList" :key="product.id" class="ProductCard-module__root">
            <router-link :to="'/urunler/' + product.slug" class="ProductCard-module__link">
              <div class="ProductCard-module__image-container">
                <img v-if="product.image" :src="product.image" :alt="product.name_tr" class="ProductCard-module__image" loading="lazy">
                <div v-else class="ProductCard-module__placeholder"></div>
                <div class="ProductCard-module__tags">
                  <span class="Badge-module__root">YENI</span>
                </div>
              </div>
              <div class="ProductCard-module__info">
                <h4 class="ProductCard-module__title">{{ product.name_tr || product.name }}</h4>
                <p class="ProductCard-module__desc">{{ product.subtitle || '' }}</p>
                <p v-if="product.price" class="ProductCard-module__price">₺{{ Number(product.price).toLocaleString('tr-TR', { minimumFractionDigits: 2 }) }}</p>
              </div>
            </router-link>
            <a :href="IKAS_STORE_URL" target="_blank" rel="noopener" class="ProductCard-module__add-btn">Satın Al</a>
          </div>
        </div>
      </div>
      <div class="SpotlightCollection-module__right">
        <div class="SpotlightCollection-module__collection large-card">
          <div class="SpotlightCollection-module__media">
            <video muted autoplay loop playsinline>
              <source src="../assets/new-arrivals-video.mp4" type="video/mp4">
            </video>
          </div>
          <div class="SpotlightCollection-module__collection-infos">
            <h2 class="SpotlightCollection-module__collection-title">Yeni Gelenler</h2>
            <router-link class="SpotlightCollection-module__see-all" to="/collections/yeni-gelenler">Tüm ürünleri gör</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 2: Çok Satanlar (Large on Left, Grid on Right) -->
    <div class="SpotlightCollection-module__root alternate">
      <div class="SpotlightCollection-module__left">
        <div class="SpotlightCollection-module__collection large-card">
          <div class="SpotlightCollection-module__media">
            <video muted autoplay loop playsinline>
              <source src="../assets/best-sellers-video.mp4" type="video/mp4">
            </video>
          </div>
          <div class="SpotlightCollection-module__collection-infos">
            <h2 class="SpotlightCollection-module__collection-title">Çok Satanlar</h2>
            <router-link class="SpotlightCollection-module__see-all" to="/collections/best-seller">Tüm ürünleri gör</router-link>
          </div>
        </div>
      </div>
      <div class="SpotlightCollection-module__right">
        <h3 class="Eyebrow-module__root">Çok Satanlar</h3>
        <div class="SpotlightCollection-module__products">
          <div v-for="product in bestsellersList" :key="product.id" class="ProductCard-module__root">
            <router-link :to="'/urunler/' + product.slug" class="ProductCard-module__link">
              <div class="ProductCard-module__image-container">
                <img v-if="product.image" :src="product.image" :alt="product.name_tr" class="ProductCard-module__image" loading="lazy">
                <div v-else class="ProductCard-module__placeholder"></div>
                <div class="ProductCard-module__tags">
                  <span class="Badge-module__root">ÇOK SATAN</span>
                </div>
              </div>
              <div class="ProductCard-module__info">
                <h4 class="ProductCard-module__title">{{ product.name_tr || product.name }}</h4>
                <p class="ProductCard-module__desc">{{ product.subtitle || '' }}</p>
                <p v-if="product.price" class="ProductCard-module__price">₺{{ Number(product.price).toLocaleString('tr-TR', { minimumFractionDigits: 2 }) }}</p>
              </div>
            </router-link>
            <a :href="IKAS_STORE_URL" target="_blank" rel="noopener" class="ProductCard-module__add-btn">Satın Al</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="HomeShoppables-module__root">
  <div class="HomeShoppables-module__intro">
    <h2 class="HomeShoppables-module__heading">
      Etkinlik veya duyusallıktan <em>ödün vermeden</em>, <em>%100</em>'e kadar doğal kökenli bileşenlerle formüle edilmiştir
    </h2>
  </div>
  <div class="swiper HomeShoppables-module__carousel">
    <div class="swiper-wrapper">
      <div v-for="video in shoppableVideos" :key="video.id" class="swiper-slide HomeShoppables-module__slide">
        <button class="ShoppableCard-module__root" type="button" @click="openVideo(video)">
          <div class="ShoppableCard-module__media">
            <video :src="video.src" muted autoplay loop playsinline></video>
          </div>
          <span class="ShoppableCard-module__title">{{ video.title }}</span>
          <div class="ShoppableCard-module__play-button">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="white" />
              <path d="M40 30L25 38.6603V21.3397L40 30Z" fill="#3AA0FF" />
            </svg>
          </div>
        </button>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>

  <!-- Video Modal -->
  <div v-if="isModalOpen" class="video-modal-overlay" @click.self="closeModal">
    <div class="video-modal-content">
      <button class="close-modal-btn" @click="closeModal">✕</button>
      <video v-if="activeVideo" controls autoplay playsinline class="modal-video">
        <source :src="activeVideo.src" type="video/mp4">
      </video>
      <div class="modal-info">
        <h3 v-if="activeVideo">{{ activeVideo.title }}</h3>
      </div>
    </div>
  </div>
</section>
</main><aside class="BCorp-module__root___8-Roy"><div class="BCorp-module__content___ISZXE"><h2 class="BCorp-module__logo___4DmT9"><img src="https://larosee.twic.pics/81x118/1786c2c8d6/certified_b_corporation_b_corp_logo_2022_black_rgb-1.svg" width="81" height="118" alt="Certified B Corporation" loading="lazy" decoding="async"/></h2><div><div class="Heading-module__root___NpBjo BCorp-module__heading___eiN8k" data-font-size="sm"><p>La Rosée B Corp sertifikalıdır.<br/>Bu sertifika, sorumlu ve katılımcı bir şirket olmaya olan derin ve samimi bağlılığımızı göstermektedir.</p></div><router-link data-variant="underline" class="Link-module__root___YqUoP" to="/certification-b-corp">Taahhütlerimizi keşfedin</router-link></div></div></aside>
</template>

<style scoped>
/* Modernized 1:1 Match Styles */
.SpotlightCollections-module__root___M0bxv {
    --rgb-dodger-blue: 52 170 255;
    --rgb-azure-radiance: 3 149 254;
    --rgb-mine-shaft: 63 63 63;
    --rgb-geyser: 216 223 231;
    --rgb-hawkes-blue: 235 243 252;
    --rgb-silver-chalice: 159 159 159;
    --background-blue: rgb(var(--rgb-hawkes-blue));
    --color-muted: rgb(var(--rgb-silver-chalice));
    --font-family-sans: "Basis Grotesque Pro", system-ui, sans-serif;
    --font-family-serif: "Chaparral Pro", ui-serif, serif;
    --font-family-cursive: "Dancing Script", cursive;

    padding: 80px 0 0 0;
    background-image: linear-gradient(white 0%, var(--background-blue) 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.SpotlightCollections-module__intro {
    max-width: 1856px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
}

.SpotlightCollections-module__text {
    max-width: 800px;
    font-family: var(--font-family-serif);
    font-size: 40px;
    font-weight: 400;
    line-height: 1.2;
    color: rgb(63, 63, 63);
    text-align: center;
    margin: 0;
}

.SpotlightCollections-module__text em {
    font-family: var(--font-family-cursive);
    font-style: normal;
    font-weight: 600;
}

.SpotlightCollections-module__collections {
    max-width: 1856px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.SpotlightCollection-module__root {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
}

.SpotlightCollection-module__left,
.SpotlightCollection-module__right {
    display: flex;
    flex-direction: column;
}

.SpotlightCollection-module__root.alternate .SpotlightCollection-module__left {
    order: 1;
}
.SpotlightCollection-module__root.alternate .SpotlightCollection-module__right {
    order: 2;
}

.Eyebrow-module__root {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 14px;
    color: var(--color-muted);
    margin-bottom: 32px;
    font-weight: 600;
    text-align: left;
    width: 100%;
}

.SpotlightCollection-module__products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    height: 100%;
}

.ProductCard-module__root {
    background: white;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 452px;
    transition: box-shadow 0.3s ease;
}

.ProductCard-module__root:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.ProductCard-module__link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
}

.ProductCard-module__image-container {
    aspect-ratio: 292 / 340;
    background: #f9f9f9;
    position: relative;
}

.ProductCard-module__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ProductCard-module__info {
    padding: 24px 20px 0 20px;
    text-align: center;
}

.ProductCard-module__title {
    font-family: var(--font-family-serif);
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 8px 0;
    color: #3f3f3f;
}

.ProductCard-module__desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
    line-height: 1.4;
}

.ProductCard-module__price {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 20px;
}

.ProductCard-module__add-btn {
    width: 100%;
    height: 50px;
    background: white;
    border: none;
    border-top: 1px solid rgb(229, 231, 235);
    border-radius: 0;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: rgb(63, 63, 63);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
}

.ProductCard-module__add-btn:hover {
    background: rgb(247, 249, 251);
}

.ProductCard-module__award {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
}

.award-icon {
    width: 46px;
    height: auto;
}

.ProductCard-module__tags {
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 2;
}

.Badge-module__root {
    background: white;
    color: rgb(63, 63, 63);
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.large-card {
    height: 100%;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    min-height: 600px;
}

.SpotlightCollection-module__media {
    width: 100%;
    height: 100%;
}

.SpotlightCollection-module__media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.SpotlightCollection-module__collection-infos {
    position: absolute;
    bottom: 40px;
    left: 40px;
    text-align: left;
    color: white;
    z-index: 2;
}

.SpotlightCollection-module__collection-title {
    font-family: var(--font-family-serif);
    font-size: 32px;
    font-weight: 400;
    margin: 0 0 12px 0;
}

.SpotlightCollection-module__see-all {
    color: white;
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
}

@media (max-width: 1024px) {
    .SpotlightCollection-module__root {
        grid-template-columns: 1fr;
    }
    .SpotlightCollection-module__root.alternate .SpotlightCollection-module__left,
    .SpotlightCollection-module__root.alternate .SpotlightCollection-module__right {
        order: unset;
    }
    .large-card {
        min-height: 400px;
        order: -1;
    }
}

/* HomeShoppables Styles */
.HomeShoppables-module__root {
    padding: 80px 0;
    max-width: 1856px;
    margin: 0 auto;
    width: 100%;
}

.HomeShoppables-module__intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 60px;
    padding: 0 16px;
}

.HomeShoppables-module__heading {
    font-family: var(--font-family-serif, serif);
    font-size: 40px;
    font-weight: 400;
    line-height: 1.2;
    color: rgb(63, 63, 63);
    margin: 0;
}

.HomeShoppables-module__heading em {
    font-family: var(--font-family-cursive);
    font-style: normal;
    font-weight: 600;
}

.HomeShoppables-module__carousel {
    padding: 0 16px;
}

.HomeShoppables-module__slide {
    height: auto;
}

.ShoppableCard-module__root {
    position: relative;
    width: 100%;
    aspect-ratio: 9 / 12;
    border-radius: 6px;
    overflow: hidden;
    border: none;
    padding: 0;
    cursor: pointer;
    background: #f0f0f0;
    display: block;
}

.ShoppableCard-module__media {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.ShoppableCard-module__media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ShoppableCard-module__title {
    position: absolute;
    top: 24px;
    left: 24px;
    right: 24px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    z-index: 2;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.ShoppableCard-module__play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition: transform 0.2s;
}

.ShoppableCard-module__root:hover .ShoppableCard-module__play-button {
    transform: translate(-50%, -50%) scale(1.1);
}

/* Video Modal */
.video-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.video-modal-content {
    position: relative;
    width: 90%;
    max-width: 400px;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.close-modal-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.8);
    color: black;
    border: none;
    font-size: 20px;
    font-weight: bold;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
}

.modal-video {
    width: 100%;
    height: auto;
    max-height: 80vh;
    border-radius: 8px;
    object-fit: contain;
    background: black;
}

.modal-info {
    margin-top: 16px;
    color: white;
    text-align: center;
}

.modal-info h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
}

/* Responsiveness Fixes */
@media (max-width: 768px) {
    .Hero-module__title___ak74S {
        font-size: 32px !important;
    }
    
    .SpotlightCollections-module__text,
    .HomeShoppables-module__heading {
        font-size: 28px !important;
        margin-bottom: 30px;
    }

    .SpotlightCollection-module__root {
        display: flex;
        flex-direction: column;
    }

    .SpotlightCollection-module__products {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .BCorp-module__content___ISZXE {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .BCorp-module__logo___4DmT9 {
        margin: 0 auto;
    }
}


/* Hero slide image */
.hero-slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}

/* Left gradient on each slide */
.Hero-module__media___h24l9::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 65%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.27) 0%, rgba(0,0,0,0.1) 60%, transparent 100%);
    pointer-events: none;
}

.Hero-module__media___h24l9 {
    position: relative;
}

@media (max-width: 768px) {
    .hero-slide-img {
        object-position: center top;
    }

    .Hero-module__media___h24l9::after {
        width: 100%;
        background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 60%, transparent 100%);
    }
}

/* Hero Section Refinements */
.Hero-module__content___6hUpl {
    justify-content: flex-start !important;
    align-items: flex-end !important;
    padding-left: 80px !important;
    padding-bottom: 70px !important;
    text-align: left !important;
}

.Hero-module__pause-zone___m9W13 {
    max-width: 600px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
}

.Hero-module__title___ak74S {
    font-weight: 700 !important;
    line-height: 1.1 !important;
    margin-bottom: 16px !important;
    font-size: 52px !important;
    color: white !important;
    text-shadow: 0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3) !important;
}

.Hero-module__link___QJaJI {
    background: white !important;
    color: black !important;
    padding: 15px 40px !important;
    border-radius: 4px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.1em !important;
    border: none !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    font-size: 13px !important;
}

.Hero-module__link___QJaJI:hover {
    background: rgba(255,255,255,0.85) !important;
}

/* Slide indicators — thin lines bottom left */
:deep(.swiper-pagination) {
    bottom: 24px !important;
    left: 80px !important;
    right: auto !important;
    width: auto !important;
    display: flex !important;
    gap: 6px !important;
    align-items: center !important;
    --swiper-pagination-bullet-height: 2px;
    --height-pagination-bullet: 2px;
}

:deep(.swiper-pagination-bullet) {
    width: 36px !important;
    height: 2px !important;
    min-height: 2px !important;
    max-height: 2px !important;
    border-radius: 1px !important;
    background: rgba(255, 255, 255, 0.4) !important;
    opacity: 1 !important;
    transition: all 0.4s ease !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: content-box !important;
    line-height: 2px !important;
    font-size: 0 !important;
    overflow: hidden !important;
}

:deep(.swiper-pagination-bullet-active) {
    background: white !important;
    width: 54px !important;
}

@media (max-width: 768px) {
    .Hero-module__content___6hUpl {
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-bottom: 55px !important;
        align-items: flex-end !important;
    }

    .Hero-module__pause-zone___m9W13 {
        max-width: 100% !important;
    }

    .Hero-module__title___ak74S {
        font-size: 30px !important;
    }

    .Hero-module__link___QJaJI {
        padding: 12px 28px !important;
        font-size: 12px !important;
    }

    :deep(.swiper-pagination) {
        left: 20px !important;
        bottom: 16px !important;
    }

    :deep(.swiper-pagination-bullet) {
        width: 24px !important;
    }

    :deep(.swiper-pagination-bullet-active) {
        width: 40px !important;
    }
}

</style>
