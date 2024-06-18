<template>
  <div>
    <!-- Comprueba si el documento está cargado -->
    <SliceZone v-if="document && document.data" :slices="document.data.slices" :components="components" />
    <div v-else class="loading-overlay">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { SliceZone, usePrismic } from '@prismicio/vue';

// Importa tus slices aquí
import NavegacionSlice from '../slices/NavegacionSlice/index.vue';
import HeroSection from '../slices/HeroSection/index.vue';
import MarcasSlice from '../slices/MarcasSlice/index.vue';
import SliderSlice from '../slices/SliderSlice/index.vue';
import PrismicSlice from '../slices/PrismicCmsSlice/index.vue';
import SitesSlice from '../slices/SitesSlice/index.vue';
import PreciosSlice from '../slices/PreciosSlice/index.vue';
import CtaSlice from '../slices/CtaSlice/index.vue';
import SeoSlice from '../slices/SeoSlice/index.vue';

// Define los componentes de los slices
const components = {
  navegacion_slice: NavegacionSlice,
  hero_section: HeroSection,
  marcas_slice: MarcasSlice,
  slider_slice: SliderSlice,
  prismic_cms_slice: PrismicSlice,
  sites_slice: SitesSlice,
  precios_slice: PreciosSlice,
  cta_slice: CtaSlice,
  seo_slice: SeoSlice,
};

const document = ref(null);
const { client } = usePrismic();

// Función para obtener datos de Prismic
const fetchData = async () => {
  try {
      const response = await client.getByUID('navegacion', 'plomoo');
      console.log(response);
      document.value = response;
  } catch (error) {
    console.log('Error fetching document:', error);
  }
};

// Llama a fetchData cuando el componente se monte
onMounted(() => {
  fetchData();
});
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backgrounBlack);
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #007bff;
  border-top-color: transparent;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>

  