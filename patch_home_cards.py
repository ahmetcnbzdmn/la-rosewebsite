import re

with open('src/views/Home.vue', 'r', encoding='utf-8') as f:
    text = f.read()

# For "Yeni Gelenler" (New Arrivals), replace the loaders with the recentAdditions loop
new_arrivals_products = """
<div class="SpotlightCollection-module__products___7-AGs">
  <div v-for="product in recentAdditions" :key="product.id" class="ProductCard-module__root___j9mxB">
    <a :href="'/en-ww/products/' + product.id" class="ProductCard-module__link___O--LE">
      <div class="ProductCard-module__image-container___PQV1f">
        <img :src="product.image" :alt="product.name" class="ProductCard-module__image___au1e0" loading="lazy">
        <div v-if="product.tags.length" class="ProductCard-module__tags___gaiv9">
          <span v-for="tag in product.tags" :key="tag" class="Badge-module__root___xpABX">{{ tag === 'NOUVEAUTÉ' ? 'YENI' : (tag === 'RECHARGEABLE' ? 'YENIDEN DOLDURULABİLİR' : (tag === 'BEST-SELLER' ? 'ÇOK SATAN' : tag)) }}</span>
        </div>
      </div>
      <div class="ProductCard-module__info___V7V8B">
        <h3 class="ProductCard-module__title___Uin1P">{{ product.name }}</h3>
        <p class="ProductCard-module__desc___pSWVk">{{ product.desc }}</p>
        <div class="ProductCard-module__price-container___a448c">
          <span class="ProductCard-module__price___BuAB8">{{ product.price }}</span>
          <button class="Button-module__root___Djkf0 ProductCard-module__add-btn___0-UPm" data-variant="flat" data-size="sm" @click.prevent="">Ekle</button>
        </div>
      </div>
    </a>
  </div>
</div>
"""

# Replace the first SpotlightCollection-module__products___7-AGs (Yeni Gelenler)
text = re.sub(
    r'<div class="SpotlightCollection-module__products___7-AGs">.*?</div>\s*<div class="SpotlightCollection-module__collection___WTOdw">',
    new_arrivals_products + '<div class="SpotlightCollection-module__collection___WTOdw">',
    text,
    count=1,
    flags=re.DOTALL
)

# For "Çok Satanlar" (Bestsellers), replace the loaders with the bestsellers loop
bestsellers_products = """
<div class="SpotlightCollection-module__products___7-AGs">
  <div v-for="product in bestsellers" :key="product.id" class="ProductCard-module__root___j9mxB">
    <a :href="'/en-ww/products/' + product.id" class="ProductCard-module__link___O--LE">
      <div class="ProductCard-module__image-container___PQV1f">
        <img :src="product.image" :alt="product.name" class="ProductCard-module__image___au1e0" loading="lazy">
        <div v-if="product.tags.length" class="ProductCard-module__tags___gaiv9">
          <span v-for="tag in product.tags" :key="tag" class="Badge-module__root___xpABX">{{ tag === 'NOUVEAUTÉ' ? 'YENI' : (tag === 'RECHARGEABLE' ? 'YENIDEN DOLDURULABİLİR' : (tag === 'BEST-SELLER' ? 'ÇOK SATAN' : tag)) }}</span>
        </div>
      </div>
      <div class="ProductCard-module__info___V7V8B">
        <h3 class="ProductCard-module__title___Uin1P">{{ product.name }}</h3>
        <p class="ProductCard-module__desc___pSWVk">{{ product.desc }}</p>
        <div class="ProductCard-module__price-container___a448c">
          <span class="ProductCard-module__price___BuAB8">{{ product.price }}</span>
          <button class="Button-module__root___Djkf0 ProductCard-module__add-btn___0-UPm" data-variant="flat" data-size="sm" @click.prevent="">Ekle</button>
        </div>
      </div>
    </a>
  </div>
</div>
"""

# Replace the second SpotlightCollection-module__products___7-AGs (Çok Satanlar)
text = re.sub(
    r'<div class="SpotlightCollection-module__products___7-AGs">.*?</div>\s*<div class="SpotlightCollection-module__collection___WTOdw">',
    bestsellers_products + '<div class="SpotlightCollection-module__collection___WTOdw">',
    text,
    count=1,
    flags=re.DOTALL
)

# Now, add styles for these custom ProductCard classes
custom_styles = """
<style scoped>
/* Custom ProductCard Styles */
.ProductCard-module__root___j9mxB {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ProductCard-module__root___j9mxB:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.ProductCard-module__link___O--LE {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.ProductCard-module__image-container___PQV1f {
  position: relative;
  aspect-ratio: 1;
  background: #f5f5f5;
  overflow: hidden;
}
.ProductCard-module__image___au1e0 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ProductCard-module__tags___gaiv9 {
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.Badge-module__root___xpABX {
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.ProductCard-module__info___V7V8B {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.ProductCard-module__title___Uin1P {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  line-height: 1.2;
}
.ProductCard-module__desc___pSWVk {
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 16px 0;
  flex-grow: 1;
}
.ProductCard-module__price-container___a448c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}
.ProductCard-module__price___BuAB8 {
  font-weight: 600;
  font-size: 1.1rem;
}
.ProductCard-module__add-btn___0-UPm {
  background-color: #f1f5ff;
  color: var(--color-primary, #3b82f6);
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
}
</style>
"""

text = text.replace('</template>', '</template>\n' + custom_styles)

with open('src/views/Home.vue', 'w', encoding='utf-8') as f:
    f.write(text)

