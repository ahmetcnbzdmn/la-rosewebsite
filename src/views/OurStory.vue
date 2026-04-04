<template>
  <div class="our-story-page">
    <main class="story-main" id="content">
      <!-- Immersive Hero Section -->
      <section class="story-hero">
        <div class="hero-bg">
          <img src="https://a.storyblok.com/f/196368/2000x2000/1b44626fae/visuels-categorie-page-impact-1-1.jpg" alt="Our Story Hero" class="hero-img">
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <span class="eyebrow fade-in">Bizim Yolculuğumuz</span>
          <div class="scroll-indicator">
            <div class="mouse"></div>
          </div>
        </div>
      </section>

      <!-- Editorial Navigation -->
      <div class="story-subnav">
        <div class="subnav-inner">
          <router-link to="/taahhutlerimiz" class="nav-item back-nav">←</router-link>
          <router-link to="/hikayemiz" class="nav-item active">Hikayemiz</router-link>
          <router-link to="/ekolojik-donusum" class="nav-item">Ekolojik Dönüşüm</router-link>
          <router-link to="/formullerimiz" class="nav-item">Formüllerimiz</router-link>
          <router-link to="/ambalajlarimiz" class="nav-item">Ambalajlarımız</router-link>
          <router-link to="/dayanisma" class="nav-item">Dayanışma</router-link>
        </div>
      </div>

      <div class="story-container">
        <!-- Section 1: The Meeting -->
        <section class="story-section staggered">
          <div class="section-image animate-on-scroll left">
            <img src="https://a.storyblok.com/f/196368/2000x2000/1b44626fae/visuels-categorie-page-impact-1-1.jpg" alt="Coline ve Mahault">
            <div class="image-caption">Coline & Mahault, Lyon, 2015</div>
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title">Her şey bir <em>dostlukla</em> başladı.</h2>
            <p>Lyon Eczacılık Fakültesi sıralarında tanıştığımızda, sadece iki öğrenci değil, dünyayı değiştirmek isteyen iki hayalperesttik. Eczane tezgahında çalışırken her ikimiz de aynı şeyi fark ettik: Eczanelerde hem cilde hem de gezegene saygılı, basit ama gerçek anlamda <em>nemlendirici</em> ürünlerde büyük bir boşluk vardı.</p>
          </div>
        </section>

        <!-- Section 2: The Vision (Big Quote) -->
        <section class="story-quote">
          <div class="quote-content animate-on-scroll">
            <p>"Nemlendirme, güzel bir cildin tek gerçek sırrıdır. Biz bu sırrı <em>en saf</em> haliyle sunmak için yola çıktık."</p>
          </div>
        </section>

        <!-- Section 3: Bold Choices (Grid with Icons) -->
        <section class="story-values">
          <div class="values-header animate-on-scroll">
            <h2>Neden farklıyız?</h2>
            <p>La Rosée, dermatoloji ve kozmetolojinin kesişme noktasında, her iki dünyanın en iyilerini birleştirir.</p>
          </div>
          <div class="values-grid">
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/152x150/1efc4b216b/eco-conception.svg" alt="Sağlıklı">
              <h3>Sağlıklı Formüller</h3>
              <p>Hassas ciltler için tartışmalı içeriklerden arındırılmış, %100'e varan doğal kaynaklı içerikler.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/152x150/eae4b1aa6e/efficacite.svg" alt="Etkili">
              <h3>Kanıtlanmış Etki</h3>
              <p>Klinik olarak test edilmiş, yüksek konsantrasyonlu aktif maddelerle gerçek sonuçlar.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <img src="https://a.storyblok.com/f/196368/152x150/4ddf0240a8/motifs.svg" alt="Zevkli">
              <h3>Duyusal Deneyim</h3>
              <p>Bağımlılık yaratan dokular ve karşı konulmaz doğal kokularla bakım ritüelinizi keyfe dönüştürün.</p>
            </div>
          </div>
        </section>

        <!-- Section 4: The Mothers' Challenge -->
        <section class="story-section reversed">
          <div class="section-text animate-on-scroll left">
            <h2 class="section-title">Kendi <em>çocuklarımıza</em> sürdüğümüz güvenle.</h2>
            <p>Anne olduğumuzda vizyonumuz daha da derinleşti. Bebeklerin o mucizevi ama narin cildi için yalnızca en saf ve güvenli formülleri kullanmak istedik. Mon Petit La Rosée serisini, bir annenin çocuğuna duyduğu sonsuz şefkatle ve bir bilim insanının titizliğiyle geliştirdik.</p>
            <router-link to="/collections/bebek-bakimi" class="premium-btn">Bebek Serisini Keşfet</router-link>
          </div>
          <div class="section-image animate-on-scroll right">
            <img src="https://a.storyblok.com/f/196368/1920x1279/8f8ca885eb/mon-petit-la-rosee-des-soins-surs-qui-respectent-les-peaux-extremement-sensibles-et-fragiles-des-bebes.jpg" alt="Mon Petit La Rosée">
          </div>
        </section>

        <!-- Section 5: Future Vision (Full Width Image with Text Overlay) -->
        <section class="story-future">
          <div class="future-content animate-on-scroll">
            <h2>Gelecek İçin Kararlıyız</h2>
            <p>2035 yılına kadar tüm ürünlerimizin katı veya yeniden doldurulabilir olmasını hedefliyoruz. Bu bizim gezegenimize olan borcumuz.</p>
            <div class="bcorp-badge">
              <img src="https://a.storyblok.com/f/196368/81x118/1786c2c8d6/certified_b_corporation_b_corp_logo_2022_black_rgb-1.svg" alt="B Corp">
              <span>Gururla B Corp Sertifikalıyız</span>
            </div>
          </div>
          <div class="future-bg">
            <img src="https://a.storyblok.com/f/196368/1920x1440/c089d2f388/la-rosee-est-distribuee-dans-plus-de-8000-pharmacies.jpg" alt="Pharmacy Network">
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
.our-story-page {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
}

/* Hero Section */
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
  display: block;
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
  font-size: clamp(2.5rem, 8vw, 4.5rem);
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
  color: #34AAFF;
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
  position: relative;
}

.section-image img {
  width: 100%;
  border-radius: 4px;
  box-shadow: 20px 20px 60px rgba(0,0,0,0.05);
}

.image-caption {
  position: absolute;
  bottom: -2rem;
  right: 0;
  font-size: 0.8rem;
  font-style: italic;
  color: #999;
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
  color: #34AAFF;
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
  color: #333;
}

.quote-content em {
  color: #34AAFF;
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
}

.values-header p {
  color: #777;
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

/* Premium Button */
.premium-btn {
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1.2rem 2.5rem;
  background: #333;
  color: white;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  border-radius: 50px;
  transition: all 0.3s;
}

.premium-btn:hover {
  background: #34AAFF;
  transform: scale(1.05);
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
    font-size: 2.5rem;
  }
  .section-title {
    font-size: 2rem;
  }
}
</style>
