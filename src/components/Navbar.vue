<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import megaMenuData from '../assets/mega_menu_data.json'

const route = useRoute()
const router = useRouter()
const scrolledDown = ref(false)
const hoveredMenu = ref(null)

watch(route, () => {
  hoveredMenu.value = null
})

// Only be transparent on homepage when at top
const heroRoutes = ['home', '']
const isTransparent = computed(() => {
  const onHero = route.name === 'home' || route.path === '/' || route.path === ''
  return (onHero && !scrolledDown.value) ? 'true' : 'false'
})

const handleScroll = () => {
  scrolledDown.value = window.scrollY > 10
}

const setHoveredMenu = (menu) => {
  hoveredMenu.value = menu
}

const toggleHoveredMenu = (menu) => {
  hoveredMenu.value = hoveredMenu.value === menu ? null : menu
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="Header-module__root___vvIxr" :data-transparent="isTransparent">
    <div class="Nav-module__root___hd7MQ">
      <div class="Nav-module__left___lyd7T">
        <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_2p54l_" data-state="closed" title="Menü">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 23H26" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M6 16H26" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M6 9H26" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <nav aria-label="primary" data-orientation="horizontal" dir="ltr">
          <div style="position:relative">
            <ul data-orientation="horizontal" class="Nav-module__nav-menu-list___J1xZQ" dir="ltr">
              <li>
                <button id="radix-_R_4p54l_-trigger-radix-_R_2sp54l_" :data-state="hoveredMenu === 'products' ? 'open' : 'closed'" :aria-expanded="hoveredMenu === 'products'" aria-controls="radix-_R_4p54l_-content-radix-_R_2sp54l_" class="Nav-module__link___I1Rij" data-radix-collection-item="" @click="toggleHoveredMenu('products')">ÜRÜNLER</button>
              </li>
            </ul>
            <div v-show="hoveredMenu === 'products'" id="radix-_R_4p54l_-content-radix-_R_2sp54l_" aria-labelledby="radix-_R_4p54l_-trigger-radix-_R_2sp54l_" data-orientation="horizontal" class="Nav-module__nav-menu-content___Kunf1" :data-state="hoveredMenu === 'products' ? 'open' : 'closed'" dir="ltr">
              <ul class="Nav-module__cards___k8KO8">
                <li v-for="col in megaMenuData.collections" :key="col.slug">
                  <router-link :to="'/collections/' + col.slug" class="CardNavItem-module__root___oOCBj">
                    <img :src="col.image" width="960" height="1200" loading="lazy">{{ col.name }}
                  </router-link>
                </li>
                <li v-for="prod in megaMenuData.products" :key="prod.slug">
                  <router-link :to="'/products/' + prod.slug" class="CardNavItem-module__root___oOCBj">
                    <img :src="prod.image" width="3473" height="3473" loading="lazy">{{ prod.name }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/collections/tum-urunler" class="CardNavItem-module__root___oOCBj">
                    <div class="ProductNavCard-module__button-placeholder">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="rgb(63, 63, 63)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    Tüm Ürünler
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="Nav-module__overlay___VXo0U"></div>
        </nav>
      </div>
      <router-link class="Nav-module__logo___P-xBR" to="/">
        <svg width="125" height="34" viewBox="0 0 125 34" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="_R_1954l_">
          <title id="_R_1954l_">La Rosée cosmétiques</title>
          <path d="M0 6.20863C0 5.80507 0.0225077 5.40539 0.0487666 5.02899H5.97953C5.97953 5.40539 5.97953 5.83223 5.95703 6.20863L3.8188 6.25907C3.77003 6.25907 3.77003 6.28624 3.77003 6.35996L3.69876 19.6581C3.69876 20.1121 3.72126 20.1858 4.74536 20.1858C7.44253 20.1858 8.2453 20.1121 8.63544 20.0345C8.85301 19.984 8.9768 19.8094 9.07434 19.5067L9.94838 16.8681C10.3873 16.9418 10.8487 17.0427 11.2126 17.1707C10.9687 18.4008 10.5823 20.0616 10.2635 21.3926C9.11935 21.3926 6.15584 21.3693 2.87348 21.3693C1.85313 21.3693 0.88155 21.3926 0.00375128 21.3926C0.00375128 21.0162 0.0262589 20.5894 0.0262589 20.213L1.70308 20.1392C1.75185 20.1392 1.77435 20.1121 1.77435 20.0383L1.80061 6.26295L0.00375128 6.21251L0 6.20863Z" fill="currentcolor"></path>
          <path d="M16.8432 20.1392C16.892 20.1392 16.9408 20.1121 16.9633 20.0383C18.6663 15.5371 20.9246 9.3013 22.6014 4.82721C22.8678 4.80393 23.4042 4.77676 23.9144 4.77676C25.5424 9.3013 27.6582 15.5875 29.2374 20.1392L30.7192 20.213C30.7192 20.5661 30.7192 20.9929 30.6929 21.3693H28.4084C27.2905 21.3693 26.1726 21.3965 25.2011 21.3965C25.2011 20.9929 25.2273 20.5932 25.2273 20.213L27.1217 20.1392C27.1705 20.1392 27.193 20.0888 27.1705 20.0112C26.7804 18.882 26.3189 17.4734 25.9326 16.3908C25.9063 16.2899 25.8613 16.2666 25.7638 16.2666L19.9568 16.2938C19.5667 17.5006 19.0565 18.9829 18.6701 20.1392L20.8571 20.213C20.8571 20.5661 20.8571 20.9929 20.8346 21.3693H17.601C16.8957 21.3693 16.1192 21.3965 15.4628 21.3965C15.4628 20.9929 15.4853 20.5932 15.4853 20.213L16.847 20.1392H16.8432ZM22.9691 7.61721C22.1438 9.90664 21.1947 12.6966 20.3919 14.9085C20.3657 15.0094 20.3657 15.0598 20.4407 15.0598L25.5424 15.087C24.7884 12.7743 23.8431 9.9338 23.0628 7.62109H22.9653L22.9691 7.61721Z" fill="currentcolor"></path>
          <path d="M43.5073 6.20863C43.5073 5.83223 43.5073 5.42867 43.5336 5.05227C44.8953 5.02899 46.5946 5.00183 48.2226 5.00183C49.6069 5.00183 50.3871 5.05227 51.5538 5.40539C53.1818 5.85939 54.521 7.41543 54.521 9.17713C54.521 11.3657 53.1106 12.9489 51.2162 13.7017V13.8258C52.3828 14.3536 52.9905 15.8126 54.2284 18.2495C55.0537 19.8598 55.275 20.1082 55.5639 20.1082L57.0456 20.1819C57.0456 20.5583 57.0456 20.9852 57.0231 21.3654C56.5842 21.3654 55.9278 21.3654 55.4176 21.3887C54.9562 21.3887 54.1797 21.4159 53.8383 21.4159C52.9868 20.2362 51.505 16.7905 50.7285 15.5565C50.1696 14.6756 49.6594 14.373 48.4665 14.373C47.4949 14.373 47.1535 14.4001 47.056 14.4234V20.1043L49.0967 20.2052C49.0967 20.5583 49.0967 20.9852 49.0742 21.3616H46.1332C45.2104 21.3616 44.2876 21.3616 43.4848 21.3848C43.4848 20.9813 43.511 20.5816 43.511 20.2052L45.0678 20.1276C45.1391 20.1276 45.1654 20.0772 45.1654 20.0267L45.1916 6.27459L43.5148 6.19699L43.5073 6.20863ZM47.0785 13.1739C47.1985 13.2244 47.6599 13.2244 48.3652 13.2244C51.4525 13.2244 52.5216 11.2143 52.5216 9.70486C52.5216 7.3417 50.8936 6.15818 48.5115 6.15818C47.7087 6.15818 47.2698 6.20863 47.1273 6.28624L47.0785 13.1739Z" fill="currentcolor"></path>
          <path d="M63.2428 19.5106C61.9073 18.102 61.1045 16.0144 61.1045 13.3524C61.1045 10.1084 62.635 7.5202 64.4844 6.18923C65.9174 5.1842 67.3992 4.78064 69.076 4.78064C70.5577 4.78064 71.942 5.15704 73.1349 6.03789C74.9092 7.31842 76.1246 9.80963 76.1246 12.7005C76.1246 15.3159 75.2994 17.8537 73.5738 19.5882C72.3096 20.8688 70.7078 21.6254 68.2995 21.6254C66.1612 21.6254 64.4582 20.795 63.2428 19.5145M72.2608 18.8083C73.2099 17.6791 74.0352 16.0183 74.0352 13.2283C74.0352 10.9155 73.4762 8.92878 72.2871 7.59781C71.3643 6.51518 70.2201 6.03789 68.7646 6.03789C67.4292 6.03789 66.2625 6.4919 65.336 7.34558C64.1918 8.40105 63.1977 10.3606 63.1977 13.1778C63.1977 15.6651 63.6854 17.4036 64.9721 18.8083C65.9437 19.8909 67.2566 20.3682 68.6408 20.3682C70.1001 20.3682 71.3868 19.8404 72.2608 18.8083Z" fill="currentcolor"></path>
          <path d="M83.4621 19.4835C83.4846 19.6076 83.5334 19.7085 83.6572 19.759C84.1186 20.0849 85.0677 20.3371 85.9192 20.3371C87.0596 20.3371 88.1325 19.9607 88.6914 19.3554C89.2503 18.7501 89.4679 18.1486 89.4679 17.3454C89.4679 15.1568 88.3238 14.7804 85.968 13.6512C83.8298 12.6462 82.2992 11.4898 82.2992 9.3013C82.2992 7.91988 83.0045 6.68592 83.8785 5.9564C84.8013 5.20361 86.1856 4.77288 87.8399 4.77288C88.9352 4.77288 90.1994 4.99794 90.8034 5.32778C90.9234 6.53458 91.0209 7.84227 91.096 9.04908C90.6571 9.09952 90.1957 9.17325 89.7343 9.22369L89.3216 6.86053C89.2729 6.7092 89.2241 6.60831 89.1528 6.55786C88.7627 6.23191 88.1062 6.05341 87.3559 6.05341C86.5044 6.05341 85.6529 6.27848 85.0714 6.80621C84.5612 7.26021 84.1486 7.98585 84.1486 8.89386C84.1486 10.6556 84.9514 11.0552 87.4797 12.2116C89.9106 13.3175 91.321 14.4234 91.321 16.7129C91.321 18.1214 90.8334 19.3515 89.8881 20.2091C88.9165 21.1404 87.5323 21.6177 85.5366 21.6177C84.3474 21.6177 82.7907 21.3654 81.9654 21.0162C81.8453 19.7085 81.7478 18.3271 81.6503 17.0427C82.1117 16.969 82.5993 16.8913 83.0345 16.8409L83.4734 19.4796L83.4621 19.4835Z" fill="currentcolor"></path>
          <path d="M98.6773 20.1392C98.7036 20.1392 98.7523 20.116 98.7523 20.0655V6.25907L96.9517 6.18535C96.9517 5.80895 96.978 5.40539 97.0005 5.02899H105.167C106.187 5.00183 106.746 5.00183 107.283 5.00183C107.38 6.25907 107.452 7.5396 107.5 8.82401C107.11 8.87446 106.675 8.94818 106.214 8.97535L105.823 6.78681C105.775 6.56174 105.655 6.41041 105.265 6.35996C104.634 6.28624 103.006 6.23579 101.423 6.23579H100.695L100.669 12.4211C102.031 12.4211 103.171 12.4211 104.484 12.394C104.897 12.3668 105.021 12.2194 105.043 11.8895L105.163 10.6827H106.405C106.379 11.4627 106.379 12.2659 106.356 13.0963V15.409C105.966 15.4362 105.531 15.4595 105.118 15.4595L105.021 14.1285C104.994 13.7754 104.852 13.6512 104.436 13.6512C103.344 13.6241 102.102 13.6241 100.669 13.6241L100.643 19.6581C100.643 20.0849 100.718 20.1625 102.005 20.1625C103.974 20.1625 105.358 20.0888 105.771 19.9879C105.989 19.9375 106.112 19.7628 106.21 19.4835L106.986 17.194C107.425 17.2716 107.887 17.3686 108.251 17.4462C107.984 18.7539 107.692 20.0849 107.399 21.3926C106.281 21.3926 103.123 21.3693 99.8402 21.3693C98.8198 21.3693 97.8483 21.3926 96.9742 21.3926V20.213L98.6736 20.1354L98.6773 20.1392ZM105.921 1.35814C104.683 2.06049 103.051 3.04223 101.836 3.74458C101.641 3.46907 101.423 3.14312 101.277 2.89089C102.395 2.03721 103.877 0.904131 105.043 0C105.31 0.353116 105.677 0.904131 105.917 1.35814" fill="currentcolor"></path>
          <path d="M115.423 20.1392C115.445 20.1392 115.494 20.116 115.494 20.0655V6.25907L113.697 6.18535C113.697 5.80895 113.724 5.40539 113.746 5.02899H121.913C122.933 5.00183 123.492 5.00183 124.028 5.00183C124.126 6.25907 124.197 7.5396 124.246 8.82401C123.856 8.87446 123.421 8.94818 122.959 8.97535L122.569 6.78681C122.52 6.56174 122.4 6.41041 122.01 6.35996C121.376 6.28624 119.748 6.23579 118.169 6.23579H117.441L117.415 12.4211C118.777 12.4211 119.917 12.4211 121.23 12.3979C121.643 12.3707 121.766 12.2232 121.789 11.8934L121.909 10.6866H123.147C123.121 11.4666 123.121 12.2698 123.098 13.1002V15.4129C122.708 15.4401 122.273 15.4634 121.856 15.4634L121.759 14.1324C121.733 13.7793 121.59 13.6551 121.174 13.6551C120.082 13.6279 118.84 13.6279 117.407 13.6279L117.381 19.6619C117.381 20.0888 117.452 20.1664 118.743 20.1664C120.712 20.1664 122.097 20.0927 122.509 19.9918C122.727 19.9413 122.851 19.7667 122.948 19.4873L123.725 17.1979C124.163 17.2755 124.625 17.3725 124.989 17.4501C124.722 18.7578 124.43 20.0888 124.137 21.3965C123.019 21.3965 119.861 21.3693 116.578 21.3693C115.558 21.3693 114.586 21.3965 113.709 21.3965V20.213L115.412 20.1392H115.423Z" fill="currentcolor"></path>
        <path d="M46.7672 32.2073V33.9379H46.3283V28.7692H47.6862C48.0764 28.8236 48.4065 28.9904 48.6766 29.2698C49.0029 29.6074 49.1642 30.011 49.1642 30.4805C49.1642 30.95 49.0029 31.3652 48.6803 31.6989C48.3577 32.0365 47.9638 32.2034 47.5062 32.2034H46.7709L46.7672 32.2073ZM46.7672 29.2232V31.7494H47.5024C47.8363 31.7494 48.1251 31.6252 48.3652 31.3807C48.6053 31.1324 48.7253 30.8336 48.7253 30.4844C48.7253 30.1351 48.6053 29.8402 48.3652 29.5919C48.1251 29.3474 47.84 29.2232 47.5024 29.2232H46.7672Z" fill="currentcolor"></path>
        <path d="M56.9519 33.9418L56.3029 32.0947H54.7461L54.0971 33.9418H53.632L55.5264 28.5674L57.4095 33.9418H56.9481H56.9519ZM56.1491 31.6485L55.5301 29.8829L54.9112 31.6485H56.1491Z" fill="currentcolor"></path>
        <path d="M63.5466 32.2073H62.7701V33.9379H62.3312V28.7692H63.6892C64.0793 28.8236 64.4094 28.9904 64.6795 29.2698C65.0059 29.6074 65.1672 30.011 65.1672 30.4805C65.1672 30.95 65.0059 31.3613 64.6795 31.695C64.4544 31.9279 64.2368 32.0714 64.0193 32.1258L65.1521 33.934H64.6195L63.5429 32.2034L63.5466 32.2073ZM62.7701 29.2232V31.7494H63.5053C63.8392 31.7494 64.1281 31.6252 64.3681 31.3807C64.6082 31.1324 64.7283 30.8336 64.7283 30.4844C64.7283 30.1351 64.6082 29.8402 64.3681 29.5919C64.1281 29.3474 63.843 29.2232 63.5053 29.2232H62.7701Z" fill="currentcolor"></path>
        <path d="M70.6515 28.7731H70.2126V33.9418H70.6515V28.7731Z" fill="currentcolor"></path>
        <path d="M77.22 31.1673C76.8674 31.0431 76.5823 30.8724 76.3722 30.6551C76.1584 30.4378 76.0534 30.1662 76.0534 29.848C76.0534 29.5298 76.1621 29.2698 76.376 29.0486C76.5898 28.8236 76.8524 28.711 77.16 28.711C77.4676 28.711 77.7227 28.8236 77.944 29.0447C78.064 29.165 78.1541 29.3241 78.2141 29.5259L77.8202 29.685C77.7677 29.5414 77.7039 29.4328 77.6326 29.3552C77.5051 29.2194 77.3475 29.1534 77.1637 29.1534C76.9799 29.1534 76.8186 29.2194 76.6911 29.3552C76.5598 29.491 76.496 29.654 76.496 29.8441C76.496 30.0342 76.5598 30.2011 76.6873 30.3369C76.8186 30.4688 76.9987 30.5891 77.2275 30.6978C77.6251 30.8297 77.959 31.0393 78.2328 31.3225C78.5292 31.6291 78.6755 31.9938 78.6755 32.4246C78.6755 32.8553 78.5292 33.2278 78.2328 33.5344C77.9402 33.8409 77.5839 33.9922 77.1637 33.9922C76.7436 33.9922 76.3872 33.8409 76.0909 33.5305C75.8545 33.286 75.7082 32.9756 75.6557 32.6069L76.0721 32.4517C76.1059 32.7738 76.2147 33.026 76.3947 33.2123C76.6048 33.4296 76.8599 33.5421 77.16 33.5421C77.4601 33.5421 77.7152 33.4335 77.9252 33.2123C78.1353 32.995 78.2441 32.7311 78.2441 32.4207C78.2441 32.1102 78.1391 31.8503 77.9252 31.633C77.7339 31.4351 77.4976 31.276 77.22 31.1596" fill="currentcolor"></path>
        </svg>
      </router-link>
      <div class="Nav-module__right___X60Qa">
        <nav aria-label="primary" data-orientation="horizontal" dir="ltr">
          <div style="position:relative">
            <ul data-orientation="horizontal" class="Nav-module__nav-menu-list___J1xZQ" dir="ltr">
              <li>
                <button id="radix-_R_3p54l_-trigger-radix-_R_2rp54l_" :data-state="hoveredMenu === 'commitments' ? 'open' : 'closed'" :aria-expanded="hoveredMenu === 'commitments'" aria-controls="radix-_R_3p54l_-content-radix-_R_2rp54l_" class="Nav-module__link___I1Rij" data-radix-collection-item="" @click="toggleHoveredMenu('commitments')">TAAHHÜTLERİMİZ</button>
              </li>
              <li>
                <router-link data-radix-collection-item="" class="Nav-module__link___I1Rij" to="/pharmacy-locator">Partner Eczaneler</router-link>
              </li>
            </ul>
            <div v-show="hoveredMenu === 'commitments'" id="radix-_R_3p54l_-content-radix-_R_2rp54l_" aria-labelledby="radix-_R_3p54l_-trigger-radix-_R_2rp54l_" data-orientation="horizontal" class="Nav-module__nav-menu-content___Kunf1" :data-state="hoveredMenu === 'commitments'" dir="ltr">
              <ul class="Nav-module__cards___k8KO8">
                <li v-for="item in megaMenuData.commitments" :key="item.slug">
                  <router-link :to="'/' + item.slug" class="CardNavItem-module__root___oOCBj">
                    <img :src="item.image" width="2000" height="2000" loading="lazy">{{ item.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="Nav-module__overlay___VXo0U"></div>
        </nav>
        <ul class="Nav-module__menu___RCGJH">
          <li class="Nav-module__account___J5MN1">
            <router-link title="Hesabım" to="/account/login">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="13" r="6" stroke="currentcolor" stroke-width="1.5" stroke-linejoin="round"></circle>
                <path d="M25 24C22.9477 20.9639 19.6803 19 16 19C12.3197 19 9.05228 20.9639 7 24" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </router-link>
          </li>
          <li class="Nav-module__cart___U9yFl">
            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_2lp54l_" data-state="closed" title="Sepet">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 10.0369C8 9.48458 8.44772 9.03687 9 9.03687H23C23.5523 9.03687 24 9.48458 24 10.0369V22.0493C24 23.1538 23.1046 24.0493 22 24.0493H10C8.89543 24.0493 8 23.1538 8 22.0493V10.0369Z" stroke="currentcolor" stroke-width="1.5"></path>
                <path d="M12.4445 8.03686C12.4445 8.58915 12.8922 9.03687 13.4445 9.03687H18.5556C19.1079 9.03687 19.5556 8.58915 19.5556 8.03687V6.28377C19.5556 5.73148 19.1079 5.28377 18.5556 5.28377H13.4445C12.8922 5.28377 12.4445 5.73148 12.4445 6.28377V8.03686Z" stroke="currentcolor" stroke-width="1.5"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.AnnouncementBar-module {
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 16px;
  font-size: 13px;
  border-bottom: 1px solid #eee;
  z-index: 100;
  position: relative;
}

.ProductNavCard-module__button-placeholder {
  aspect-ratio: 1 / 1;
  background: #f7f9fb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 4px 8px;
}

.language-switcher:hover {
  background-color: #f5f5f5;
  border-radius: 4px;
}

.flag {
  font-size: 14px;
}

.lang-text {
  font-weight: 500;
  color: #333;
}

/* Make nav root a containing block for fixed dropdowns */
.Nav-module__root___hd7MQ {
  transform: translate(0, 0);
}


/* Nav mega menu */
.Nav-module__nav-menu-content___Kunf1 {
  position: fixed;
  top: 100%;
  left: 0;
  width: 100vw;
  z-index: 200;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.Nav-module__collection-cards___t79nO,
.Nav-module__cards___k8KO8 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  padding-inline: 1.25rem;
}

.Nav-module__collection-cards___t79nO {
  align-items: baseline;
  justify-content: center;
  padding-block: 2rem;
}

.Nav-module__collection-cards___t79nO + .Nav-module__cards___k8KO8 {
  padding-block-start: 0;
}

.Nav-module__cards___k8KO8 {
  column-gap: 0.75rem;
  padding-block: 1.25rem;
}

/* Product nav card (category) */
.ProductNavCard-module__root___3qpoM {
  display: grid;
  row-gap: 1rem;
  place-content: end center;
  height: 100%;
  padding-inline: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.285;
  text-align: center;
  text-wrap: balance;
  color: inherit;
  text-decoration: none;
}

.ProductNavCard-module__root___3qpoM img {
  width: 5rem;
  aspect-ratio: 0.8;
  margin-inline: auto;
  object-fit: cover;
}

.ProductNavCard-module__button___0d8V6 {
  display: block;
  width: 3.5rem;
  aspect-ratio: 1;
  margin-inline: auto;
  background-color: #EBF3FC;
  border-radius: 50%;
  transition: background-color 0.15s ease-out;
  position: relative;
}

.ProductNavCard-module__button___0d8V6::after {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  content: '';
  background-color: #34AAFF;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 33L25 28L30 23' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 33L25 28L30 23' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-size: 100%;
  mask-size: 100%;
  transform: scaleX(-1);
  transition: background-color 0.15s ease-out;
}

.ProductNavCard-module__root___3qpoM:hover .ProductNavCard-module__button___0d8V6 {
  background-color: #34AAFF;
}

.ProductNavCard-module__root___3qpoM:hover .ProductNavCard-module__button___0d8V6::after {
  background-color: #fff;
}

/* Card Nav Item (featured products) */
.CardNavItem-module__root___oOCBj {
  position: relative;
  display: grid;
  place-content: end start;
  aspect-ratio: 1;
  padding: 1rem 1.25rem;
  overflow: clip;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.285;
  color: #fff;
  text-wrap: balance;
  border-radius: 0.25rem;
  text-decoration: none;
}

.CardNavItem-module__root___oOCBj::before {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 50%;
  pointer-events: none;
  content: '';
  background: linear-gradient(0deg, #00000052, transparent);
}

.CardNavItem-module__root___oOCBj img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  transition: transform 0.5s ease-out;
}

.CardNavItem-module__root___oOCBj:hover img {
  transform: scale(1.05);
}
</style>

