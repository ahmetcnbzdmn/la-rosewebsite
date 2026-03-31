<template>
  <div class="ecological-transition-page">
    <main class="story-main" id="content">
      <!-- Immersive Hero Section -->
      <section class="story-hero">
        <div class="hero-bg">
          <img :src="'/images/deodorant-hero.jpg'" alt="Fransız eczanelerinin en çok satan deodorantı" class="hero-img">
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <span class="eyebrow fade-in">Taahhütlerimiz</span>
          <h1 class="hero-title fade-in">Ekolojik <em>geçiş</em> her kararın merkezinde.</h1>
          <div class="scroll-indicator">
            <div class="mouse"></div>
          </div>
        </div>
      </section>

      <!-- Editorial Navigation -->
      <div class="story-subnav">
        <div class="subnav-inner">
          <router-link to="/taahhutlerimiz" class="nav-item back-nav">←</router-link>
          <router-link to="/hikayemiz" class="nav-item">Hikayemiz</router-link>
          <router-link to="/ekolojik-donusum" class="nav-item active">Ekolojik Dönüşüm</router-link>
          <router-link to="/formullerimiz" class="nav-item">Formüllerimiz</router-link>
          <router-link to="/ambalajlarimiz" class="nav-item">Ambalajlarımız</router-link>
          <router-link to="/dayanisma" class="nav-item">Dayanışma</router-link>
        </div>
      </div>

      <div class="story-container">
        <!-- Section 1: The Vision -->
        <section class="story-section staggered">
          <div class="section-image animate-on-scroll left">
            <img src="https://a.storyblok.com/f/196368/3840x2160/a02e18fbf0/deodorant-transition-ecologique.jpg" alt="Sürdürülebilirlik">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title">Geleceği <em>bugünden</em> korumak.</h2>
            <p>2015'ten bu yana La Rosée, çevresel etkiyi azaltmayı her ürün kararının merkezine koymuştur. Biyobozunur formüller, geri dönüştürülmüş ambalajlar ve karbon ayak izini azaltma hedefleriyle, gezegenimize olan borcumuzu ödemek için yorulmadan çalışıyoruz.</p>
          </div>
        </section>

        <!-- Section 2: The Big Goal (Quote) -->
        <section class="story-quote">
          <div class="quote-content animate-on-scroll">
            <p>"Hedefimiz net: 2035 yılına kadar tüm ürünlerimiz <em>katı formda</em> veya yeniden doldurulabilir olacak."</p>
          </div>
        </section>

        <!-- Section 3: Concrete Actions -->
        <section class="story-values">
          <div class="values-header animate-on-scroll">
            <h2>Somut Adımlarımız</h2>
            <p>Taahhütlerimizi adım adım hayata geçiriyoruz.</p>
          </div>
          <div class="values-grid">
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/2000x2000/1b44626fae/visuels-categorie-page-impact-1-1.jpg" alt="Formüller">
              <h3>%95+ Doğal Kaynaklı</h3>
              <p>Formüllerimizde maksimum biyobozunurluk ve minimum çevresel etki sağlıyoruz.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/2000x2000/aab480cdc3/visuels-categorie-page-impact-2-1.jpg" alt="Ambalaj">
              <h3>Sıfır Atık Hedefi</h3>
              <p>Plastik kullanımını minimize ediyor, geri dönüştürülmüş ve geri dönüştürülebilir ambalajlara odaklanıyoruz.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/2000x2000/00a5f0a3cf/visuels-categorie-page-impact-3-1.jpg" alt="Karbon">
              <h3>Karbon Ayak İzi</h3>
              <p>Tedarik zincirimizi optimize ediyor ve karbon salınımımızı telafi etmek için projeleri destekliyoruz.</p>
            </div>
          </div>
        </section>

        <!-- Section 4: CEC Commitment -->
        <section class="story-section reversed">
          <div class="section-text animate-on-scroll left">
            <h2 class="section-title">CEC ile <em>Vizyonumuzu</em> Genişletiyoruz.</h2>
            <p>2024 yılında İklim Şirketleri Sözleşmesi'ne (CEC) katıldık. Bu deneyim, iş modelimizi rejeneratif bir ekonomiye dönüştürme yolunda bize pusula oluyor. Doğadan aldığımızı doğaya geri vermeyi hedefleyen bir marka olma yolunda emin adımlarla ilerliyoruz.</p>
          </div>
          <div class="section-image animate-on-scroll right">
            <img src="https://a.storyblok.com/f/196368/2000x2000/7e5e096a24/visuels-categorie-page-impact-6.jpg" alt="CEC Commitment">
          </div>
        </section>

        <!-- Section 5: B Corp -->
        <section class="story-future">
          <div class="future-content animate-on-scroll">
            <h2>B Corp Sertifikalı Sorumluluk</h2>
            <p>Yüksek sosyal ve çevresel performans standartlarını karşılayan global bir topluluğun parçasıyız. Şeffaflık ve hesap verebilirlik ilkelerimizle geleceği birlikte inşa ediyoruz.</p>
            <div class="bcorp-badge">
              <img src="https://a.storyblok.com/f/196368/81x118/1786c2c8d6/certified_b_corporation_b_corp_logo_2022_black_rgb-1.svg" alt="B Corp">
              <span>B Corp Sertifikalıyız</span>
            </div>
          </div>
          <div class="future-bg">
            <img src="https://a.storyblok.com/f/196368/1920x1920/f55f696738/nos-packagings-eco-concus-au-format-stick.jpg" alt="Gelecek Vizyonu">
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSEO } from '../composables/useSEO.js'
useSEO({ title: 'Ekolojik Dönüşüm', description: 'La Rosée\'nin ekolojik dönüşüm yolculuğu: biyobozunur formüller, geri dönüştürülmüş ambalajlar ve 2035 karbon hedefleri. Sürdürülebilir bir gelecek için somut adımlar.' })

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.ecological-transition-page {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
}

