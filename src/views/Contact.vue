<template>
  <div class="contact-container">
    <main class="Layout-module__content___wEYFD" id="content">
      <div class="contact-hero">
        <div class="hero-image">
          <img src="https://larosee.twic.pics/1920x1920/61079955b5/photo-page-contact.jpg/m/1920x1920" alt="Bize Ulaşın" />
          <div class="image-overlay"></div>
        </div>
        <div class="hero-text">
          <h1 class="fade-in">Bize Ulaşın</h1>
          <p class="fade-in-delayed">Size yardım etmek için buradayız. Her türlü sorunuz veya geri bildiriminiz için bizimle iletişime geçebilirsiniz.</p>
        </div>
      </div>

      <div class="contact-grid">
        <!-- Quick Support Cards -->
        <section class="support-channels">
          <div class="channel-card slide-up" style="--delay: 0.1s">
            <div class="icon-wrapper">📦</div>
            <h3>Sipariş Soruları</h3>
            <p>Siparişiniz veya ürününüzle ilgili yardım mı gerekiyor? Salomé size destek olmaktan mutluluk duyacaktır.</p>
            <a href="mailto:destek@larosee-cosmetiques.com" class="contact-link">destek@larosee-cosmetiques.com</a>
          </div>

          <div class="channel-card slide-up" style="--delay: 0.2s">
            <div class="icon-wrapper">🩺</div>
            <h3>Eczane İş Birlikleri</h3>
            <p>Eczane ortağımız olmak veya profesyonel hizmetlerimiz hakkında bilgi almak için bize yazın.</p>
            <a href="mailto:eczane@larosee-cosmetiques.com" class="contact-link">eczane@larosee-cosmetiques.com</a>
          </div>

          <div class="channel-card slide-up" style="--delay: 0.3s">
            <div class="icon-wrapper">✨</div>
            <h3>Ortaklık ve Basın</h3>
            <p>Ortaklık teklifleri, medya talepleri veya influencer iş birlikleri için iletişim ekibimize ulaşın.</p>
            <a href="mailto:iletisim@larosee-cosmetiques.com" class="contact-link">iletisim@larosee-cosmetiques.com</a>
          </div>

          <div class="channel-card slide-up" style="--delay: 0.4s">
            <div class="icon-wrapper">🏢</div>
            <h3>Kariyer</h3>
            <p>La Rosée ekibinin bir parçası olmak ister misiniz? Güncel iş ilanlarımıza göz atın.</p>
            <a href="https://www.welcometothejungle.com/fr/companies/la-rosee/jobs" target="_blank" class="btn-text">İş İlanlarını Gör →</a>
          </div>
        </section>

        <!-- Contact Form & Phone -->
        <section class="contact-details slide-up" style="--delay: 0.5s">
          <div class="details-card">
            <div class="phone-section">
              <div class="icon-wrapper">📞</div>
              <div class="phone-info">
                <h3>Doğrudan Konuşalım</h3>
                <p class="phone-number">+90 212 123 45 67</p>
                <p class="working-hours">
                  Pzt - Per: 09:30 - 17:30 <br />
                  Cuma: 09:30 - 17:00
                </p>
              </div>
            </div>

            <div class="faq-cta">
              <div class="icon-wrapper">❓</div>
              <div class="cta-info">
                <h3>Sıkça Sorulan Sorular</h3>
                <p>Hızlı bir cevaba mı ihtiyacınız var? SSS sayfamızda aradığınızı bulabilirsiniz.</p>
                <router-link to="/sikca-sorulan-sorular" class="btn-outline">SSS Sayfasını Ziyaret Et</router-link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Newsletter Section Re-styled -->
      <section class="newsletter-highlight">
        <div class="newsletter-content">
          <img src="https://larosee.twic.pics/687x625/7de8cb25a6/pictogrammes_enveloppe-bleu.png/m/687x625" alt="Newsletter" class="newsletter-icon">
          <h2>Güzellik İpuçlarını Kaçırmayın!</h2>
          <p>Bültenimize kaydolun ve ilk siparişinizde %10 indirim kazanın.</p>
          <div class="newsletter-form-modern">
            <input type="email" placeholder="E-posta adresiniz" class="modern-input">
            <button class="btn-primary">Kayıt Ol</button>
          </div>
          <p class="legal-small">Kaydolarak gizlilik politikamızı kabul etmiş olursunuz.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// No complex logic needed for aesthetic refinement
</script>

<style scoped>
.contact-container {
  background-color: #fff;
  color: #333;
}

/* Hero Section */
.contact-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.hero-text {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}

.hero-text p {
  font-size: 1.3rem;
  line-height: 1.6;
  opacity: 0.9;
}

/* Grid Layout */
.contact-grid {
  max-width: 1200px;
  margin: -60px auto 4rem;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

/* Support Channels */
.support-channels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.channel-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #f0f0f0;
}

.channel-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.icon-wrapper {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  width: 60px;
  height: 60px;
  background: #f8fbff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.channel-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111;
}

.channel-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.contact-link {
  color: #34AAFF;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.contact-link:hover {
  border-color: #34AAFF;
}

.btn-text {
  color: #34AAFF;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
}

/* Details Card */
.details-card {
  background: #34AAFF;
  color: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(52, 170, 255, 0.2);
}

.phone-section, .faq-cta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.faq-cta {
  margin-bottom: 0;
  padding-top: 3rem;
  border-top: 1px solid rgba(255,255,255,0.2);
}

.details-card .icon-wrapper {
  background: rgba(255,255,255,0.1);
  min-width: 60px;
}

.details-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.phone-number {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.working-hours {
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.5;
}

.btn-outline {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.btn-outline:hover {
  background: white;
  color: #34AAFF;
}

/* Newsletter Highlight */
.newsletter-highlight {
  background: #fdfdfd;
  padding: 6rem 1.5rem;
  text-align: center;
  border-top: 1px solid #eee;
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-icon {
  width: 80px;
  margin-bottom: 2rem;
}

.newsletter-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.newsletter-content p {
  color: #666;
  margin-bottom: 2.5rem;
}

.newsletter-form-modern {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.modern-input {
  flex-grow: 1;
  padding: 1rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.modern-input:focus {
  border-color: #34AAFF;
}

.btn-primary {
  padding: 1rem 2.5rem;
  background: #34AAFF;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #288ee0;
}

.legal-small {
  font-size: 0.8rem !important;
  opacity: 0.7;
}

/* Animations */
.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.fade-in-delayed {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
}

.slide-up {
  opacity: 0;
  animation: slideUp 0.8s ease-out var(--delay) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
  .hero-text h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .newsletter-form-modern {
    flex-direction: column;
  }
}
</style>

<script setup>
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
