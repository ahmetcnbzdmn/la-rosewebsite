<script setup>
import { ref, computed } from 'vue'
import pharmaciesData from '../assets/pharmacies_data.json'
import { useSEO } from '../composables/useSEO.js'
useSEO({ title: 'Eczanelerimiz', description: 'La Rosée ürünleri satan Türkiye\'deki 159 eczaneyi şehir ve ilçeye göre filtreleyerek bulun. İstanbul, Ankara, İzmir ve daha fazlası.' })

const selectedCity = ref('TÜMÜ')
const searchQuery = ref('')

const cities = computed(() => {
  const unique = [...new Set(pharmaciesData.map(p => p.city))].sort()
  return ['TÜMÜ', ...unique]
})

const filtered = computed(() => {
  return pharmaciesData.filter(p => {
    const cityMatch = selectedCity.value === 'TÜMÜ' || p.city === selectedCity.value
    const q = searchQuery.value.toLowerCase()
    const searchMatch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.district.toLowerCase().includes(q) ||
      p.address.toLowerCase().includes(q)
    return cityMatch && searchMatch
  })
})
</script>

<template>
  <div class="pharmacy-page">
    <div class="pharmacy-header">
      <h1 class="pharmacy-title">Eczanelerimiz</h1>
      <p class="pharmacy-subtitle">La Rosée ürünleri satan <strong>{{ pharmaciesData.length }}</strong> eczaneden size en yakın olanı bulun.</p>
    </div>

    <div class="pharmacy-filters">
      <div class="search-wrap">
        <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5"/>
          <path d="M20 20l-3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Eczane adı veya adres ara..."
        />
      </div>

      <div class="city-filters">
        <button
          v-for="city in cities"
          :key="city"
          class="city-btn"
          :class="{ active: selectedCity === city }"
          @click="selectedCity = city"
        >
          {{ city }}
          <span v-if="city !== 'TÜMÜ'" class="city-count">
            {{ pharmaciesData.filter(p => p.city === city).length }}
          </span>
        </button>
      </div>
    </div>

    <div class="pharmacy-results-bar">
      <span>{{ filtered.length }} eczane bulundu</span>
      <button v-if="selectedCity !== 'TÜMÜ' || searchQuery" class="clear-btn" @click="selectedCity = 'TÜMÜ'; searchQuery = ''">
        Filtreyi Temizle ✕
      </button>
    </div>

    <div class="pharmacy-grid">
      <div v-for="(pharmacy, i) in filtered" :key="i" class="pharmacy-card">
        <div class="card-header">
          <div class="pharmacy-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <div>
            <h3 class="card-name">{{ pharmacy.name }}</h3>
            <span class="card-city">{{ pharmacy.city }} / {{ pharmacy.district }}</span>
          </div>
        </div>
        <div class="card-body">
          <p class="card-address">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;margin-top:2px">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            {{ pharmacy.address }}
          </p>
          <p class="card-pharmacist">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="flex-shrink:0">
              <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.5"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            {{ pharmacy.pharmacist }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="filtered.length === 0" class="no-results">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#ccc" stroke-width="1.5"/>
        <path d="M20 20l-3-3" stroke="#ccc" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <p>Arama kriterlerinize uygun eczane bulunamadı.</p>
      <button class="clear-btn" @click="selectedCity = 'TÜMÜ'; searchQuery = ''">Tümünü Göster</button>
    </div>
  </div>
</template>

<style scoped>
.pharmacy-page {
  padding: 120px 4% 80px;
  max-width: 1400px;
  margin: 0 auto;
}

.pharmacy-header {
  text-align: center;
  margin-bottom: 48px;
}

.pharmacy-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: #2f2f40;
  margin-bottom: 12px;
}

.pharmacy-subtitle {
  font-size: 1.05rem;
  color: #888;
  font-weight: 400;
}
.pharmacy-subtitle strong { color: #646892; font-weight: 700; }

/* Filters */
.pharmacy-filters {
  background: #f9f9fb;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.search-wrap {
  position: relative;
  max-width: 440px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}

.search-input {
  width: 100%;
  padding: 11px 16px 11px 42px;
  border: 1.5px solid #e8e8ef;
  border-radius: 10px;
  font-size: 14px;
  background: white;
  color: #3f3f3f;
  outline: none;
  transition: border-color 0.2s;
}
.search-input:focus { border-color: #646892; }
.search-input::placeholder { color: #bbb; }

.city-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.city-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border: 1.5px solid #e0e0eb;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #666;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
}
.city-btn:hover { border-color: #646892; color: #646892; }
.city-btn.active {
  background: #646892;
  border-color: #646892;
  color: white;
}

.city-count {
  background: rgba(255,255,255,0.25);
  border-radius: 10px;
  padding: 1px 6px;
  font-size: 10px;
}
.city-btn:not(.active) .city-count {
  background: #eee;
  color: #999;
}

/* Results bar */
.pharmacy-results-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 13px;
  color: #999;
}

.clear-btn {
  font-size: 12px;
  color: #646892;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 0;
}
.clear-btn:hover { text-decoration: underline; }

/* Grid */
.pharmacy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.pharmacy-card {
  border: 1px solid #f0f0f5;
  border-radius: 12px;
  background: white;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
}
.pharmacy-card:hover {
  box-shadow: 0 8px 28px rgba(100,104,146,0.12);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 18px 14px;
  border-bottom: 1px solid #f5f5f8;
  background: #fafafa;
}

.pharmacy-icon {
  width: 40px;
  height: 40px;
  background: #eeeef6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646892;
  flex-shrink: 0;
}

.card-name {
  font-size: 14px;
  font-weight: 700;
  color: #2f2f40;
  margin-bottom: 4px;
  line-height: 1.3;
}

.card-city {
  font-size: 11px;
  font-weight: 600;
  color: #646892;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-body {
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-address, .card-pharmacist {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.card-pharmacist { color: #888; }

/* No results */
.no-results {
  text-align: center;
  padding: 80px 20px;
  color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.no-results p { font-size: 15px; }

/* Mobile */
@media (max-width: 768px) {
  .pharmacy-page { padding: 90px 16px 60px; }
  .pharmacy-grid { grid-template-columns: 1fr; }
  .pharmacy-filters { padding: 16px; }
  .search-wrap { max-width: 100%; }
  .pharmacy-title { font-size: 1.8rem; }
}
</style>