/* Reusing Premium Styles from OurStory */
.story-hero {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.eyebrow {
  display: block;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  line-height: 1.1;
  font-weight: 300;
}

.hero-title em {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
  color: #fff;
}

/* Subnav */
.story-subnav {
  background: white;
  padding: 1.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 64px;
  z-index: 100;
}

.subnav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding: 0 1.5rem;
}

.nav-item {
  text-decoration: none;
  color: #999;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s;
}

.nav-item.active, .nav-item:hover {
  color: #00B1EB; /* Specialized Green for Ecological Transition */
}

/* Container & Sections */
.story-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.story-section {
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-bottom: 10rem;
}

.story-section.reversed {
  flex-direction: row-reverse;
}

.section-image {
  flex: 1.2;
}

.section-image img {
  width: 100%;
  border-radius: 4px;
  box-shadow: 20px 20px 60px rgba(0,0,0,0.05);
}

.section-text {
  flex: 1;
}

.section-title {
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 2rem;
  font-weight: 300;
}

.section-title em {
  font-family: serif;
  font-style: italic;
  color: #00B1EB;
}

.section-text p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
}

/* Quote Section */
.story-quote {
  text-align: center;
  padding: 8rem 0;
  margin-bottom: 8rem;
  background: #fbfbfb;
  border-radius: 20px;
}

.quote-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.quote-content p {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-family: serif;
  font-style: italic;
  line-height: 1.4;
  color: #000;
}

.quote-content em {
  color: #00B1EB;
}

/* Values Grid */
.story-values {
  margin-bottom: 10rem;
}

.values-header {
  text-align: center;
  margin-bottom: 5rem;
}

.values-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
}

.values-header p {
  color: #555;
  font-size: 1.1rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.value-card {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  transition: transform 0.3s;
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
}

.value-card:hover {
  transform: translateY(-10px);
}

.value-card img {
  width: 70px;
  margin-bottom: 2rem;
}

.value-card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.value-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
}

/* Future Section */
.story-future {
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  color: white;
  text-align: center;
}

.future-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.future-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.future-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}

.future-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  padding: 0 2rem;
}

.future-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.future-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.bcorp-badge {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255,255,255,0.1);
  padding: 1rem 2rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
}

.bcorp-badge img {
  width: 40px;
  filter: brightness(0) invert(1);
}

/* Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.left { transform: translateX(-50px); }
.animate-on-scroll.right { transform: translateX(50px); }

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translate(0, 0);
}

.fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
}

.mouse {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 20px;
  position: relative;
}

.mouse::before {
  content: '';
  width: 4px;
  height: 8px;
  background: white;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  animation: scrollAnim 2s infinite;
}

@keyframes scrollAnim {
  0% { opacity: 1; top: 8px; }
  100% { opacity: 0; top: 24px; }
}

@media (max-width: 991px) {
  .story-section {
    flex-direction: column !important;
    gap: 3rem;
    margin-bottom: 6rem;
  }
  .subnav-inner {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.5rem;
  }
  .values-grid {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 2.2rem;
  }
  .section-title {
    font-size: 1.8rem;
  }
}
</style>
