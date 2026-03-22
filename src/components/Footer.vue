<script setup>
import { ref } from 'vue'

const openSection = ref(null)

function toggleSection(name) {
  openSection.value = openSection.value === name ? null : name
}
</script>

<template>
<footer class="Footer-module__root___kgUyt">
  <!-- Mobile accordion -->
  <div class="Footer-module__accordion___HU6i-" data-orientation="vertical">
    <div :data-state="openSection === 'service' ? 'open' : 'closed'" data-orientation="vertical" class="AccordionItem-module__root___5x7iI Footer-module__accordion-item___vbuE4" data-rounded="false">
      <h2 data-orientation="vertical" :data-state="openSection === 'service' ? 'open' : 'closed'">
        <button type="button" :aria-expanded="openSection === 'service'" :data-state="openSection === 'service' ? 'open' : 'closed'" data-orientation="vertical" class="AccordionTrigger-module__root___IRk5g" data-size="xl" data-bold="false" @click="toggleSection('service')">Müşteri Hizmetleri</button>
      </h2>
      <div v-show="openSection === 'service'" :data-state="openSection === 'service' ? 'open' : 'closed'" role="region" data-orientation="vertical" class="AccordionContent-module__root___EyqbN Footer-module__accordion-content___u-B8D" data-size="xl">
        <ul>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/iade-politikasi">İade Politikası</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/sikca-sorulan-sorular">SSS</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/iletisim">İletişim</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/satis-kosullari">Satış Koşulları</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/hizmet-kosullari">Hizmet Koşulları</router-link></li>
        </ul>
      </div>
    </div>
    <div :data-state="openSection === 'brand' ? 'open' : 'closed'" data-orientation="vertical" class="AccordionItem-module__root___5x7iI Footer-module__accordion-item___vbuE4" data-rounded="false">
      <h2 data-orientation="vertical" :data-state="openSection === 'brand' ? 'open' : 'closed'">
        <button type="button" :aria-expanded="openSection === 'brand'" :data-state="openSection === 'brand' ? 'open' : 'closed'" data-orientation="vertical" class="AccordionTrigger-module__root___IRk5g" data-size="xl" data-bold="false" @click="toggleSection('brand')">La Rosée</button>
      </h2>
      <div v-show="openSection === 'brand'" :data-state="openSection === 'brand' ? 'open' : 'closed'" role="region" data-orientation="vertical" class="AccordionContent-module__root___EyqbN Footer-module__accordion-content___u-B8D" data-size="xl">
        <ul>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/hikayemiz">Hikayemiz</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/pharmacy-locator">Eczanelerimiz</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/engagements">Taahhütlerimiz</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/pages/l-hydratation-notre-expertise">Uzmanlık</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/pages/les-solaires-oceans">Güneş Bakımı</router-link></li>
          <li><a data-variant="underline-reverse" class="Link-module__root___YqUoP" href="https://www.welcometothejungle.com/fr/companies/la-rosee/jobs" target="_blank" rel="noopener noreferrer">Bize Katıl</a></li>
        </ul>
      </div>
    </div>
    <div :data-state="openSection === 'products' ? 'open' : 'closed'" data-orientation="vertical" class="AccordionItem-module__root___5x7iI Footer-module__accordion-item___vbuE4" data-rounded="false">
      <h2 data-orientation="vertical" :data-state="openSection === 'products' ? 'open' : 'closed'">
        <button type="button" :aria-expanded="openSection === 'products'" :data-state="openSection === 'products' ? 'open' : 'closed'" data-orientation="vertical" class="AccordionTrigger-module__root___IRk5g" data-size="xl" data-bold="false" @click="toggleSection('products')">Ürünlerimiz</button>
      </h2>
      <div v-show="openSection === 'products'" :data-state="openSection === 'products' ? 'open' : 'closed'" role="region" data-orientation="vertical" class="AccordionContent-module__root___EyqbN Footer-module__accordion-content___u-B8D" data-size="xl">
        <ul>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/yuz-bakimi">Yüz Bakımı</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/vucut-bakimi">Vücut Bakımı</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/sac-bakimi">Saç Bakımı</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/bebek-bakimi">Bebek Bakımı</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/gunes-bakimi">Güneş Bakımı</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/gunluk-hijyen">Günlük Hijyen</router-link></li>
          <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/aksesuarlar">Aksesuar</router-link></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Desktop columns -->
  <div class="Footer-module__columns___b4zlr">
    <section>
      <h2>Müşteri Hizmetleri</h2>
      <ul>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/iade-politikasi">İade Politikası</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/sikca-sorulan-sorular">SSS</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/iletisim">İletişim</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/satis-kosullari">Satış Koşulları</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/hizmet-kosullari">Hizmet Koşulları</router-link></li>
      </ul>
    </section>
    <section>
      <h2>La Rosée</h2>
      <ul>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/hikayemiz">Hikayemiz</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/pharmacy-locator">Eczanelerimiz</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/engagements">Taahhütlerimiz</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/pages/l-hydratation-notre-expertise">Uzmanlık</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/pages/les-solaires-oceans">Güneş Bakımı</router-link></li>
        <li><a data-variant="underline-reverse" class="Link-module__root___YqUoP" href="https://www.welcometothejungle.com/fr/companies/la-rosee/jobs" target="_blank" rel="noopener noreferrer">Bize Katıl</a></li>
      </ul>
    </section>
    <section>
      <h2>Ürünlerimiz</h2>
      <ul>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/yuz-bakimi">Yüz Bakımı</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/vucut-bakimi">Vücut Bakımı</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/sac-bakimi">Saç Bakımı</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/bebek-bakimi">Bebek Bakımı</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/gunes-bakimi">Güneş Bakımı</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/gunluk-hijyen">Günlük Hijyen</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/collections/aksesuarlar">Aksesuar</router-link></li>
      </ul>
    </section>
  </div>

  <div class="Footer-module__subfooter___DPO6Z">
    <section class="Footer-module__payment-methods___eBXx3">
      <h2 style="position:absolute;border:0;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;word-wrap:normal">Ödeme Yöntemleri</h2>
    </section>
    <section class="Footer-module__legal___9wBID">
      <h2 style="position:absolute;border:0;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;word-wrap:normal">Legal</h2>
      <ul>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/cerez-politikasi">Çerez Yönetimi</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/cerez-politikasi">Çerez Kullanımı</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/gizlilik-politikasi">Gizlilik</router-link></li>
        <li><router-link data-variant="underline-reverse" class="Link-module__root___YqUoP" to="/policies/yasal-uyari">Yasal Uyarı</router-link></li>
      </ul>
      <small>© 2026 La Rosée cosmétiques – Tüm hakları saklıdır</small>
    </section>
  </div>
</footer>
</template>

<style scoped>
/* Accordion content animation */
.AccordionContent-module__root___EyqbN[data-state="open"] {
  display: block !important;
}
.AccordionContent-module__root___EyqbN[data-state="closed"] {
  display: none;
}
.AccordionContent-module__root___EyqbN ul {
  list-style: none;
  padding: 0.5rem 0 1rem 0;
  margin: 0;
}
.AccordionContent-module__root___EyqbN ul li {
  padding: 0.4rem 0;
}
.AccordionContent-module__root___EyqbN a,
.AccordionContent-module__root___EyqbN .Link-module__root___YqUoP {
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
}
</style>
