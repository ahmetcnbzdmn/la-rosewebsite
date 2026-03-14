<template>
  <div class="product-placeholder">
    <h1>Ürün Detayları Yakında</h1>
    <p>Seçilen ürün: <strong>{{ $route.params.id }}</strong></p>
    <p>Bu sayfa yapım aşamasındadır.</p>
    <router-link to="/en-ww/collections/les-produits" class="back-link">← Tüm Ürünlere Dön</router-link>
  </div>
</template>

<style scoped>
.product-placeholder {
  padding: 100px 20px;
  text-align: center;
  font-family: inherit;
}
.product-placeholder h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}
.product-placeholder p {
  margin-bottom: 15px;
  font-size: 1.1rem;
}
.back-link {
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}
</style>
