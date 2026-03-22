<template>
  <div class="faq-container">
    <main class="Layout-module__content___wEYFD" id="content">
      <div class="faq-wrapper">
        <!-- Sidebar Navigation -->
        <nav class="faq-sidebar">
          <div class="sidebar-sticky">
            <h3>Yardım Merkezi</h3>
            <ul>
              <li><a href="#siparis" @click.prevent="scrollTo('siparis')">Siparişim</a></li>
              <li><a href="#teslimat" @click.prevent="scrollTo('teslimat')">Kargo ve Teslimat</a></li>
              <li><a href="#iade" @click.prevent="scrollTo('iade')">İade ve Geri Ödeme</a></li>
              <li><a href="#urunler" @click.prevent="scrollTo('urunler')">Ürünler</a></li>
              <li><a href="#odeme" @click.prevent="scrollTo('odeme')">Ödeme ve Güvenlik</a></li>
              <li><a href="#hesap" @click.prevent="scrollTo('hesap')">Hesabım</a></li>
            </ul>
          </div>
        </nav>

        <!-- Main Content -->
        <article class="faq-content">
          <header class="faq-header">
            <h1 class="Heading-module__root___NpBjo">Sıkça Sorulan Sorular</h1>
            <p class="subtitle">Size nasıl yardımcı olabiliriz?</p>
          </header>

          <!-- Category: Order -->
          <section id="siparis" class="faq-category">
            <div class="category-header">
              <span class="icon">📦</span>
              <h2>Siparişim</h2>
            </div>
            <div class="accordion-list">
              <div v-for="(item, index) in faqData.siparis" :key="'siparis-'+index" class="accordion-item" :class="{ active: activeItems['siparis-'+index] }">
                <button @click="toggleItem('siparis-'+index)" class="accordion-trigger">
                  {{ item.q }}
                  <span class="arrow"></span>
                </button>
                <div v-show="activeItems['siparis-'+index]" class="accordion-body">
                  <p v-html="item.a"></p>
                </div>
              </div>
            </div>
          </section>

          <!-- Category: Delivery -->
          <section id="teslimat" class="faq-category">
            <div class="category-header">
              <span class="icon">🚚</span>
              <h2>Kargo ve Teslimat</h2>
            </div>
            <div class="accordion-list">
              <div v-for="(item, index) in faqData.teslimat" :key="'teslimat-'+index" class="accordion-item" :class="{ active: activeItems['teslimat-'+index] }">
                <button @click="toggleItem('teslimat-'+index)" class="accordion-trigger">
                  {{ item.q }}
                  <span class="arrow"></span>
                </button>
                <div v-show="activeItems['teslimat-'+index]" class="accordion-body">
                  <p v-html="item.a"></p>
                </div>
              </div>
            </div>
          </section>

          <!-- Category: Return -->
          <section id="iade" class="faq-category">
            <div class="category-header">
              <span class="icon">🔄</span>
              <h2>İade ve Geri Ödeme</h2>
            </div>
            <div class="accordion-list">
              <div v-for="(item, index) in faqData.iade" :key="'iade-'+index" class="accordion-item" :class="{ active: activeItems['iade-'+index] }">
                <button @click="toggleItem('iade-'+index)" class="accordion-trigger">
                  {{ item.q }}
                  <span class="arrow"></span>
                </button>
                <div v-show="activeItems['iade-'+index]" class="accordion-body">
                  <p v-html="item.a"></p>
                </div>
              </div>
            </div>
          </section>

          <!-- Category: Products -->
          <section id="urunler" class="faq-category">
            <div class="category-header">
              <span class="icon">✨</span>
              <h2>Ürünler</h2>
            </div>
            <div class="accordion-list">
              <div v-for="(item, index) in faqData.urunler" :key="'urunler-'+index" class="accordion-item" :class="{ active: activeItems['urunler-'+index] }">
                <button @click="toggleItem('urunler-'+index)" class="accordion-trigger">
                  {{ item.q }}
                  <span class="arrow"></span>
                </button>
                <div v-show="activeItems['urunler-'+index]" class="accordion-body">
                  <p v-html="item.a"></p>
                </div>
              </div>
            </div>
          </section>

          <div class="contact-support">
            <h3>Aradığınız cevabı bulamadınız mı?</h3>
            <p>Müşteri hizmetleri ekibimiz size yardımcı olmaktan mutluluk duyacaktır.</p>
            <router-link to="/contact" class="btn-primary">Bizimle İletişime Geçin</router-link>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const activeItems = reactive({})

const toggleItem = (id) => {
  activeItems[id] = !activeItems[id]
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}

