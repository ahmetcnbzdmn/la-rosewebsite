<template>
  <div class="our-formulas-page">
    <main class="story-main" id="content">
      <!-- Immersive Hero Section -->
      <section class="story-hero">
        <div class="hero-bg">
          <img src="https://a.storyblok.com/f/196368/2000x2000/aab480cdc3/visuels-categorie-page-impact-2-1.jpg" alt="Our Formulas Hero" class="hero-img">
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <span class="eyebrow fade-in">Taahhütlerimiz</span>
          <h1 class="hero-title fade-in">Doğallık ve <em>Etkinlik</em> dengesi.</h1>
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
          <router-link to="/formullerimiz" class="nav-item active">Formüllerimiz</router-link>
          <router-link to="/ambalajlarimiz" class="nav-item">Ambalajlarımız</router-link>
          <router-link to="/dayanisma" class="nav-item">Dayanışma</router-link>
        </div>
      </div>

      <div class="story-container">
        <!-- Section 1: Natural Origin -->
        <section class="story-section staggered">
          <div class="section-image animate-on-scroll left">
            <img src="https://a.storyblok.com/f/196368/2000x2000/1b44626fae/visuels-categorie-page-impact-1-1.jpg" alt="Doğal Kaynaklı Formüller">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title">En <em>saf</em> haliyle doğa.</h2>
            <p>Geliştirdiğimiz formüller, etkinlik veya duyusal deneyimden ödün vermeden en doğal olmayı hedefler. 2025 itibarıyla ürün yelpazemizin ortalama doğal kaynaklı içerik oranı %98'dir. Ürünlerimizin üçte birinden fazlası %100 doğal kaynaklı içeriklerle üretilmektedir.</p>
          </div>
        </section>

        <!-- Section 2: Strict Charter (Drastic Charter) -->
        <section class="story-quote blue">
          <div class="quote-content animate-on-scroll">
            <p>"2015'ten beri Fransız kozmetik dünyasında <em>'en temiz'</em> güzellik yaklaşımına öncülük ediyoruz. Radikal bir kararla yüzlerce tartışmalı içeriği formüllerimizden sonsuza dek çıkardık."</p>
          </div>
        </section>

        <!-- Section 3: Clean Beauty Details -->
        <section class="story-section reversed">
          <div class="section-text animate-on-scroll left">
            <h2 class="section-title">Sadece <em>gereken</em> içerikler.</h2>
            <p>La Rosée olarak şeffaflık temel değerimizdir. Formüllerimiz, gereksiz hiçbir bileşen içermeden, doğru dozlanmış aktif maddelerden oluşur. İçerik sayısını sınırlamak sadece cildiniz için daha yüksek konsantrasyonda etki sağlamakla kalmaz, aynı zamanda alerji riskini de minimize eder.</p>
            <ul class="clean-list">
              <li>Slikon içermez</li>
              <li>PEG içermez</li>
              <li>Mineral yağlar içermez</li>
              <li>Paraben ve sülfat içermez</li>
            </ul>
          </div>
          <div class="section-image animate-on-scroll right">
            <img src="https://a.storyblok.com/f/196368/2000x2000/00a5f0a3cf/visuels-categorie-page-impact-3-1.jpg" alt="Temiz İçerik">
          </div>
        </section>

        <!-- Section 4: Clinical Efficacy -->
        <section class="story-values">
          <div class="values-header animate-on-scroll">
            <h2>Bilimsel Olarak Kanıtlanmış</h2>
            <p>Dermatolojik kontrol altında titizlikle test edilen formüller.</p>
          </div>
          <div class="values-grid">
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/152x150/eae4b1aa6e/efficacite.svg" alt="Etkinlik">
              <h3>Klinik Testler</h3>
              <p>Bağımsız laboratuvarlarda, uzman dermatologlar eşliğinde gönüllü panellerinde gerçek kullanım koşullarında test edilir.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/101x100/efbb8a48d8/sav.svg" alt="Güvenlik">
              <h3>Hassas Ciltler</h3>
              <p>Bebek ve hassas ciltler için pediatrik ve oftalmolojik denetimler altında en yüksek tolerans seviyeleri hedeflenir.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/152x150/b24ef920e9/naturalite.svg" alt="Hayvan Hakları">
              <h3>Vegan ve Cruelty-Free</h3>
              <p>Avrupa düzenlemelerine uygun olarak hiçbir ürünümüz hayvanlar üzerinde test edilmemektedir. Ürünlerimizin %90'ından fazlası vegandır.</p>
            </div>
          </div>
        </section>

        <!-- Section 5: Innovation & Upcycling -->
        <section class="story-section">
          <div class="section-image animate-on-scroll left">
            <img src="https://a.storyblok.com/f/196368/2000x2000/7e5e096a24/visuels-categorie-page-impact-6.jpg" alt="Upcycling">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title">İleri Dönüşüm: <em>Yeni</em> Nesil İçerikler.</h2>
            <p>Gıda endüstrisinden gelen yan ürünleri, kozmetik aktif maddelere dönüştürerek onlara yeni bir değer kazandırıyoruz. Cleansing Balm ürünümüzdeki organik kiraz yağı veya Skincare Powders ürünümüzdeki kayısı yağı, bu döngüsel ekonomi yaklaşımımızın sadece birkaç örneğidir.</p>
          </div>
        </section>

        <!-- Section 6: Future Vision -->
        <section class="story-future">
          <div class="future-content animate-on-scroll">
            <h2>Sürekli İyileşme Sözü</h2>
            <p>Her yeni veya yenilenen ürünümüz, Yaşam Döngüsü Analizi aracımızla ölçüldüğünde bir önceki versiyonundan daha yüksek performans ve daha düşük çevresel etki göstermek zorundadır.</p>
            <div class="roadmap-links">
               <router-link to="/ekolojik-donusum" class="premium-btn">Ekolojik Taahhütlerimizi Görün</router-link>
            </div>
          </div>
          <div class="future-bg">
            <img src="https://a.storyblok.com/f/196368/2000x2000/1ff6f20a61/sl.jpg" alt="Future Vision">
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
.our-formulas-page {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
}

/* Base Premium Styles */
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
  color: #4C9AFF; /* Theme color for formulas? Or brand blue */
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
  color: #4C9AFF;
}

.section-text p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
}

.clean-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.clean-list li {
  font-size: 0.95rem;
  font-weight: 600;
  color: #4C9AFF;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.clean-list li::before {
  content: '✕';
  font-size: 0.8rem;
  opacity: 0.5;
}

/* Quote Section */
.story-quote {
  text-align: center;
  padding: 10rem 0;
  margin-bottom: 12rem;
  background: #f8faff;
  border-radius: 24px;
}

.story-quote.blue {
  background: #f0f7ff;
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
  color: #4C9AFF;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 3.5rem;
}

.value-card {
  text-align: center;
  padding: 4rem 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 15px 45px rgba(0,0,0,0.03);
  transition: all 0.4s ease;
}

.value-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.06);
}

.value-card img {
  width: 80px;
  margin-bottom: 2.5rem;
}

.value-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.value-card p {
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
}

/* Future Section */
.story-future {
  position: relative;
  height: 60vh;
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

.future-content h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.future-content p {
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 3.5rem;
  opacity: 0.95;
}

.premium-btn {
  display: inline-block;
  padding: 1.2rem 2.8rem;
  background: white;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.premium-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(255,255,255,0.3);
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
  .clean-list {
    grid-template-columns: 1fr;
  }
}
</style>
