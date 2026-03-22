<template>
  <div class="sun-care-page">
    <!-- Hero Section -->
    <header class="hero" v-animate-on-scroll>
      <div class="hero-content">
        <h1 class="fade-in">Taahhütlü bir güneş bakım serisi</h1>
        <p class="fade-in delay-1">İşler kolay değildi; uzun bir süre boyunca güneş bakım serisi oluşturmaktan neredeyse vazgeçmiştik çünkü araştırmalarımıza rağmen ne cilt korumasından ne de okyanusların korunmasından ödün vermeyen ideal formülü bulamadık.</p>
      </div>
      <div class="hero-media px-4 md:px-0">
        <img 
          src="https://larosee.twic.pics/1371x1070/60f75a878b/la-protection-solaire-efficace-et-respectueuse-de-la-peau-des-oceans.jpg/m/1371x1070" 
          alt="Taahhütlü bir güneş bakım serisi" 
          class="hero-image"
        />
      </div>
    </header>

    <!-- Sub Navigation -->
    <nav class="sub-nav sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 mb-12">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <router-link to="/taahhutlerimiz" class="flex items-center text-gray-600 hover:text-black transition-colors group" style="display: flex; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" style="width: 20px; height: 20px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="ml-1">Geri</span>
        </router-link>
        <span class="font-medium">Okyanus Dostu Güneş Bakımı</span>
      </div>
    </nav>

    <!-- Ocean Challenges Section -->
    <section class="section-container" v-animate-on-scroll>
      <div class="max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-light mb-8 italic">Güneş bakım ürünlerinin formülasyonu: okyanuslar için gerçek bir zorluk</h2>
        <img 
          src="https://larosee.twic.pics/1072x746/ce9b740cec/aux-cotes-de-the-coral-planters-la-rosee-participe-a-la-sauvegarde-et-a-la-plantation-de-coraux-aux-maldives.jpeg/m/1072x746" 
          alt="Mercan Resifleri" 
          class="rounded-3xl shadow-2xl mb-12 w-full object-cover"
        />
      </div>

      <div class="max-w-3xl mx-auto px-6">
        <div class="accordion-list space-y-4">
          <details class="accordion-item group border-b border-gray-200 py-6">
            <summary class="flex justify-between items-center cursor-pointer list-none">
              <h3 class="text-xl font-light uppercase tracking-wider">Mercan resifleri, deniz yaşamının tapınağıdır.</h3>
              <span class="transform transition-transform group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div class="mt-6 text-gray-600 leading-relaxed space-y-4">
              <p>Mercan resifleri dünya çapında yaklaşık 280.000 km²'lik bir alanı kaplar, bu da okyanus yüzeyinin %0,1'ine tekabül eder. Bununla birlikte, bu %0,1, mevcut deniz yaşamının %25'ine ev sahipliği yapmaktadır. İki milyondan fazla farklı türe ev sahipliği yapmaktadır!</p>
              <p>Sonuç olarak, deniz tabanının tahrip edilmesi bu hayati ekosistemleri ve onlara bağımlı olan tüm gıda zincirini tehdit etmektedir.</p>
            </div>
          </details>

          <details class="accordion-item group border-b border-gray-200 py-6">
            <summary class="flex justify-between items-center cursor-pointer list-none">
              <h3 class="text-xl font-light uppercase tracking-wider">Endişe verici rakamlar</h3>
              <span class="transform transition-transform group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div class="mt-6 text-gray-600 leading-relaxed space-y-4">
              <p>Resiflerin ve ilgili ekosistemlerin %20'si hali hazırda geri dönülemez bir şekilde yok edilmiştir ve geri kalan %80'in sadece %30'u hala sağlıklı bir durumdadır.</p>
              <p>Güneş kremleri mercan sağlığı üzerinde etkilidir ve dünyadaki mercan resiflerinin %10'una kadarını tehdit edebilir! Her yıl kullanılan 16.000 ila 25.000 ton güneş kreminin 4.000 ila 6.000 tonu mercan resifleri tarafından emilmektedir! Sonuç açık: mercanlar ağarıyor ve ölüyor.</p>
            </div>
          </details>

          <details class="accordion-item group border-b border-gray-200 py-6">
            <summary class="flex justify-between items-center cursor-pointer list-none">
              <h3 class="text-xl font-light uppercase tracking-wider">Mercan ağarması</h3>
              <span class="transform transition-transform group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div class="mt-6 text-gray-600 leading-relaxed space-y-4">
              <p>Çoğu mercan, hayvanın hücrelerinde barınan zooxanthellae adı verilen fotosentetik mikroalglerle simbiyoz içinde yaşama özelliğine sahiptir.</p>
              <p>Dış çevre koşulları elverişsiz hale geldiğinde (ısınma, kirlilik), simbiyoz bozulur, hatta kopar; bu da hayvanın zooxanthellae'sini kaybetmesine neden olur. Daha sonra 'ağarma' adı verilen bir renk değişimi geçirir ve ölür.</p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Clean Beauty Solution Section -->
    <section class="section-container bg-emerald-50/30" v-animate-on-scroll>
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div class="order-2 md:order-1">
          <img 
            src="https://larosee.twic.pics/1920x1280/872b6599bd/nos-solaires-se-composent-d-une-base-de-formule-naturelle-a-l-huile-d-abricot-bio.jpg/m/1920x1280" 
            alt="Organik Kayısı Yağı" 
            class="rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div class="order-1 md:order-2 space-y-8">
          <h2 class="text-3xl font-light italic">Deniz ekosistemine daha saygılı, cildi etkili bir şekilde koruyan bir çözüm</h2>
          <p class="text-lg text-gray-600 leading-relaxed">Bu gözleme dayanarak, deniz çevremiz üzerinde zararlı bir etkiye sahip olabilecek güneş koruma ürünleri yaratmak kesinlikle düşünülemezdi.</p>
          <div class="p-8 bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-emerald-100">
            <h3 class="text-xl font-medium mb-4 text-emerald-900">Organik kayısı yağı içeren temel bir formül...</h3>
            <p class="text-gray-700">İçerikler etkinlikleri için dikkatle seçilmiştir. Tartışmalı içerik yok ve %100 doğal kökenli bir koku. Serimiz için ana aktif bileşen olarak organik kayısı yağını seçtik. Cildi besler ve ışıltılı bir bronzluk bırakır.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- New Generation Filters Section -->
    <section class="section-container" v-animate-on-scroll>
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <h2 class="text-3xl font-light italic">... ve yeni nesil organik UV filtreleri</h2>
          <p class="text-lg text-gray-600 leading-relaxed">UV filtrelerimiz bizim için güçlü bir seçimi temsil ediyor. Şimdiye kadar iki farklı filtre türü mevcuttu. Standartlarımızı karşılamadıkları için ikisini de eledik.</p>
          
          <div class="grid gap-6">
            <div class="p-6 bg-gray-50 rounded-2xl border border-gray-100 italic">
              <h4 class="font-medium mb-2 uppercase tracking-tighter text-sm">Araştırmalarımızı 3 önemli faktör etrafında topluyoruz:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Maksimum cilt koruması için geniş spektrumlu UVB/UVA koruması.</li>
                <li>Okyanusta ürün dağılımını mümkün olduğunca sınırlamak için suya dayanıklılık.</li>
                <li>Biyolojik bozunabilirlik: Tüm formüllerimizin biyolojik bozunabilirliğini test ettik (OECD 301F standardına göre).</li>
              </ul>
            </div>
            <p class="text-gray-600">Güneş bakım ürünlerimizin mercan canlılığı ve deniz yosunlarının büyümesi üzerinde minimum etki ile daha saygılı olduğu kanıtlanmıştır.</p>
          </div>
        </div>
        <div>
          <img 
            src="https://larosee.twic.pics/1920x1477/230c09f703/nos-solaires-sont-composes-de-filtres-organiques-clean-nouvelle-generation.jpg/m/1920x1477" 
            alt="Yeni Nesil Filtreler" 
            class="rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>

    <!-- Coral Planters Commitment -->
    <section class="section-container bg-[#f8f9fa] relative overflow-hidden" v-animate-on-scroll>
      <div class="absolute top-0 right-0 w-1/3 h-full bg-[#e9ecef]/50 -skew-x-12 translate-x-1/2"></div>
      <div class="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
        <div class="inline-block py-2 px-4 bg-white rounded-full shadow-sm text-sm font-medium tracking-widest uppercase mb-4">Ortaklığımız</div>
        <h2 class="text-3xl md:text-5xl font-light">La Rosée, The Coral Planters ile birlikte taahhütte bulunuyor!</h2>
        <p class="text-xl text-gray-600 font-light max-w-2xl mx-auto">Mercan resiflerinin yok olmasıyla mücadele etmek için The Coral Planters ile güçlerimizi birleştirdik.</p>
        <div class="py-12 px-8 bg-white rounded-[2rem] shadow-2xl space-y-6">
          <img 
            src="https://larosee.twic.pics/3000x2250/7753b11ad2/eng-tcp.jpg/m/3000x2250" 
            alt="The Coral Planters" 
            class="rounded-2xl w-full mb-8"
          />
          <div class="text-4xl md:text-6xl font-light text-emerald-600">12.000+</div>
          <p class="text-lg uppercase tracking-widest font-medium text-gray-500">2022 yılında dikilen mercan parçası</p>
        </div>
      </div>
    </section>

    <!-- Final CTA Area -->
    <section class="section-container py-32" v-animate-on-scroll>
      <div class="max-w-2xl mx-auto px-6 text-center space-y-12">
        <h2 class="text-4xl font-light italic">Kişiselleştirilmiş Güneş Koruması</h2>
        <p class="text-xl text-gray-600 font-light leading-relaxed">Cilt tipinize ve fototipinize en uygun güneş korumasını keşfetmek için tanımızı yapın.</p>
        <router-link to="/diagnosis" class="inline-block bg-[#00928a] text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-[#007a73] transition-all hover:scale-105 shadow-xl">
          TANIMA BAŞLA
        </router-link>
      </div>
    </section>

    <!-- Newsletter and Reassurances (Common components would be better, but implementing specifically for visual match) -->
    <footer class="bg-gray-50 py-20 mt-20 border-t border-gray-100">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-8">
        <img src="https://larosee.twic.pics/687x625/7de8cb25a6/pictogrammes_enveloppe-bleu.png/m/687x625" alt="Newsletter" class="w-16 mx-auto mb-6" style="width: 64px; height: auto;" />
        <h3 class="text-2xl font-light">Bültenimize kaydolun!</h3>
        <p class="text-gray-600 font-light">Kaydolduğunuzda %10 indirim kazanın. Özel önizlemeleri, en iyi ipuçlarımızı ve size özel teklifleri kaçırmayın!</p>
        <form class="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input type="email" placeholder="Email adresiniz" class="flex-1 px-8 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <button type="submit" class="bg-black text-white px-8 py-4 rounded-full hover:opacity-80 transition-opacity">Gönder</button>
        </form>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Note: v-animate-on-scroll is assumed to be handled by a global directive or a mixin consistent with other views.
// For this standalone implementation, we ensure classes reflect the intention.
</script>

<style scoped>
.sun-care-page {
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
  background-color: #fff;
}

.hero {
  padding-top: 6rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: #1a1a1a;
}

.hero p {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  color: #4a4a4a;
}

.hero-media {
  width: 100%;
  max-width: 1200px;
}

.hero-image {
  width: 100%;
  border-radius: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}

.section-container {
  padding: 8rem 0;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards;
}

.delay-1 { animation-delay: 0.2s; }

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.accordion-item summary::-webkit-details-marker {
  display: none;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  .section-container {
    padding: 4rem 0;
  }
}
</style>
