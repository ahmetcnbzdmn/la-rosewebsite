<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import CartDrawer from '../components/CartDrawer.vue'
</script>

<template>
  <div class="layout-wrapper">
    <Navbar />
    <CartDrawer />

    <main class="main-content">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}
</style>
