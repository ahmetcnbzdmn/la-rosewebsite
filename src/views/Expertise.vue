<template>
  <div class="expertise-page">
    <main class="story-main" id="content">
      <!-- Immersive Hero Section -->
      <section class="story-hero">
        <div class="hero-bg">
          <img src="https://larosee.twic.pics/1920x1281/811662d293/page-expertise.jpg/m/1920x1281" alt="Hydration Expertise" class="hero-img">
        </div>
        <div class="hero-content">
          <div class="hero-text-box">
            <span class="eyebrow fade-in">BİLGİ VE UZMANLIK</span>
            <h1 class="hero-title fade-in">Nemlendirme DNA'mızın bir parçasıdır, çünkü güzel bir cildin <em>sırrı</em> budur.</h1>
            <div class="hero-intro fade-in">
              <p>Nedenini anlamak ister misiniz? Doğru yerdesiniz!</p>
              <p>Nemlendirmenin nasıl işlediğini, neden bu kadar önemli olduğunu ve cildinizin optimal nem seviyesine sahip olmasını nasıl sağlayacağınızı açıklayacağız.</p>
            </div>
            <div class="jump-links fade-in">
              <a href="#how-it-works" class="jump-link">Nemlendirme nasıl işler?</a>
              <a href="#why-hydrate" class="jump-link">Neden nemlendirmeli?</a>
              <a href="#how-to-hydrate" class="jump-link">Nasıl nemlendirmeli?</a>
              <a href="#how-to-choose" class="jump-link">Nasıl seçmeli?</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Sub-navigation -->
      <div class="story-subnav">
        <div class="subnav-inner">
          <router-link to="/taahhutlerimiz" class="nav-item back-nav">←</router-link>
          <span class="nav-item active">Nemlendirme Uzmanlığı</span>
        </div>
      </div>

      <div class="story-container">
        <!-- Section 1: How it works -->
        <section id="how-it-works" class="content-section animate-on-scroll">
          <div class="text-block centered">
            <h2 class="section-title">Nemlendirme nasıl işler?</h2>
            <div class="highlight-box">
              <p>Cilt, her şeyden önce vücudu koruyan bir savunma bariyeridir. Yaklaşık <strong>%67</strong> oranında su içerir ve bu oran yaşa bağlı olarak değişir:</p>
              <div class="stats-inline">
                <span><strong>%74</strong> Yeni Doğan</span>
                <span><strong>%62</strong> Yağlı Birey</span>
              </div>
              <p>Bu farklar, cilt görünümündeki farklılıkları büyük ölçüde açıklar.</p>
            </div>
          </div>

          <div class="image-text-split mt-8">
            <div class="split-text">
              <p>Bu suyun bir kısmına <strong>"serbest"</strong> su denir; hareketlidir ve buharlaşabilir. Diğer kısmı ise <strong>"hareketsiz"</strong> sudur; dermisin yapılarına sabitlendiği için buharlaşamaz.</p>
              <p>Vücut içindeki su içeriğini korumak için su alımı ile su kaybı arasında bir denge gereklidir.</p>
            </div>
            <div class="split-image">
              <img src="https://larosee.twic.pics/3993x3152/bf60169b5a/dans-peau-il-y-a-eau-un-equilibre-entre-les-apports-et-les-pertes-en-eau-est-necessaire-pour-avoir-une-belle-peau.jpg/m/3993x3152" alt="Water Balance in Skin">
            </div>
          </div>
        </section>

        <!-- Section 2: Structure -->
        <section class="structure-section animate-on-scroll">
          <div class="text-block centered mb-8">
            <h2 class="section-title">Her şey yapıyla ilgili!</h2>
            <p class="large-p">Vücudumuzun ihtiyaç duyduğu suyu tutmamızı ve cildin esnek, yumuşak ve tonlu kalması için iyi bir nem seviyesini korumamızı sağlayan şey cildimizin yapısıdır.</p>
            <p>Cildimiz üst üste binen üç ana katmandan oluşur: yüzeyde hidrolipidik film içeren epidermis, dermis ve daha derindeki hipodermis.</p>
          </div>

          <div class="structure-grid">
            <div class="diagram-side">
              <img src="https://larosee.twic.pics/1200x1400/3c0f89aa7e/schema-de-la-structure-de-peau-pour-comprendre-comment-fonctionne-l-hydratation.webp/m/1200x1400" alt="Skin Structure Diagram">
            </div>
            <div class="accordion-side">
              <div class="accordion">
                <details v-for="(item, index) in accordions" :key="index" :open="index === 0">
                  <summary>{{ item.title }}</summary>
                  <div class="accordion-content">
                    <p v-html="item.content"></p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 3: Why hydrate -->
        <section id="why-hydrate" class="content-section darker animate-on-scroll">
          <div class="text-block centered">
            <h2 class="section-title">Cildinizi neden nemlendirmelisiniz?</h2>
          </div>

          <div class="pillars-flow">
            <div class="pillar-item">
              <div class="pillar-header">
                <span class="pillar-num">01</span>
                <h3>Kalıcı buharlaşmayı telafi etmek için</h3>
              </div>
              <p>Dermiste depolanan su, kan mikrosirkülasyonu yoluyla epidermal hücrelere taşınır ve akuaporin adı verilen proteinler bu katmanlar arasındaki su dengesini korur.</p>
              <p>Gaz formunda bulunan bu su, terleme ve transpirasyon yoluyla sürekli buharlaşır. Bu fenomene transepidermal su kaybı (TEWL) denir ve günde yaklaşık yarım litreyi temsil eder!</p>
            </div>

            <div class="pillar-item">
              <div class="pillar-header">
                <span class="pillar-num">02</span>
                <h3>Hidrolipidik filmin bozulmasını önlemek için</h3>
              </div>
              <p>Diğer faktörler de iyi cilt nemini bozabilir: sert temizleme, yaşam tarzı, kirlilik, kireçli su, sıcak duşlar... Hidrolipidik film sık sık teste tabi tutulur!</p>
              <p>Bu film bozulduğunda, epidermis artık düzgün korunmaz ve su buharlaşır. Cilt nemsizleşir ve daha hassas hale gelir. Onarılması için yeniden nemlendirilmesi gerekir.</p>
            </div>

            <div class="pillar-item">
              <div class="pillar-header">
                <span class="pillar-num">03</span>
                <h3>Güzel ve sağlıklı bir cildi korumak için</h3>
              </div>
              <p>İyi bir nemlendirme cildin iyi hissetmesini ve korunmasını sağlar. Uzun vadede yaşlanmayı yavaşlatmaya ve hücre yenilenmesini sağlamaya yardımcı olur.</p>
              <div class="nested-info">
                <h4>Hücre Yenilenmesi</h4>
                <p>Cilt kendini yaklaşık her 28 günde bir yeniler. Sağlıklı nemlenme, bu sürecin optimize edilmesini sağlayarak cildin daha parlak görünmesine olanak tanır.</p>
              </div>
            </div>
          </div>

          <div class="full-width-image mt-8">
            <img src="https://larosee.twic.pics/964x792/3f9f005d1c/hydrater-sa-peau-est-essentiel-pour-avoir-une-belle-peau-en-bonne-sante.jpg/m/964x792" alt="Healthy Skin Hydration">
          </div>
        </section>

        <!-- Section 4: How to hydrate properly -->
        <section id="how-to-hydrate" class="content-section animate-on-scroll">
          <div class="text-block centered">
            <h2 class="section-title">Cildinizi nasıl düzgünce nemlendirirsiniz?</h2>
          </div>

          <div class="dual-method mt-6">
            <div class="method-card">
              <div class="method-icon">🚰</div>
              <h3>Su içerek derin nemlendirme</h3>
              <p>Bu, dermal düzeyde derin nemlendirme sağlar. Bu nedenle gün boyunca en az 1,5 litre su içmelisiniz! Bu nemlendirme, fark edilemeyen su kaybını telafi eder.</p>
            </div>
            <div class="method-card primary">
              <div class="method-icon">✨</div>
              <h3>Kozmetik bakım ile epidermis nemlendirme</h3>
              <p>Nemlendirici bakım, cildin ihtiyacına göre lipid ve/veya su sağlayarak stratum corneum'u güçlendirmeye yardımcı olur.</p>
            </div>
          </div>

          <div class="expert-pills mt-8">
            <div class="pill">
              <strong>Su kaybını sınırlayarak:</strong> Bitkisel gliserin ve bitki mumları ile koruma tabakası oluşturur.
            </div>
            <div class="pill">
              <strong>Direnci güçlendirerek:</strong> Shea yağı, badem yağı gibi doğal emolyanlarla lipid çimentosunu doldurur.
            </div>
          </div>

          <div class="full-width-image mt-8">
            <img src="https://larosee.twic.pics/3747x2955/0963b3283b/bien-hydrater-sa-peau-passe-par-l-hydratation-de-l-epiderme-et-de-la-couche-cornee-grace-aux-soins-cosmetiques.jpg/m/3747x2955" alt="Skincare and Hydration">
          </div>
        </section>

        <!-- Section 5: Choosing products -->
        <section id="how-to-choose" class="content-section animate-on-scroll">
          <div class="text-block centered">
            <h2 class="section-title">Doğru cilt bakım ürünleri nasıl seçilir?</h2>
            <p>Tüm cilt tipleri, en yağlı olanlar bile, nemlendirici bakıma ihtiyaç duyar çünkü hepsi telafi edilmesi gereken su kaybına maruz kalır.</p>
          </div>

          <div class="test-section mt-8">
            <div class="test-tabs">
              <div class="test-tab">
                <h4>Klinik Testler</h4>
                <p>Korneometre ile yapılan teknik ölçümlerdir. Örneğin: "2 saat sonra +%65 nemlendirme" gibi iddiaları kanıtlar.</p>
              </div>
              <div class="test-tab">
                <h4>Kullanım Testleri</h4>
                <p>Kullanıcıların koku, doku ve konfor hakkındaki anket cevaplarıdır. "Kullanıcıların %96'sı cildini daha parlak buldu." gibi sonuçlar verir.</p>
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const accordions = [
  {
    title: 'Hidrolipidik film',
    content: 'Cilt yüzeyinde su, ter ve sebumdan oluşan ince tabakadır. Su buharlaşmasını sınırlayarak bariyer görevi görür ve dış etkenlere (rüzgar, soğuk, kirlilik) karşı korur.'
  },
  {
    title: 'Epidermis',
    content: 'Tuğla duvar gibidir: <strong>Keratinositler</strong> tuğlaları, <strong>lipid çimentosu</strong> ise harcı temsil eder. Sağlıklı cilt, bu ikisi arasındaki dengenin sonucudur.'
  },
  {
    title: 'Dermis',
    content: 'Cildin en kalın ve kolajen, elastin, hyaluronik asit bakımından en zengin katmanıdır. Gerçek bir <strong>su deposudur</strong>.'
  },
  {
    title: 'Hipodermis',
    content: 'En derin katmandır. Yağların depolandığı enerji rezervidir ve vücut sıcaklığını 37°C\'de tutan ısı düzenleyicidir.'
  }
]

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
.expertise-page {
  background-color: #fff;
  color: #333;
  font-family: 'Inter', sans-serif;
}

