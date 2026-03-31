<template>
  <div class="solidarity-page">
    <main class="story-main" id="content">
      <!-- Immersive Hero Section -->
      <section class="story-hero">
        <div class="hero-bg">
          <img src="https://a.storyblok.com/f/196368/2000x2000/7e5e096a24/visuels-categorie-page-impact-6.jpg" alt="Dayanışma Hero" class="hero-img">
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <span class="eyebrow fade-in">Taahhütlerimiz</span>
          <h1 class="hero-title fade-in">Gezegenimiz ve insanlık için <em>somut</em> adımlar.</h1>
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
          <router-link to="/ambalajlarimiz" class="nav-item">Ambalajlarımız</router-link>
          <router-link to="/dayanisma" class="nav-item active">Dayanışma</router-link>
        </div>
      </div>

      <div class="story-container">
        <!-- Section 1: Philosophy -->
        <section class="story-section staggered">
          <div class="section-image animate-on-scroll left">
            <img src="https://a.storyblok.com/f/196368/1920x1259/127883eefb/aux-cotes-de-planete-urgence-la-rosee-participe-au-reboisement-du-tapia-un-arbre-endemique-severement-impacte-par-les-actions-de-l-homme.jpg" alt="Planète Urgence Reboisement">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title">Toprak: <em>Planète Urgence</em> iş birliği.</h2>
            <p>Madagaskar'ın endemik Tapia ormanlarını korumak ve yeniden canlandırmak için çalışıyoruz. İnsan faaliyetleri nedeniyle zarar gören bu ekosistem, birçok canlı türü için hayati önem taşıyor.</p>
          </div>
        </section>

        <!-- Section 2: Coral Gardeners -->
        <section class="story-section reversed">
          <div class="section-image animate-on-scroll right">
            <img :src="'/images/gardeners.webp'" alt="The Coral Gardeners">
          </div>
          <div class="section-text animate-on-scroll left">
            <h2 class="section-title">Deniz: <em>Coral Gardeners</em> ile resifleri koruyoruz.</h2>
            <p>Okyanus ekosisteminin temeli olan mercan resiflerini kurtarmak için The Coral Gardeners (eski adıyla The Coral Planters) ile el ele verdik. Maldivler'de mercan nakli yöntemleriyle deniz altı yaşamını yeniden inşa ediyoruz.</p>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-value">3.000</span>
                <span class="stat-label">Yeni Mercan</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 3: Water Access -->
        <section class="story-quote">
          <div class="quote-content animate-on-scroll">
            <p>"Temiz su bir lüks değil, her insanın en temel hakkıdır. <em>1001fontaines</em> ile bu hakkı koruyoruz."</p>
          </div>
        </section>

        <section class="story-section">
          <div class="section-image animate-on-scroll left">
            <img src="https://a.storyblok.com/f/196368/2000x1333/917c8a10c4/aux-cotes-de-1001fontaines-la-rosee-lutte-contre-les-inegalites-d-acces-a-l-eau.webp" alt="1001fontaines Su Erişimi">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title">İnsan: <em>1001fontaines</em> ile temiz su.</h2>
            <p>Dünya genelinde her 3 kişiden birinin güvenli içme suyuna erişimi yok. 1001fontaines'in "Okulda Su" programı aracılığıyla Madagaskar'daki 10 yeni okulda çocukların temiz suya erişimini sağlıyoruz.</p>
          </div>
        </section>

        <!-- Section 4: Education -->
        <section class="story-section reversed">
          <div class="section-image animate-on-scroll right">
            <img src="https://a.storyblok.com/f/196368/2362x1575/b7efc69dad/l-association-toutes-a-l-ecole-a-creer-sa-propre-ecole-a-phnom-penh.jpg" alt="Toutes à l’école">
          </div>
          <div class="section-text animate-on-scroll left">
            <h2 class="section-title">Eğitim: <em>Toutes à l’école</em>.</h2>
            <p>Kamboçya'da dezavantajlı kız çocuklarına yüksek kaliteli eğitim sunmak için Toutes à l’école derneğini destekliyoruz. Birinci sınıf öğrencilerinin tüm masraflarını karşılayarak geleceklerine ışık tutuyoruz.</p>
          </div>
        </section>

        <!-- Section 5: Stats & Community -->
        <section class="story-values">
          <div class="values-header animate-on-scroll">
            <h2>Yardımlaşma Gücümüz</h2>
            <p>Topluluğumuzla birlikte büyüyoruz.</p>
          </div>
          <div class="values-grid">
            <div class="value-card animate-on-scroll">
              <div class="card-icon">💗</div>
              <h3>Pembe Ekim</h3>
              <p>Meme kanseriyle mücadele eden kadınlara destek olmak için bakım atölyeleri düzenliyoruz.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <div class="card-icon">🌍</div>
              <h3>B Corp Sertifikası</h3>
              <p>Sadece iyi bir şirket değil, dünya için en iyisini yapan bir şirket olma taahhüdümüz.</p>
            </div>
          </div>
        </section>

        <!-- Section 6: Local Support -->
        <section class="story-future">
          <div class="future-content animate-on-scroll">
            <div class="bcorp-badge">
              <img src="https://a.storyblok.com/f/196368/81x118/1786c2c8d6/certified_b_corporation_b_corp_logo_2022_black_rgb-1.svg" alt="B Corp">
              <span>Birlikte Güçlüyüz</span>
            </div>
            <h2>Yerel Üretim ve Sosyal Sorumluluk</h2>
            <p>Ürünlerimizin %100'ünü Fransa'da üreterek yerel ekonomiyi destekliyor ve karbon ayak izimizi minimize ediyoruz.</p>
          </div>
          <div class="future-bg">
            <img src="https://a.storyblok.com/f/196368/1920x1310/cf0164c4b1/carte-de-la-france-de-nos-fournisseurs-et-fabricants.jpg" alt="Fransız Tedarikçiler">
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
.solidarity-page {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
}

