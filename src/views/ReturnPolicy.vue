<template>
  <div class="policy-container">
    <main class="Layout-module__content___wEYFD" id="content">
      <div class="policy-wrapper">
        <!-- Sidebar Navigation -->
        <nav class="policy-sidebar">
          <div class="sidebar-sticky">
            <h3>İade Politikası</h3>
            <ul>
              <li><a href="#article-1">1. İletişim</a></li>
              <li><a href="#article-2">2. Cayma Hakkı</a></li>
              <li><a href="#article-3">3. İade Süreci</a></li>
              <li><a href="#article-4">4. Geri Ödeme</a></li>
              <li><a href="#article-5">5. İstisnalar</a></li>
              <li><a href="#article-6">6. Kusurlu Ürünler</a></li>
              <li><a href="#appendix-1">Ek 1: Cayma Formu</a></li>
            </ul>
          </div>
        </nav>

        <!-- Main Content -->
        <article class="policy-content">
          <header class="policy-header">
            <h1 class="Heading-module__root___NpBjo">İade Politikası</h1>
            <p class="last-update">Son güncelleme: 01/06/2025</p>
            <div class="policy-intro">
              <p>Bu belgede kullanılan tüm terimler, <router-link class="Link-module__root___YqUoP" to="/policies/satis-kosullari">Genel Satış Şart ve Koşulları</router-link>'nda tanımlandığı gibidir.</p>
            </div>
          </header>

          <section id="article-1" class="policy-section">
            <h2>Madde 1. Müşteri Hizmetleri İletişim</h2>
            <p>Herhangi bir sorun durumunda, öncelikle aşağıdaki kanallardan La Rosée müşteri hizmetleri ile iletişime geçebilirsiniz:</p>
            <div class="contact-card">
              <ul>
                <li><strong>Çalışma Saatleri:</strong> Hafta içi 09:30 - 12:30 ve 14:00 - 17:30</li>
                <li><strong>Telefon:</strong> <a href="tel:+33176507707">+33 1 76 50 77 07</a></li>
                <li><strong>E-posta:</strong> <a href="mailto:bonjour@larosee-cosmetiques.com">bonjour@larosee-cosmetiques.com</a></li>
                <li><strong>Adres:</strong> 16 rue du Plat 69002 Lyon, Fransa</li>
              </ul>
            </div>
          </section>

          <section id="article-2" class="policy-section">
            <h2>Madde 2. Cayma Hakkı ve Kullanımı</h2>
            <div class="subsection">
              <h3>2.1. Cayma Süresi</h3>
              <p>Tüketici Kanunu uyarınca, ürünü teslim aldığınız tarihten itibaren <strong>on dört (14) gün</strong> içinde herhangi bir gerekçe göstermeksizin cayma hakkına sahipsiniz.</p>
              <p>Sürenin son günü bir tatil gününe denk gelirse, süre bir sonraki iş gününe kadar uzatılır.</p>
            </div>
            <div class="subsection">
              <h3>2.2. Bildirim Süreci</h3>
              <p>Cayma kararınızı net bir beyanla (e-posta veya posta yoluyla) bildirmeniz gerekmektedir. Ek 1'deki formu kullanabilir veya kararınızı yazılı olarak iletebilirsiniz.</p>
            </div>
          </section>

          <section id="article-3" class="policy-section">
            <h2>Madde 3. İade Süreci</h2>
            <p>Kozmetik ürünler, cayma bildiriminden itibaren en geç on dört (14) gün içinde iade edilmelidir. Ürünler orijinal ambalajında ve açılmamış olarak iade edilmelidir.</p>
            <div class="highlight-info">
              <p>İade kargo masrafları ve sorumluluğu Müşteri'ye aittir.</p>
            </div>
          </section>

          <section id="article-4" class="policy-section">
            <h2>Madde 4. Geri Ödemeler</h2>
            <p>La Rosée, cayma bildirimini aldığı tarihten itibaren 14 gün içinde, siparişte kullanılan ödeme yöntemiyle tüm ödemeleri iade eder. Standart teslimat dışındaki ek masraflar iade edilmez.</p>
          </section>

          <section id="article-5" class="policy-section">
            <h2>Madde 5. Cayma Hakkı İstisnaları</h2>
            <div class="alert-box">
              <p>Hijyen ve sağlık koruma nedenleriyle, <strong>teslimat sonrası mührü veya koruma bandı açılmış kozmetik ürünlerde</strong> cayma hakkı kullanılamaz.</p>
            </div>
          </section>

          <section id="article-6" class="policy-section">
            <h2>Madde 6. Kusurlu veya Uygunsuz Ürünler</h2>
            <p>Teslim edilen ürünlerin siparişe uygun olmaması veya gizli kusur barındırması durumunda, müşteri hizmetlerimizle iletişime geçerek süreci başlatabilirsiniz. Kusurlu ürünlerin iade kargo masrafları La Rosée tarafından karşılanır.</p>
          </section>

          <section id="appendix-1" class="policy-appendix">
            <h2>Ek 1: Cayma Formu</h2>
            <div class="form-template">
              <p>(Sadece sözleşmeden caymak istiyorsanız doldurup gönderiniz)</p>
              <div class="form-content">
                <p><strong>Alıcı:</strong> LA ROSÉE COSMÉTIQUES <br> bonjour@larosee-cosmetiques.com</p>
                <p>İşbu form ile aşağıdaki ürünlerin satış sözleşmesinden caydığımı bildiririm:</p>
                <p>Sipariş Tarihi: ....................</p>
                <p>Teslim Tarihi: ....................</p>
                <p>Müşteri Adı Soyadı: ....................</p>
                <p>Müşteri Adresi: ....................</p>
                <br>
                <p>İmza: ....................</p>
                <p>Tarih: ....................</p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  </div>
