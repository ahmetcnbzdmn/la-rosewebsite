<template>
  <div class="policy-container">
    <main class="Layout-module__content___wEYFD" id="content">
      <div class="policy-wrapper">
        <!-- Sidebar Navigation -->
        <nav class="policy-sidebar">
          <div class="sidebar-sticky">
            <h3>Hizmet Koşulları</h3>
            <ul>
              <li><a href="#article-1">1. Amaç</a></li>
              <li><a href="#article-2">2. Tanımlar</a></li>
              <li><a href="#article-3">3. Web Sitesine Erişim</a></li>
              <li><a href="#article-4">4. Cilt Analiz Hizmeti</a></li>
              <li><a href="#article-5">5. Eczane Bulucu</a></li>
              <li><a href="#article-6">6. Çevrimiçi İncelemeler</a></li>
              <li><a href="#article-7">7. Kişisel Alan</a></li>
              <li><a href="#article-8">8. Kullanıcı Yükümlülükleri</a></li>
              <li><a href="#article-9">9. Sorumluluk</a></li>
              <li><a href="#article-10">10. Fikri Mülkiyet</a></li>
            </ul>
          </div>
        </nav>

        <!-- Main Content -->
        <article class="policy-content">
          <header class="policy-header">
            <h1 class="Heading-module__root___NpBjo">Web Sitesi Kullanım Şart ve Koşulları</h1>
            <p class="last-update">Son güncelleme: 01/07/2023</p>
            <div class="policy-intro">
              <p>Bu Kullanım Şartları ("<strong>Kullanım Koşulları</strong>"), LA ROSÉE COSMÉTIQUES web sitesine erişim ve kullanım kurallarını belirler.</p>
            </div>
          </header>

          <section id="article-1" class="policy-section">
            <h2>Madde 1. Amaç</h2>
            <p>Bu Kullanım Koşulları, LA ROSÉE COSMÉTIQUES (bundan böyle "<strong>La Rosée</strong>" olarak anılacaktır) ile web sitesini kullanan her kullanıcı (bundan böyle "<strong>Kullanıcı</strong>") arasındaki hak ve yükümlülükleri detaylandırır.</p>
          </section>

          <section id="article-2" class="policy-section">
            <h2>Madde 2. Tanımlar</h2>
            <ul>
              <li><strong>Kullanım Koşulları:</strong> İşbu belgedir.</li>
              <li><strong>Satış Koşulları:</strong> Web sitesi üzerinden yapılan ürün alımları için geçerli olan <router-link to="/policies/satis-kosullari" class="Link-module__root___YqUoP">Genel Satış Koşulları</router-link>.</li>
              <li><strong>Kişisel Alan:</strong> Web sitesine kayıt olduğunuzda açılan hesabınızdır.</li>
            </ul>
          </section>

          <section id="article-3" class="policy-section">
            <h2>Madde 3. Web Sitesine Erişim</h2>
            <p>Web sitesine erişim ücretsizdir. İnternet erişimi olan her Kullanıcı siteye ulaşabilir. Erişimle ilgili tüm masraflar Kullanıcıya aittir.</p>
          </section>

          <section id="article-4" class="policy-section">
            <h2>Madde 4. Cilt Analiz Hizmeti</h2>
            <p>Web sitemiz üzerinden ücretsiz bir cilt analiz hizmetinden faydalanabilirsiniz. Bu hizmet, sağladığınız verilere dayanarak size en uygun bakım rutinini önermeyi amaçlar.</p>
            <div class="alert-box">
              <p>Bu hizmet tıbbi bir teşhis yerine geçmez. Cilt sorunlarınız için bir uzmana danışmalısınız.</p>
            </div>
          </section>

          <section id="article-5" class="policy-section">
            <h2>Madde 5. Partner Eczane Bulucu</h2>
            <p>Size en yakın satış noktalarını eczane bulucu üzerinden bulabilirsiniz:</p>
            <router-link to="/pharmacy-locator" class="btn-outline">Eczane Bulucuya Git</router-link>
          </section>

          <section id="article-6" class="policy-section">
            <h2>Madde 6. Çevrimiçi İncelemeler ve İçerikler</h2>
            <p>Kullanıcılar ürünlerimiz hakkında yorum yapabilir ve fotoğraf paylaşabilirler. Paylaşılan içeriklerin doğru, hakaret içermeyen ve yasalara uygun olması zorunludur.</p>
            <div class="highlight-info">
              <p>La Rosée, Kullanım Koşullarına aykırı olan içerikleri düzenleme veya silme hakkını saklı tutar.</p>
            </div>
          </section>

          <section id="article-7" class="policy-section">
            <h2>Madde 7. Kişisel Alan (Hesabım)</h2>
            <p>Hesabınız tamamen size özeldir ve devredilemez. Bir Kullanıcı birden fazla hesap oluşturmamalıdır. Yanlış kimlik bilgileriyle hesap açmak yasaktır.</p>
          </section>

          <section id="article-8" class="policy-section">
            <h2>Madde 8. Kullanıcı Yükümlülükleri</h2>
            <p>Kullanıcı, web sitesinin işleyişini bozacak programlar kullanmamayı, başkalarının fikri mülkiyet haklarını ihlal etmemeyi taahhüt eder.</p>
          </section>

          <section id="article-9" class="policy-section">
            <h2>Madde 9. Sorumluluk</h2>
            <p>La Rosée, web sitesinin kesintisiz çalışması için elinden geleni yapar ancak teknik arıza veya erişim sorunlarından dolayı sorumlu tutulamaz.</p>
          </section>

          <section id="article-10" class="policy-section">
            <h2>Madde 10. Fikri Mülkiyet</h2>
            <p>Web sitesindeki tüm içerik, grafikler, videolar ve animasyonlar La Rosée'nin mülkiyetindedir. İzinsiz kopyalanması veya kullanılması yasaktır.</p>
          </section>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>

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

.alert-box {
  background: #fff5f5;
  color: #c53030;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #feb2b2;
}

.highlight-info {
  background: #f8fbff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #34AAFF;
  margin: 1.5rem 0;
}

.btn-outline {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border: 2px solid #34AAFF;
  color: #34AAFF;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.btn-outline:hover {
  background: #34AAFF;
  color: white;
}

@media (max-width: 991px) {
  .policy-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