/* Base Premium Styles (Consistent with engagement design system) */
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
  background: rgba(0,0,0,0.3);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  padding: 0 2.5rem;
}

.eyebrow {
  display: block;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-title {
  font-size: clamp(2.8rem, 8vw, 5rem);
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
  border-bottom: 1px solid #f2f2f2;
  position: sticky;
  top: 64px;
  z-index: 100;
}

.subnav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 0 2rem;
}

.nav-item {
  text-decoration: none;
  color: #999;
  font-size: 0.88rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #00B1EB;
  transition: width 0.4s;
}

.nav-item.active, .nav-item:hover {
  color: #00B1EB;
}

.nav-item.active::after {
  width: 100%;
}

/* Container & Sections */
.story-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 8rem 2.5rem;
}

.story-section {
  display: flex;
  align-items: center;
  gap: 8rem;
  margin-bottom: 15rem;
}

.story-section.reversed {
  flex-direction: row-reverse;
}

.section-image {
  flex: 1.3;
}

.section-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.08);
}

.section-text {
  flex: 1;
}

.section-title {
  font-size: 3.2rem;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  font-weight: 300;
}

.section-title em {
  font-family: serif;
  font-style: italic;
  color: #00B1EB;
}

.section-text p {
  font-size: 1.2rem;
  line-height: 1.9;
  color: #4a4a4a;
  margin-bottom: 2.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 3rem;
  font-weight: 300;
  color: #00B1EB;
  font-family: serif;
  font-style: italic;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #999;
  font-weight: 600;
}

/* Quote Section */
.story-quote {
  text-align: center;
  padding: 12rem 0;
  margin-bottom: 15rem;
  background: #f8fffb;
  border-radius: 40px;
}

.quote-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 3rem;
}

.quote-content p {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-family: serif;
  font-style: italic;
  line-height: 1.3;
  color: #1a2a3a;
}

.quote-content em {
  color: #00B1EB;
}

/* Values Header */
.values-header {
  text-align: center;
  margin-bottom: 8rem;
}

.values-header h2 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.values-header p {
  color: #888;
  font-size: 1.4rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  margin-bottom: 15rem;
}

.value-card {
  text-align: center;
  padding: 5rem 3rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.04);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.value-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 80px rgba(0,0,0,0.08);
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 2.5rem;
}

.value-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.value-card p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}

/* Future/Full Background Section */
.story-future {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
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
  max-width: 900px;
  padding: 0 3rem;
}

.bcorp-badge {
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  background: white;
  color: #333;
  padding: 1rem 2rem;
  border-radius: 60px;
  margin-bottom: 3rem;
  font-weight: 600;
  font-size: 0.95rem;
}

.bcorp-badge img {
  height: 35px;
}

.future-content h2 {
  font-size: 3.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
}

.future-content p {
  font-size: 1.4rem;
  line-height: 1.8;
  opacity: 0.9;
}

/* Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.left { transform: translateX(-80px); }
.animate-on-scroll.right { transform: translateX(80px); }

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translate(0, 0);
}

.fade-in {
  animation: fadeInHeader 1.5s ease-out forwards;
}

@keyframes fadeInHeader {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255,255,255,0.7);
  border-radius: 25px;
  position: relative;
}

.mouse::before {
  content: '';
  width: 5px;
  height: 10px;
  background: white;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;
  animation: scrollAnime 2.5s infinite;
}

@keyframes scrollAnime {
  0% { opacity: 1; top: 10px; }
  100% { opacity: 0; top: 32px; }
}

@media (max-width: 1199px) {
  .story-section {
    gap: 4rem;
  }
}

@media (max-width: 991px) {
  .story-section {
    flex-direction: column !important;
    gap: 5rem;
    margin-bottom: 10rem;
    text-align: center;
  }
  .values-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero-title {
    font-size: 3rem;
  }
  .section-title {
    font-size: 2.5rem;
  }
  .subnav-inner {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 1rem;
    gap: 2.5rem;
  }
}
</style>
