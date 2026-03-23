<template>
  <div class="bcorp-page">
    <main id="content">
      <!-- Header Section -->
      <header class="bcorp-header">
        <h1 class="heading-md">La Rosée <em>B Corp Sertifikalı</em></h1>
      </header>

      <!-- Video Section -->
      <section class="video-section">
        <div class="video-container">
          <video 
            src="https://a.storyblok.com/f/196368/x/174ab4e338/larosee_bcorp_16x9_soustitres.mp4" 
            autoplay 
            muted 
            loop 
            playsinline
          ></video>
          <div class="video-overlay">
            <span>Çünkü 10 yıl önce...</span>
            <button type="button" class="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="50" fill="#34AAFF"></rect>
                <path d="M63.667 49.657C65.0003 50.4268 65.0003 52.3513 63.667 53.1211L42.5837 65.2936C41.2503 66.0634 39.5837 65.1011 39.5837 63.5615L39.5837 39.2166C39.5837 37.677 41.2503 36.7147 42.5837 37.4845L63.667 49.657Z" fill="white"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Intro Section -->
      <section class="intro-section">
        <div class="intro-content">
          <h2 class="heading-xl">B Corp <em>Sertifikası Nedir?</em></h2>
          <p class="intro-text">
            B Corp, daha adil ve sürdürülebilir bir ekonomik modeli destekleyen şirketlere verilen uluslararası bir sertifikadır. 
            Her eylemin daha iyi bir dünyaya katkıda bulunduğu sorumlu bir şirket vizyonumuzu somutlaştırır.
          </p>
        </div>

        <!-- Carousel / Grid for Criteria -->
        <div class="criteria-carousel">
          <swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :slides-per-view="1.2"
            :space-between="16"
            :pagination="{ clickable: true }"
            :navigation="true"
            :breakpoints="{
              '768': { slidesPerView: 2.5 },
              '1024': { slidesPerView: 4 }
            }"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="criteria-card first-card">
                <img src="https://larosee.twic.pics/265x384/fa05936246/b-corp-logo-svg.svg" alt="B Corp Logo" class="bcorp-logo">
                <p class="card-title">Zorlu bir sürecin ardından alınan bu sertifika, küresel etkiyi beş kritere göre değerlendirir</p>
              </div>
            </swiper-slide>
            <swiper-slide v-for="(item, index) in criteria" :key="index">
              <div class="criteria-card">
                <img :src="item.image" :alt="item.title" class="criteria-media">
                <div class="card-overlay">
                  <span class="card-title">{{ item.title }}</span>
                  <button class="arrow-btn">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="currentColor"></rect>
                      <path d="M12.5 20H27.5M27.5 20L22.1667 15M27.5 20L22.1667 25" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>

      <!-- Fifty-Fifty Blocks -->
      <section class="fifty-fifty-section">
        <div class="block">
          <div class="block-header">
            <h2 class="heading-xl">Bu kolektif başarıdan <em>gurur duyuyoruz</em></h2>
          </div>
          <div class="block-container right">
            <div class="block-media">
              <img src="https://larosee.twic.pics/2000x2000/f67ac1f460/visuels-categorie-page-impact-1-1.jpg/m/2000x2000" alt="Founders">
            </div>
            <div class="block-content">
              <div class="block-body">
                <h3 class="block-card-title">Kurucuların mesajı</h3>
                <p class="block-card-text">
                  « B Corp bir son değil, sürekli gelişim yolculuğumuzda büyük bir adımdır. Bu sertifika, sınırlarımızı zorlama ve her gün daha iyiye gitme yolundaki kararlılığımızı yansıtmaktadır. »
                </p>
              </div>
              <div class="block-footer">
                <span>Coline ve Mahault</span>
              </div>
            </div>
          </div>
        </div>

        <div class="block">
          <div class="block-header">
            <h2 class="heading-xl">La Rosée'de daha <em>sürdürülebilir bir güzellik</em> hayal etmekten gurur duyuyoruz</h2>
            <p class="block-intro">Yarını korumak için dönüşümü inşa etmekten gurur duyuyoruz.</p>
          </div>
          <div class="block-container left">
            <div class="block-media">
              <img src="https://larosee.twic.pics/2332x1503/3ab8fecf76/interview-lola-1.png/m/2332x1503" alt="Interview">
            </div>
            <div class="block-content">
              <div class="block-body">
                <h3 class="block-card-title">Sertifikasyon sürecimizin perde arkası</h3>
                <p class="block-card-text">
                  « B Corp, La Rosée'deki tüm mevcut girişimleri aydınlatırken, sürekli ilerlememiz ve küresel etkimizi güçlendirmemiz için bize bir yol haritası sunuyor. »
                </p>
              </div>
              <div class="block-footer">
                <span>Laure-Anne, RSE Direktörü</span>
                <span class="divider">-</span>
                <a href="#" class="link-underline">Röportajı oku</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Marquee / Autoplay Carousel -->
      <section class="marquee-section">
        <div class="marquee-bg">
          <img src="https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3216158/images/cloud.webp?width=1200&crop=center" alt="Clouds">
        </div>
        <h2 class="heading-xl marquee-title">
          daha sürdürülebilir bir güzellik <em>hayal etmekten gurur duyuyoruz,</em> 
          yarını korumak için dönüşümü <em>inşa etmekten gurur duyuyoruz.</em>
        </h2>
        <div class="marquee-grid">
          <div class="marquee-track">
            <img v-for="(img, i) in marqueeImages" :key="i" :src="img" alt="B Corp Mood">
            <!-- Duplicate for infinite effect if needed, but here we just show a few -->
            <img v-for="(img, i) in marqueeImages" :key="'dup-'+i" :src="img" alt="B Corp Mood">
          </div>
        </div>
      </section>

      <!-- Reassurances -->
      <section class="commitments-grid">
        <h2 class="heading-md">Her gün somut taahhütler</h2>
        <div class="grid-container">
          <div v-for="(item, i) in commitments" :key="i" class="commitment-item">
            <img :src="item.icon" :alt="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const criteria = [
  { title: 'Yönetişim', image: 'https://larosee.twic.pics/726x900/9915ba34a9/b-corp-gouvernance.jpg/m/726x900' },
  { title: 'Çalışanlarımız', image: 'https://larosee.twic.pics/726x900/141721052b/b-corp-collaborateurs.jpg/m/726x900' },
  { title: 'Çevre', image: 'https://larosee.twic.pics/726x900/86ee642062/b-corp-environnement.jpg/m/726x900' },
  { title: 'Toplum', image: 'https://larosee.twic.pics/726x900/14fc3ca198/b-corp-collectivite.jpg/m/726x900' },
  { title: 'Tüketicilerimiz', image: 'https://larosee.twic.pics/726x900/7b4839310e/b-corp-clients.jpg/m/726x900' }
];

