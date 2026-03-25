<template>
  <div class="engagements-landing">
    <main class="story-main" id="content">
      <!-- Immersive Hero Section -->
      <section class="story-hero landing-hero">
        <div class="hero-decorations">
          <img src="https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3153370/images/branch-and-clay-2x.webp" alt="Branch and Clay" class="decor-img left fade-in">
          <img src="https://cdn.shopify.com/oxygen-v2/24792/9302/19063/3153370/images/almonds-2x.webp" alt="Almonds" class="decor-img right fade-in">
        </div>
        <div class="hero-content">
          <span class="eyebrow fade-in">TAAHHÜTLERİMİZ</span>
          <h1 class="hero-title fade-in">Çevresel etkimizi en aza indirirken <em>en doğal</em> ürünleri sunuyoruz</h1>
          <div class="scroll-indicator">
            <div class="mouse"></div>
          </div>
        </div>
      </section>

      <div class="story-container landing-container">
        <!-- Philosophy Section -->
        <section class="philosophy-section animate-on-scroll">
          <h2 class="philosophy-title">Kozmetolojiye ve doğal güzelliğe tutkuyla bağlı iki eczacıyız.</h2>
          <div class="philosophy-content">
            <p>Eczane tezgahının arkasında, daha basit, gerçekten dürüst ve daha sorumlu bir teklif arayan kadın ve erkeklerle bağ kurduk. Gereksiz ve tutulmayan sözlerden arınmış.</p>
            <p>Herkes için %100'e varan doğal kökenli, etkili ve benzersiz bir duyusal deneyim sunan basitleştirilmiş formüllere sahip ürünler yaratmak istedik.</p>
            <p>La Rosée, tamamen güvenebileceğiniz, şeffaf ve kararlı bir marka olarak doğdu!</p>
          </div>
          <div class="founders-signature">
            <img src="https://a.storyblok.com/f/196368/1316x242/f2c0e6c474/signature-coline-mahault-fondatrices-de-la-rosee.png" alt="Coline & Mahault Signature" class="signature-img">
          </div>
        </section>

        <!-- Pillars Grid -->
        <section class="pillars-section">
          <div class="section-header animate-on-scroll">
            <h2 class="pillars-title">Taahhütlerimizi keşfedin</h2>
          </div>
          <div class="pillars-grid">
            <!-- Pillar 1: Hikayemiz -->
            <router-link to="/hikayemiz" class="pillar-card animate-on-scroll">
              <div class="pillar-image">
                <img src="https://a.storyblok.com/f/196368/2000x2000/1b44626fae/visuels-categorie-page-impact-1-1.jpg" alt="Hikayemiz">
              </div>
              <div class="pillar-info">
                <h3>Hikayemiz</h3>
                <span class="discover-btn">Keşfet</span>
              </div>
            </router-link>

            <!-- Pillar 2: Ekolojik Dönüşüm -->
            <router-link to="/ekolojik-donusum" class="pillar-card animate-on-scroll">
              <div class="pillar-image">
                <img src="https://a.storyblok.com/f/196368/3840x2160/a02e18fbf0/deodorant-transition-ecologique.jpg" alt="Ekolojik Dönüşüm">
              </div>
              <div class="pillar-info">
                <h3>Ekolojik dönüşüm</h3>
                <span class="discover-btn">Keşfet</span>
              </div>
            </router-link>

            <!-- Pillar 3: Formüllerimiz -->
            <router-link to="/formullerimiz" class="pillar-card animate-on-scroll">
              <div class="pillar-image">
                <img src="https://a.storyblok.com/f/196368/2000x2000/aab480cdc3/visuels-categorie-page-impact-2-1.jpg" alt="Formüllerimiz">
              </div>
              <div class="pillar-info">
                <h3>Formüllerimiz</h3>
                <span class="discover-btn">Keşfet</span>
              </div>
            </router-link>

            <!-- Pillar 4: Ambalajlarımız -->
            <router-link to="/ambalajlarimiz" class="pillar-card animate-on-scroll">
              <div class="pillar-image">
                <img src="https://a.storyblok.com/f/196368/2000x2000/00a5f0a3cf/visuels-categorie-page-impact-3-1.jpg" alt="Ambalajlarımız">
              </div>
              <div class="pillar-info">
                <h3>Ambalajlarımız</h3>
                <span class="discover-btn">Keşfet</span>
              </div>
            </router-link>

            <!-- Pillar 5: Dayanışma -->
            <router-link to="/dayanisma" class="pillar-card animate-on-scroll">
              <div class="pillar-image">
                <img src="https://a.storyblok.com/f/196368/937x1100/8f663f71fd/la-rosee-a-developpe-un-programme-de-mecenat-autour-de-trois-axes-la-terre-la-mer-et-l-humain.jpg" alt="Dayanışma taahhütlerimiz">
              </div>
              <div class="pillar-info">
                <h3>Dayanışma taahhütlerimiz</h3>
                <span class="discover-btn">Keşfet</span>
              </div>
            </router-link>
          </div>
        </section>

        <!-- B Corp Section -->
        <section class="bcorp-banner animate-on-scroll">
          <div class="bcorp-content">
            <img src="https://a.storyblok.com/f/196368/81x118/1786c2c8d6/certified_b_corporation_b_corp_logo_2022_black_rgb-1.svg" alt="B Corp Certified" class="bcorp-logo">
            <div class="bcorp-text">
              <h3>La Rosée B Corp sertifikalıdır.</h3>
              <p>Bu sertifika, sorumlu ve kararlı bir şirket olma yolundaki derin ve samimi bağlılığımızı kanıtlamaktadır.</p>
              <router-link to="/taahhutlerimiz" class="text-link">Taahhütlerimizi keşfedin</router-link>
            </div>
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
.engagements-landing {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
}