</template>

<style scoped>
.policy-container {
  background-color: #fcfcfc;
  min-height: 100vh;
  padding-top: 2rem;
}

.policy-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
  padding: 0 1.5rem;
}

.policy-sidebar {
  display: none;
}

@media (min-width: 992px) {
  .policy-sidebar {
    display: block;
  }
}

.sidebar-sticky {
  position: sticky;
  top: 100px;
}

.sidebar-sticky h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
}

.sidebar-sticky ul {
  list-style: none;
  padding: 0;
}

.sidebar-sticky li {
  margin-bottom: 0.8rem;
}

.sidebar-sticky a {
  text-decoration: none;
  color: #666;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.sidebar-sticky a:hover {
  color: #34AAFF;
}

.policy-content {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  line-height: 1.7;
  color: #444;
}

.policy-header {
  border-bottom: 1px solid #eee;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
}

.policy-header h1 {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.last-update {
  font-size: 0.9rem;
  color: #999;
  font-style: italic;
}

.policy-section {
  margin-bottom: 3rem;
}

.policy-section h2 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-left: 4px solid #34AAFF;
  padding-left: 1rem;
}

.subsection {
  margin-bottom: 1.5rem;
}

.subsection h3 {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 0.8rem;
}

.contact-card {
  background: #f8fbff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e1f0ff;
}

.contact-card ul {
  list-style: none;
  padding: 0;
}

.highlight-info {
  background: #fff9f0;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #ffb020;
  margin: 1.5rem 0;
}

.alert-box {
  background: #fff5f5;
  color: #c53030;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #feb2b2;
}

.form-template {
  background: #fafafa;
  padding: 2rem;
  border: 2px dashed #ddd;
  border-radius: 8px;
}

.form-content {
  margin-top: 1.5rem;
  font-family: monospace;
}

@media (max-width: 991px) {
  .policy-wrapper {
    grid-template-columns: 1fr;
  }
  .policy-header h1 {
    font-size: 1.8rem;
  }
}
</style>
