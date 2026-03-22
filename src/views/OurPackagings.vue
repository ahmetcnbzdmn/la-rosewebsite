<template>
  <div class="our-packagings-page">
    <main class="story-main" id="content">
      <!-- Immersive Hero Section -->
      <section class="story-hero">
        <div class="hero-bg">
          <img src="https://a.storyblok.com/f/196368/2000x2000/aab480cdc3/visuels-categorie-page-impact-2-1.jpg" alt="Ambalajlarımız Hero" class="hero-img">
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <span class="eyebrow fade-in">Taahhütlerimiz</span>
          <h1 class="hero-title fade-in"><em>Eko-tasarım</em> her kararın merkezinde.</h1>
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
          <router-link to="/ekolojik-donusum" class="nav-item">Ekolojik Dönüşüm</router-link>
          <router-link to="/formullerimiz" class="nav-item">Formüllerimiz</router-link>
          <router-link to="/ambalajlarimiz" class="nav-item active">Ambalajlarımız</router-link>
          <router-link to="/dayanisma" class="nav-item">Dayanışma</router-link>
        </div>
      </div>

      <div class="story-container">
        <!-- Section 1: Philosophy -->
        <section class="story-section staggered">
          <div class="section-image animate-on-scroll left">
            <img src="https://a.storyblok.com/f/196368/1920x1920/f55f696738/nos-packagings-eco-concus-au-format-stick.jpg" alt="Sürdürülebilir Ambalaj">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title">Gereksiz olanı <em>eledik</em>.</h2>
            <p>2015'ten bu yana La Rosée, atığı azaltmak için aşırı ambalajlamadan kaçınmaktadır. Eczanelerde ikincil ambalaj (karton kutu) olmadan ürün satan ilk markayız. Kuruluşumuzdan bu yana toplamda 300 tondan fazla karton tasarrufu sağladık.</p>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-value">300+</span>
                <span class="stat-label">Ton Karton Tasarrufu</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">%100</span>
                <span class="stat-label">Geri Dönüştürülebilir Hedefi</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 2: Glass Innovation -->
        <section class="story-section reversed">
          <div class="section-image animate-on-scroll right">
            <img src="https://a.storyblok.com/f/196368/1920x1920/0bfb34b061/flacon-en-verre-recycle-recyclable-a-l-infini.jpg" alt="Cam Şişelerimiz">
          </div>
          <div class="section-text animate-on-scroll left">
            <h2 class="section-title">Sonsuz <em>Döngü</em>: Cam.</h2>
            <p>Cam şişelerimiz, %25'ten fazla geri dönüştürülmüş camdan üretilmektedir. Karbon ayak izini azaltmak için cam şişelerimizin ağırlığını %6 oranında hafiflettik. Eczanelerde sonsuz kez doldurulabilen ilk likit saç bakım serisini cam şişelerle başlattık.</p>
          </div>
        </section>

        <!-- Section 3: Plastic & Plant-based -->
        <section class="story-quote">
          <div class="quote-content animate-on-scroll">
            <p>"2030 yılına kadar ambalajlarımızın hiçbiri fosil kökenli bakir plastik içermeyecek. Gelecek <em>bitkisel</em> ve geri dönüştürülmüş plastiklerde."</p>
          </div>
        </section>

        <section class="story-section">
          <div class="section-image animate-on-scroll left">
            <img src="https://a.storyblok.com/f/196368/1920x2232/47afc06281/ecorecharge-gel-lavant.jpg" alt="Bitkisel Plastik ve Dolum">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title"><em>Akıllı</em> Plastik Kullanımı.</h2>
            <p>Pompalı şişelerimiz, su şişelerinden geri dönüştürülmüş %100'e varan oranda R-PET plastikten yapılır. Tüplerimiz ise Brezilya şeker kamışından elde edilen bitkisel plastikten üretilir. Şeker kamışı tüpleri, petrol bazlı olanlarla aynı korumayı sağlar ancak tamamen yenilenebilir bir kaynaktır.</p>
          </div>
        </section>

        <!-- Section 4: Refills & Vrac -->
        <section class="story-values">
          <div class="values-header animate-on-scroll">
            <h2>Yeniden Dolum Devrimi</h2>
            <p>Daha az plastik, daha fazla gelecek.</p>
          </div>
          <div class="values-grid">
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/3840x2160/a02e18fbf0/deodorant-transition-ecologique.jpg" alt="Eko-Refill" class="value-img">
              <h3>%80 Tasarruf</h3>
              <p>Yedek (refill) kullanımı, standart ambalajlara göre ortalama %80 daha az plastik kullanılmasını sağlar.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/2757x3098/b0d8b92299/meuble-de-service-de-cosmetiques-en-vrac-en-pharmacie.jpg" alt="Açık Satış" class="value-img">
              <h3>Pharma Recharge</h3>
              <p>Paris'teki eczanelerde başlattığımız dökme satış (bulk) deneyi ile tek bir cam şişeyi defalarca doldurabiliyorsunuz.</p>
            </div>
          </div>
        </section>

        <!-- Section 5: B Corp & Deposit -->
        <section class="story-future">
          <div class="future-content animate-on-scroll">
            <div class="bcorp-badge">
              <img src="https://a.storyblok.com/f/196368/81x118/1786c2c8d6/certified_b_corporation_b_corp_logo_2022_black_rgb-1.svg" alt="B Corp">
              <span>Sorumlu Marka</span>
            </div>
            <h2>Depozito Sistemini Test Ediyoruz</h2>
            <p>2024 sonbaharından bu yana seçili eczanelerde iade sistemini test ediyoruz. Boş serum şişelerinizi getirin, hem 2€ indirim kazanın hem de şişelerin temizlenip yeniden kullanılmasını sağlayın.</p>
          </div>
          <div class="future-bg">
            <img src="https://a.storyblok.com/f/196368/1920x1440/c089d2f388/la-rosee-est-distribuee-dans-plus-de-8000-pharmacies.jpg" alt="Sürdürülebilir Eczane">
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

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
.our-packagings-page {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
}