/* Landing Hero */
.landing-hero {
  position: relative;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  overflow: hidden;
}

.hero-decorations {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.decor-img {
  position: absolute;
  width: 350px;
  opacity: 0.8;
}

.decor-img.left {
  top: 10%;
  left: -50px;
}

.decor-img.right {
  bottom: 0%;
  right: -50px;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
  z-index: 2;
}

.eyebrow {
  display: block;
  font-size: 0.9rem;
  letter-spacing: 5px;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 600;
}

.hero-title {
  font-size: clamp(2.2rem, 6vw, 4rem);
  line-height: 1.2;
  font-weight: 300;
  color: #1a1a1a;
}

.hero-title em {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
}

/* Philosophy Section */
.philosophy-section {
  max-width: 800px;
  margin: 10rem auto;
  text-align: center;
}

.philosophy-title {
  font-size: 2.22rem;
  line-height: 1.3;
  margin-bottom: 3rem;
  font-weight: 300;
  color: #1a1a1a;
}

.philosophy-content p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

.founders-signature {
  margin-top: 4rem;
  text-align: center;
}

.signature-img {
  max-width: 300px;
  height: auto;
  display: inline-block;
}

/* Pillars Section */
.pillars-section {
  margin: 12rem 0;
}

.pillars-title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 5rem;
  font-weight: 300;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.pillar-card {
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  transition: all 0.5s ease;
}

.pillar-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}

.pillar-card:nth-child(4), .pillar-card:nth-child(5) {
  grid-column: span 1;
}

.pillar-image {
  height: 350px;
  overflow: hidden;
}

.pillar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.pillar-card:hover .pillar-image img {
  transform: scale(1.05);
}

.pillar-info {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pillar-info h3 {
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;
}

.discover-btn {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #00B18B;
  font-weight: 600;
}

/* B Corp Banner */
.bcorp-banner {
  background: #fdfdfd;
  padding: 5rem;
  border-radius: 24px;
  margin-bottom: 8rem;
  border: 1px solid #f0f0f0;
}

.bcorp-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto;
}

.bcorp-logo {
  height: 100px;
}

.bcorp-text h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 400;
}

.bcorp-text p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.text-link {
  color: #333;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1.5px solid #00B18B;
  padding-bottom: 2px;
  transition: all 0.3s;
}

.text-link:hover {
  color: #00B18B;
}

/* Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translate(0, 0);
}

.fade-in {
  animation: fadeInDown 1.5s forwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
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
  width: 26px;
  height: 44px;
  border: 2px solid #ccc;
  border-radius: 20px;
  position: relative;
}

.mouse::before {
  content: '';
  width: 4px;
  height: 8px;
  background: #999;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  animation: mouseScroll 2s infinite;
}

@keyframes mouseScroll {
  0% { opacity: 1; top: 8px; }
  100% { opacity: 0; top: 28px; }
}

@media (max-width: 991px) {
  .pillars-grid {
    grid-template-columns: 1fr 1fr;
  }
  .bcorp-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
}

@media (max-width: 767px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
  .decor-img {
    width: 200px;
  }
}
</style>