/* Hero Section */
.story-hero {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

.hero-text-box {
  max-width: 650px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 4rem;
  border-radius: 2px;
}

.eyebrow {
  display: block;
  font-size: 0.85rem;
  letter-spacing: 4px;
  color: #888;
  margin-bottom: 2rem;
  font-weight: 600;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 2rem;
}

.hero-title em {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
  color: #00B18B;
}

.hero-intro {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 3rem;
}

.jump-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.jump-link {
  font-size: 0.9rem;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 2px;
  transition: all 0.3s;
}

.jump-link:hover {
  color: #00B18B;
  border-color: #00B18B;
}

/* Sub-nav */
.story-subnav {
  position: sticky;
  top: 80px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
}

.subnav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-item {
  text-decoration: none;
  color: #888;
  font-size: 0.9rem;
}

.nav-item.active {
  color: #333;
  font-weight: 600;
}

.back-nav {
  font-size: 1.2rem;
  color: #333;
}

/* Sections */
.story-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-section {
  padding: 8rem 0;
}

.centered { text-align: center; }

.section-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
}

.large-p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.highlight-box {
  background: #fdfdfd;
  border: 1px solid #f0f0f0;
  padding: 3rem;
  border-radius: 12px;
}

.stats-inline {
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: 1.5rem 0;
  font-size: 1.05rem;
}