const marqueeImages = [
  'https://larosee.twic.pics/3840x3840/c85583426a/b-corp-mood-5.webp/m/3840x3840',
  'https://larosee.twic.pics/3840x3840/5cbb7837c5/b-corp-mood-10.webp/m/3840x3840',
  'https://larosee.twic.pics/3840x3840/b1e4074051/b-corp-mood-8.webp/m/3840x3840',
  'https://larosee.twic.pics/3840x3840/c57f1e63af/b-corp-mood-2.webp/m/3840x3840',
  'https://larosee.twic.pics/3840x3840/c1e9420794/b-corp-mood-4.webp/m/3840x3840',
  'https://larosee.twic.pics/3840x3840/e139fdeb03/b-corp-mood-6.webp/m/3840x3840'
];

const commitments = [
  { title: 'Sıkı Kriterler', desc: 'Sıkı bir tüzüğe göre formüle edilmiş ürünler', icon: 'https://larosee.twic.pics/625x625/b75798f841/picto-charte-drastique.png/m/625x625' },
  { title: 'Eko-tasarlanmış ambalajlar', desc: 'Ürünlerimizin %100\'ü eko-tasarımlıdır', icon: 'https://larosee.twic.pics/687x625/50690e4c1f/picto-emballages-eco-concus.png/m/687x625' },
  { title: 'Sorumlu ortaklar', desc: 'Değerlerimizi paylaşan ortaklar', icon: 'https://larosee.twic.pics/687x625/6910c27ef2/picto-partenaires-responsables.png/m/687x625' },
  { title: 'Fransa\'da üretilmiştir', desc: 'Ürünlerimizin %100\'ü Fransa\'da üretilmektedir', icon: 'https://larosee.twic.pics/625x625/9ace96175a/picto-fabriques-en-france.png/m/625x625' },
  { title: 'Dayanışma taahhütleri', desc: 'Terre Mer Humain hayırseverlik programı', icon: 'https://larosee.twic.pics/687x625/cb12ebf4db/picto-engagements-solidaires.png/m/687x625' }
];
</script>

