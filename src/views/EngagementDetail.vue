<template>
  <div class="engagement-detail-page">
    <main class="Layout-module__content___wEYFD" id="content">
      <!-- Subnav static -->
      <section class="Subnav-module__root___b6qK5 CommitmentsNav-module__root___bvXVk" data-position="static" aria-label="Commitments pages">
        <nav class="swiper">
          <ul class="swiper-wrapper">
            <li v-for="item in commitments" :key="item.slug" class="swiper-slide">
              <router-link
                :to="'/en-ww/engagements/' + item.slug"
                :aria-current="item.slug === currentSlug ? 'page' : undefined"
              >{{ item.name }}</router-link>
            </li>
          </ul>
          <button class="Subnav-module__button___nXH1I swiper-button-next" type="button"></button>
        </nav>
      </section>

      <!-- Subnav fixed -->
      <section class="Subnav-module__root___b6qK5 CommitmentsNav-module__root___bvXVk" data-position="fixed" aria-hidden="true">
        <nav class="swiper">
          <ul class="swiper-wrapper">
            <li v-for="item in commitments" :key="item.slug" class="swiper-slide">
              <router-link
                :to="['hikayemiz', 'ekolojik-donusum', 'formullerimiz'].includes(item.slug) ? '/' + item.slug : '/engagements/' + item.slug"
                :aria-current="item.slug === currentSlug ? 'page' : undefined"
              >{{ item.name }}</router-link>
            </li>
          </ul>
          <button class="Subnav-module__button___nXH1I swiper-button-next" type="button"></button>
        </nav>
      </section>

      <article v-if="current">
        <!-- Header -->
        <header class="CommitmentsHeader-module__root___Cdvuv" data-variant="page">
          <p class="Eyebrow-module__root___gdMQw">
            <router-link to="/en-ww/engagements">Taahhütlerimiz</router-link>
          </p>
          <h1 class="Heading-module__root___NpBjo CommitmentsHeader-module__title___rncEH" data-font-size="lg">
            {{ current.name }}
          </h1>
          <img
            :src="current.image"
            :srcset="buildSrcset(current.image)"
            width="2000"
            height="2000"
            sizes="(min-width: 64rem) 83.3333vw, 100vw"
            :alt="current.name"
            fetchpriority="high"
            decoding="async"
            class="CommitmentsHeader-module__image___4Pnhf"
          />
        </header>

        <!-- Content per slug -->
        <template v-if="currentSlug === 'la-transition-ecologique-au-coeur-de-toutes-nos-decisions'">
          <div class="Section-module__root___58S5Y CenteredBigText-module__root___N27Nc" data-background="white">
            <div class="Heading-module__root___NpBjo CenteredBigText-module__text___0GRRV" data-font-size="xl">
              <p>Ekolojik geçiş, <em>tüm kararlarımızın</em> merkezinde yer almaktadır.</p>
            </div>
          </div>
          <div class="Section-module__root___58S5Y RichText-module__root___KPAL-" data-background="white" data-text-alignment="left">
            <div class="TextContainer-module__root___3x88v RichText-module__content___xefl8">
              <p>2015'ten bu yana La Rosée, çevresel etkiyi azaltmayı her ürün kararının merkezine koymuştur. Biyobozunur formüller, geri dönüştürülmüş ambalajlar ve karbon ayak izini azaltma hedefleriyle çalışıyoruz.</p>
              <p>2035 yılına kadar tüm ürünlerimizin katı, dolum yapılabilir veya depozitolu olmasını hedefliyoruz.</p>
              <h2 class="Heading-module__root___NpBjo" data-font-size="md">Somut Taahhütlerimiz</h2>
              <ul>
                <li>Formüllerimizde %95'e kadar doğal kaynaklı bileşenler</li>
                <li>Biyobozunur ambalaj ve plastik kullanımını azaltma</li>
                <li>Karbon nötr teslimat hedefi</li>
                <li>Tedarik zincirinde şeffaflık</li>
              </ul>
            </div>
          </div>
        </template>

        <template v-else-if="currentSlug === 'nos-formules'">
          <div class="Section-module__root___58S5Y CenteredBigText-module__root___N27Nc" data-background="white">
            <div class="Heading-module__root___NpBjo CenteredBigText-module__text___0GRRV" data-font-size="xl">
              <p><em>%100'e kadar</em> doğal kaynaklı bileşenlerle <em>etkili formüller.</em></p>
            </div>
          </div>
          <div class="Section-module__root___58S5Y RichText-module__root___KPAL-" data-background="white" data-text-alignment="left">
            <div class="TextContainer-module__root___3x88v RichText-module__content___xefl8">
              <p>La Rosée olarak formüllerimizi, en hassas ciltler dahil herkes için güvenli ve etkili olacak şekilde tasarlıyoruz. Her bileşen dikkatle seçilir, tartışmalı maddeler formülasyon tüzüğümüzden kesinlikle çıkarılır.</p>
              <h2 class="Heading-module__root___NpBjo" data-font-size="md">Formülasyon İlkelerimiz</h2>
              <ul>
                <li>Tartışmalı ve zararlı bileşenlerden arındırılmış formüller</li>
                <li>Biyobozunur ve çevre dostu aktif maddeler</li>
                <li>Klinik olarak kanıtlanmış etkinlik</li>
                <li>Bebek ve hassas ciltlere uygun dermatoloji testleri</li>
              </ul>
            </div>
          </div>
        </template>

        <template v-else-if="currentSlug === 'nos-packagings'">
          <div class="Section-module__root___58S5Y CenteredBigText-module__root___N27Nc" data-background="white">
            <div class="Heading-module__root___NpBjo CenteredBigText-module__text___0GRRV" data-font-size="xl">
              <p>Gereksiz ambalajı <em>reddeden</em> bir marka olmak.</p>
            </div>
          </div>
          <div class="Section-module__root___58S5Y RichText-module__root___KPAL-" data-background="white" data-text-alignment="left">
            <div class="TextContainer-module__root___3x88v RichText-module__content___xefl8">
              <p>Daha az ambalaj, daha fazla sorumluluk. La Rosée olarak gereksiz ambalajdan kaçınmak, geri dönüştürülmüş ve geri dönüştürülebilir malzemelere yönelmek için sürekli çalışıyoruz.</p>
              <h2 class="Heading-module__root___NpBjo" data-font-size="md">Ambalaj Stratejimiz</h2>
              <ul>
                <li>Geri dönüştürülmüş plastik ve karton kullanımı</li>
                <li>Katı kozmetiklerde ambalajsız ürün geliştirme</li>
                <li>Seyahat boy ve numune çoğaltmayı reddetme</li>
                <li>2035'e kadar %100 katı/dolum yapılabilir ürün hedefi</li>
              </ul>
            </div>
          </div>
        </template>

        <template v-else-if="currentSlug === 'des-actions-concretes-pour-la-planete'">
          <div class="Section-module__root___58S5Y CenteredBigText-module__root___N27Nc" data-background="white">
            <div class="Heading-module__root___NpBjo CenteredBigText-module__text___0GRRV" data-font-size="xl">
              <p>Gezegen için <em>somut adımlar</em> atmak.</p>
            </div>
          </div>
          <div class="Section-module__root___58S5Y RichText-module__root___KPAL-" data-background="white" data-text-alignment="left">
            <div class="TextContainer-module__root___3x88v RichText-module__content___xefl8">
              <p>B Corp sertifikalı bir şirket olarak La Rosée, sosyal ve çevresel sorumluluğu yalnızca söylem düzeyinde değil, günlük operasyonlarında da hayata geçiriyor.</p>
              <h2 class="Heading-module__root___NpBjo" data-font-size="md">Dayanışma Taahhütlerimiz</h2>
              <ul>
                <li>İklim İçin Şirketler Sözleşmesi'ne (CEC) katılım</li>
                <li>Yerel tedarikçilerle dayanışma</li>
                <li>Kâr amacı gütmeyen kuruluşlarla ortaklık</li>
                <li>Çalışan refahı ve adil ücret politikası</li>
              </ul>
            </div>
          </div>
        </template>

        <!-- Newsletter -->
        <aside class="NewsletterSection-module__root___j9mxB">
          <img src="https://larosee.twic.pics/687x625/7de8cb25a6/pictogrammes_enveloppe-bleu.png" width="687" height="625" alt="" loading="lazy" decoding="async" class="NewsletterSection-module__icon___O--LE"/>
          <h2 class="Heading-module__root___NpBjo NewsletterSection-module__heading___PQV1f" data-font-size="md">Bültenimize kaydolun!</h2>
          <div class="TextContainer-module__root___3x88v NewsletterSection-module__text___au1e0">
            <p>Kaydoldugunuzda %10 indirim kazanin. Özel önizlemeleri, en iyi ipuçlarımızı ve size ozel teklifleri kaçırmayın!</p>
          </div>
          <form class="NewsletterSection-module__form___gaiv9" action="/contact?newsletter=true" method="post">
            <div>
              <div class="Input-module__root___xpABX">
                <input class="Input-module__control___V7V8B" placeholder="Email" required type="email" autocomplete="email" name="email"/>
                <label class="Input-module__label___Uin1P">Email</label>
              </div>
            </div>
            <button class="Button-module__root___Djkf0 NewsletterSection-module__submit___zI-PU" data-variant="flat" data-size="md" type="submit">Gönder</button>
          </form>
        </aside>

        <!-- Reassurances -->
        <aside class="Reassurances-module__root___evF-d">
          <h2 style="position:absolute;border:0;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">Güvenceler</h2>
          <ul class="Reassurances-module__list___xTpiW">
            <li class="Reassurances-module__item___diEAt"><article class="IconWithText-module__root___o-KFW" data-size="lg" data-align="center" data-border="true"><img src="https://larosee.twic.pics/101x100/496ca65e00/livraison.svg" width="101" height="100" alt="" loading="lazy"/><div class="IconWithText-module__text___C0gVA"><p class="IconWithText-module__title___BAcgw">Ücretsiz Kargo</p><p>25TL üzeri siparislerde</p></div></article></li>
            <li class="Reassurances-module__item___diEAt"><article class="IconWithText-module__root___o-KFW" data-size="lg" data-align="center" data-border="true"><img src="https://larosee.twic.pics/152x150/110e69b8d2/echantillon.svg" width="152" height="150" alt="" loading="lazy"/><div class="IconWithText-module__text___C0gVA"><p class="IconWithText-module__title___BAcgw">1 ucretsiz numune</p><p>her siparişte talep üzerine</p></div></article></li>
            <li class="Reassurances-module__item___diEAt"><article class="IconWithText-module__root___o-KFW" data-size="lg" data-align="center" data-border="true"><img src="https://larosee.twic.pics/101x100/50787b3336/pharmacies.svg" width="101" height="100" alt="" loading="lazy"/><div class="IconWithText-module__text___C0gVA"><p class="IconWithText-module__title___BAcgw">Partner Eczaneler</p><p><router-link to="/en-ww/pharmacy-locator">Yakininizdaki eczaneyi bulun</router-link></p></div></article></li>
            <li class="Reassurances-module__item___diEAt"><article class="IconWithText-module__root___o-KFW" data-size="lg" data-align="center" data-border="true"><img src="https://larosee.twic.pics/101x100/efbb8a48d8/sav.svg" width="101" height="100" alt="" loading="lazy"/><div class="IconWithText-module__text___C0gVA"><p class="IconWithText-module__title___BAcgw">Sorunuz mu var?</p><p><router-link to="/en-ww/contact">Bize ulaşın</router-link></p></div></article></li>
          </ul>
        </aside>
      </article>

      <div v-else class="not-found" style="padding: 4rem 2rem; text-align: center;">
        <p>Sayfa bulunamadı.</p>
        <router-link to="/en-ww/engagements">Taahhütlerimize dön</router-link>
      </div>
    </main>

    <aside class="BCorp-module__root___8-Roy">
      <div class="BCorp-module__content___ISZXE">
        <h2 class="BCorp-module__logo___4DmT9">
          <img src="https://larosee.twic.pics/81x118/1786c2c8d6/certified_b_corporation_b_corp_logo_2022_black_rgb-1.svg" width="81" height="118" alt="Certified B Corporation" loading="lazy"/>
        </h2>
        <div>
          <div class="Heading-module__root___NpBjo BCorp-module__heading___eiN8k" data-font-size="sm">
            <p>La Rosée B Corp sertifikalidir.<br/>Bu sertifika, sorumlu ve katilimci bir sirket olmaya olan derin ve samimi bagliligimizi gostermektedir.</p>
          </div>
          <router-link data-variant="underline" class="Link-module__root___YqUoP" to="/taahhutlerimiz">Taahhutlerimizi kesfedin</router-link>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import megaMenuData from '../assets/mega_menu_data.json'

const route = useRoute()
const commitments = megaMenuData.commitments

const currentSlug = computed(() => route.params.slug)
const current = computed(() => commitments.find(c => c.slug === currentSlug.value))

function buildSrcset(url) {
  const sizes = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000]
  return sizes.map(w => `${url}?twic=v1/resize=${w} ${w}w`).join(', ')
}
</script>

<style scoped>
.TextContainer-module__root___3x88v h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}
.TextContainer-module__root___3x88v ul {
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 1.5rem;
}
.TextContainer-module__root___3x88v ul li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
</style>