.stats-inline span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stats-inline strong {
  font-size: 1.5rem;
  color: #00B18B;
  font-weight: 600;
}

/* Split Layout */
.image-text-split {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.split-text { flex: 1; font-size: 1.1rem; line-height: 1.8; }
.split-image { flex: 1.2; }
.split-image img { width: 100%; border-radius: 8px; }

/* Structure Layout */
.structure-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.diagram-side img { width: 100%; border-radius: 12px; }

.accordion details {
  border-bottom: 1px solid #eee;
  padding: 1.5rem 0;
}

.accordion summary {
  padding: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.accordion summary::after {
  content: '+';
  color: #00B18B;
  font-size: 1.5rem;
}

.accordion details[open] summary::after {
  content: '−';
}

.accordion-content {
  padding-top: 1rem;
  line-height: 1.7;
  color: #666;
}

/* Pillars Flow */
.pillars-flow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;
}

.pillar-item {
  background: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

.pillar-header {
  margin-bottom: 2rem;
}

.pillar-num {
  font-size: 0.9rem;
  font-weight: 700;
  color: #00B18B;
  display: block;
  margin-bottom: 0.5rem;
}

.pillar-item h3 {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
}

.nested-info {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px dashed #eee;
}

.nested-info h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

/* Method Cards */
.dual-method {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.method-card {
  padding: 3rem;
  border-radius: 20px;
  background: #f9f9f9;
}

.method-card.primary {
  background: #E8F5F1;
}

.method-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

/* Expert Pills / Tabs */
.expert-pills {
  display: flex;
  gap: 2rem;
}

.pill {
  flex: 1;
  padding: 2rem;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.test-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.test-tab {
  padding: 3rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.test-tab h4 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #00B18B;
}

/* Final CTA */
.final-cta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #1a1a1a;
  color: #fff;
  border-radius: 24px;
  overflow: hidden;
  margin: 6rem 0;
}

.cta-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-content {
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.cta-content h3 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.cta-content p {
  font-size: 1.1rem;
  color: #aaa;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.cta-button {
  background: #00B18B;
  color: #fff;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  border-radius: 100px;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s;
}

.cta-button:hover {
  background: #fff;
  color: #1a1a1a;
}

/* Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in {
  animation: fadeIn 1.2s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.mt-8 { margin-top: 8rem; }
.mt-6 { margin-top: 6rem; }
.mb-8 { margin-bottom: 8rem; }

@media (max-width: 991px) {
  .hero-content { padding: 0 2rem; }
  .hero-text-box { padding: 2rem; }
  .hero-title { font-size: 2.22rem; }
  .structure-grid, .image-text-split, .pillars-flow, .dual-method, .test-tabs, .final-cta {
    grid-template-columns: 1fr;
  }
  .image-text-split { flex-direction: column; }
  .expert-pills { flex-direction: column; }
}
</style>