<style scoped>
.bcorp-page {
  background: #fff;
  color: #333;
  overflow-x: hidden;
}

.heading-md {
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
}

.heading-md em {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
}

.heading-xl {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.1;
}

.heading-xl em {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
}

.bcorp-header {
  padding: 100px 20px 60px;
}

.video-section {
  width: 100%;
  margin-bottom: 100px;
}

.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.1);
  color: white;
  pointer-events: none;
}

.video-overlay span {
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 500;
}

.play-button {
  pointer-events: auto;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.intro-section {
  max-width: 1400px;
  margin: 0 auto 150px;
  padding: 0 40px;
}

.intro-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
}

.intro-text {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #666;
  margin-top: 30px;
}

.criteria-carousel {
  margin-top: 60px;
}

.criteria-card {
  position: relative;
  aspect-ratio: 3/4;
  border-radius: 20px;
  overflow: hidden;
  background: #f9f9f9;
}

.first-card {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f0f7ff;
}

.bcorp-logo {
  width: 150px;
  margin-bottom: 30px;
}

.criteria-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: linear-gradient(transparent, rgba(0,0,0,0.4));
  color: white;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
}

.arrow-btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}

.fifty-fifty-section {
  max-width: 1400px;
  margin: 0 auto 150px;
  padding: 0 40px;
}

.block {
  margin-bottom: 200px;
}

.block-header {
  margin-bottom: 60px;
  max-width: 800px;
}

.block-container {
  display: flex;
  gap: 80px;
  align-items: center;
}

.block-container.right {
  flex-direction: row;
}

.block-container.left {
  flex-direction: row-reverse;
}

.block-media {
  flex: 1;
}

.block-media img {
  width: 100%;
  border-radius: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.block-content {
  flex: 1;
  max-width: 500px;
}

.block-card-title {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #888;
}

.block-card-text {
  font-size: 1.8rem;
  line-height: 1.3;
  font-weight: 300;
  color: #1a1a1a;
}

.block-footer {
  margin-top: 40px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.divider {
  color: #ccc;
}

.link-underline {
  color: #34AAFF;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.marquee-section {
  position: relative;
  padding: 200px 0;
  background: #f0f7ff;
  text-align: center;
  overflow: hidden;
}

.marquee-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.marquee-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.marquee-title {
  position: relative;
  z-index: 2;
  margin-bottom: 100px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;
}

.marquee-grid {
  position: relative;
  z-index: 2;
  width: 100%;
}

.marquee-track {
  display: flex;
  gap: 20px;
  animation: scroll 30s linear infinite;
  width: max-content;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-track img {
  width: 300px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 20px;
}

.commitments-grid {
  max-width: 1200px;
  margin: 150px auto;
  padding: 0 40px;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.commitment-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.commitment-item img {
  width: 100px;
  margin-bottom: 20px;
}

.commitment-item h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.commitment-item p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

@media (max-width: 991px) {
  .heading-xl { font-size: 2.5rem; }
  .block-container { flex-direction: column !important; gap: 40px; }
  .block-content { max-width: 100%; text-align: center; }
  .block-header { text-align: center; margin: 0 auto 40px; }
  .marquee-track img { width: 200px; }
}
</style>