/* Base Premium Styles (Consistent with local design system) */
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
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.25);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
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
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  font-weight: 300;
}

.hero-title em {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
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
  color: #00B18B; /* Eco green */
}

/* Container & Sections */
.story-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1.5rem;
}

.story-section {
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-bottom: 12rem;
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
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 2rem;
  font-weight: 300;
}

.section-title em {
  font-family: serif;
  font-style: italic;
  color: #00B18B;
}

.section-text p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 300;
  color: #00B18B;
  font-family: serif;
  font-style: italic;
}

.stat-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888;
  font-weight: 600;
}

/* Quote Section */
.story-quote {
  text-align: center;
  padding: 10rem 0;
  margin-bottom: 12rem;
  background: #f8fffb;
  border-radius: 24px;
}

.quote-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2.5rem;
}

.quote-content p {
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  font-family: serif;
  font-style: italic;
  line-height: 1.4;
  color: #2c3e50;
}

.quote-content em {
  color: #00B18B;
}

/* Values Grid */
.story-values {
  margin-bottom: 12rem;
}

.values-header {
  text-align: center;
  margin-bottom: 6rem;
}

.values-header h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.values-header p {
  color: #777;
  font-size: 1.2rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
}

.value-card {
  text-align: center;
  padding: 0;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 45px rgba(0,0,0,0.03);
  transition: all 0.4s ease;
}

.value-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.06);
}

.value-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.value-card h3 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  font-weight: 600;
}

.value-card p {
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
  padding: 0 2rem 3rem;
}

/* Future Section */
.story-future {
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
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
  background: rgba(0,0,0,0.55);
}

.future-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.bcorp-badge {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: white;
  color: #333;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.bcorp-badge img {
  height: 30px;
}

.future-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.future-content p {
  font-size: 1.25rem;
  line-height: 1.7;
  opacity: 0.95;
}

/* Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.left { transform: translateX(-60px); }
.animate-on-scroll.right { transform: translateX(60px); }

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translate(0, 0);
}

.fade-in {
  animation: fadeIn 1.3s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
}

.mouse {
  width: 26px;
  height: 44px;
  border: 2px solid rgba(255,255,255,0.6);
  border-radius: 20px;
  position: relative;
}

.mouse::before {
  content: '';
  width: 4px;
  height: 9px;
  background: white;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  animation: scrollAnim 2.2s infinite;
}

@keyframes scrollAnim {
  0% { opacity: 1; top: 10px; }
  100% { opacity: 0; top: 28px; }
}

@media (max-width: 991px) {
  .story-section {
    flex-direction: column !important;
    gap: 4rem;
    margin-bottom: 8rem;
  }
  .values-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .hero-title {
    font-size: 2.5rem;
  }
  .section-title {
    font-size: 2.22rem;
  }
  .subnav-inner {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.8rem;
    gap: 2rem;
  }
}
</style>
