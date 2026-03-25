<template>
  <div class="sun-care-page">
    <main class="story-main" id="content">
      <!-- Immersive Hero Section -->
      <section class="story-hero">
        <div class="hero-bg">
          <img 
            src="https://larosee.twic.pics/1371x1070/60f75a878b/la-protection-solaire-efficace-et-respectueuse-de-la-peau-des-oceans.jpg/m/1371x1070" 
            alt="Taahhütlü bir güneş bakım serisi" 
            class="hero-image"
          />
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <span class="eyebrow fade-in">Taahhütlerimiz</span>
          <h1 class="hero-title fade-in">Okyanus dostu <em>güneş</em> bakımı.</h1>
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
          <router-link to="/gunes-bakimi" class="nav-item active">Güneş Bakımı</router-link>
          <router-link to="/dayanisma" class="nav-item">Dayanışma</router-link>
        </div>
      </div>

      <div class="story-container">
        <!-- Section 1: The Challenge -->
        <section class="story-section staggered">
          <div class="section-image animate-on-scroll left">
            <img src="https://larosee.twic.pics/1072x746/ce9b740cec/aux-cotes-de-the-coral-planters-la-rosee-participe-a-la-sauvegarde-et-a-la-plantation-de-coraux-aux-maldives.jpeg/m/1072x746" alt="Mercan Resifleri">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title">Okyanuslar için <em>gerçek</em> bir zorluk.</h2>
            <p>Güneş bakım ürünlerinin formülasyonu okyanuslar için kritik bir konudur. Mercan resifleri okyanus yüzeyinin sadece %0,1'ini kaplasa da deniz yaşamının %25'ine ev sahipliği yapar. Her yıl binlerce ton güneş kremi bu hassas ekosistemlere ulaşarak mercan ağarmasına neden oluyor.</p>
          </div>
        </section>

        <!-- Section 2: The Solution (Quote) -->
        <section class="story-quote">
          <div class="quote-content animate-on-scroll">
            <p>"Ne cilt korumasından ne de okyanusların korunmasından <em>ödün vermeyen</em> ideal formülü bulana kadar durmadık."</p>
          </div>
        </section>

        <!-- Section 3: Natural Base -->
        <section class="story-section reversed">
          <div class="section-text animate-on-scroll left">
            <h2 class="section-title">Organik <em>kayısı yağı</em> ile doğal koruma.</h2>
            <p>Serimiz için ana aktif bileşen olarak organik kayısı yağını seçtik. Cildi derinlemesine beslerken, cildinizde sağlıklı ve ışıltılı bir bronzluk bırakır. %100 doğal kökenli kokusuyla cildinize ve duyularınıza hitap eder.</p>
          </div>
          <div class="section-image animate-on-scroll right">
            <img src="https://larosee.twic.pics/1920x1280/872b6599bd/nos-solaires-se-composent-d-une-base-de-formule-naturelle-a-l-huile-d-abricot-bio.jpg/m/1920x1280" alt="Organik Kayısı Yağı">
          </div>
        </section>

        <!-- Section 4: Innovation -->
        <section class="story-values">
          <div class="values-header animate-on-scroll">
            <h2>Yeni Nesil Filtreler</h2>
            <p>Araştırmalarımızı 3 önemli faktör etrafında topluyoruz.</p>
          </div>
          <div class="values-grid">
            <div class="value-card animate-on-scroll">
              <div class="value-icon">🛡️</div>
              <h3>Maksimum Koruma</h3>
              <p>Geniş spektrumlu UVB/UVA korumasıyla cildinizi güneşin zararlı etkilerinden tamamen koruruz.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <div class="value-icon">💧</div>
              <h3>Suya Dayanıklılık</h3>
              <p>Okyanusta ürün dağılımını sınırlamak ve korumayı sürdürmek için suya dayanıklı formüller.</p>
            </div>
            <div class="value-card animate-on-scroll">
              <div class="value-icon">🌿</div>
              <h3>Biyobozunurluk</h3>
              <p>Tüm formüllerimiz OECD 301F standartlarına göre biyolojik bozunabilirlik testlerinden geçmiştir.</p>
            </div>
          </div>
        </section>

        <!-- Section 5: The Coral Planters -->
        <section class="story-section">
          <div class="section-image animate-on-scroll left">
            <img src="https://larosee.twic.pics/3000x2250/7753b11ad2/eng-tcp.jpg/m/3000x2250" alt="The Coral Planters">
          </div>
          <div class="section-text animate-on-scroll right">
            <h2 class="section-title"><em>The Coral Planters</em> ile yan yanayız.</h2>
            <p>Mercan resiflerinin yok olmasıyla mücadele etmek için The Coral Planters ile güçlerimizi birleştirdik. 2022 yılında 12.000'den fazla mercan parçasının dikilmesine katkıda bulunarak deniz ekosistemini koruma sözümüzü tuttuk.</p>
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
.sun-care-page {
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
}

/* Immersive Hero Section */
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

.hero-bg img {
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
  color: #CC9966; /* Specific color for sun care emphasis */
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
  color: #CC9966;
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
  color: #CC9966;
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

.value-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
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

/* Future Section (Used as Final CTA) */
.story-future {
  position: relative;
  height: 60vh;
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

.cta-button {
  display: inline-block;
  background: #CC9966;
  color: white;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s;
}

.cta-button:hover {
  background: #b38659;
  transform: scale(1.05);
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
  .subnav-inner::-webkit-scrollbar {
    display: none;
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