const faqData = {
  siparis: [
    { q: 'Siparişimi nasıl takip edebilirim?', a: 'Siparişiniz kargoya verildiğinde size bir takip numarası içeren e-posta gönderilecektir. Hesabım sayfasından da "Siparişlerim" bölümüne girerek durumunu görebilirsiniz.' },
    { q: 'Siparişimde nasıl değişiklik yapabilirim?', a: 'Siparişiniz hazırlanma aşamasına geçmeden önce değişiklik yapabilirsiniz. Lütfen en kısa sürede müşteri hizmetlerimizle iletişime geçin.' },
    { q: 'Promosyon kodumu girmeyi unuttum, ne yapmalıyım?', a: 'Sipariş verildikten sonra manuel olarak kod ekleyemiyoruz. Ancak bir sonraki alışverişinizde kullanabilir veya siparişi iptal edip yeniden kod ile verebilirsiniz (stok durumuna bağlıdır).' }
  ],
  teslimat: [
    { q: 'Teslimat süreleri nedir?', a: 'Siparişleriniz genellikle 1-3 iş günü içerisinde kargoya verilir. Teslimat süresi bulunduğunuz bölgeye göre kargo firması tarafından belirlenir.' },
    { q: 'Ücretsiz kargo avantajı var mı?', a: 'Belirli bir tutarın üzerindeki tüm siparişlerde kargo ücretsizdir. Güncel kampanya detaylarını sepet sayfasında görebilirsiniz.' }
  ],
  iade: [
    { q: 'Ürün iadesini nasıl yaparım?', a: 'Ürünü teslim aldığınız tarihten itibaren 14 gün içinde orijinal ambalajı bozulmamış ve ürün açılmamış ise iade edebilirsiniz. <router-link to="/policies/iade-politikasi">İade Politikamızı</router-link> detaylıca inceleyebilirsiniz.' },
    { q: 'Geri ödeme ne zaman yapılır?', a: 'İade edilen ürün depomuza ulaşıp onaylandıktan sonra 7-10 iş günü içinde ödeme yaptığınız kanala geri iade edilir.' }
  ],
  urunler: [
    { q: 'Ürünleriniz doğal mı?', a: 'Ürünlerimiz yüksek oranda doğal kökenli içeriklerden oluşmaktadır. Her ürün sayfasında doğallık oranını görebilirsiniz.' },
    { q: 'Hangi cilt tipleri için uygundur?', a: 'Geniş ürün yelpazemiz hassas ciltler dahil tüm cilt tiplerine uygun seçenekler sunar. Ürün filtrelerini kullanarak cildinize en uygun olanı seçebilirsiniz.' }
  ]
}
</script>

<style scoped>
.faq-container {
  background-color: #fcfcfc;
  min-height: 100vh;
  padding-top: 2rem;
}

.faq-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  padding: 0 1.5rem;
}

.faq-sidebar {
  display: none;
}

@media (min-width: 992px) {
  .faq-sidebar {
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
  transition: all 0.2s;
  display: block;
}

.sidebar-sticky a:hover {
  color: #34AAFF;
  transform: translateX(5px);
}

.faq-content {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  color: #444;
}

.faq-header {
  border-bottom: 1px solid #eee;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
}

.faq-header h1 {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #888;
  font-size: 1.1rem;
}

.faq-category {
  margin-bottom: 3.5rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.category-header .icon {
  font-size: 1.5rem;
}

.category-header h2 {
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
}

.accordion-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.accordion-item {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
}

.accordion-item.active {
  border-color: #34AAFF;
  box-shadow: 0 4px 12px rgba(52, 170, 255, 0.08);
}

.accordion-trigger {
  width: 100%;
  padding: 1.2rem 1.5rem;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.05rem;
  font-weight: 500;
  color: #444;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-item.active .accordion-trigger {
  color: #34AAFF;
}

.arrow {
  width: 10px;
  height: 10px;
  border-right: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.active .arrow {
  transform: rotate(-135deg);
  border-color: #34AAFF;
}

.accordion-body {
  padding: 0 1.5rem 1.2rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
}

.contact-support {
  margin-top: 4rem;
  text-align: center;
  padding: 3rem;
  background: #f8fbff;
  border-radius: 12px;
  border: 1px solid #e1f0ff;
}

.contact-support h3 {
  margin-bottom: 1rem;
  color: #333;
}

.contact-support p {
  margin-bottom: 2rem;
  color: #666;
}

.btn-primary {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #34AAFF;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #288ee0;
}

@media (max-width: 991px) {
  .faq-wrapper {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  .faq-header h1 {
    font-size: 1.8rem;
  }
  .faq-content {
    padding: 1.5rem;
  }
}
</style>
