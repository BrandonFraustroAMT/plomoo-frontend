<template>
  <SliceSimulator #default="{ slices }">
    <SliceZone :slices="slices" :components="components" />
  </SliceSimulator>
</template>

<script setup lang="ts">
import { SliceSimulator } from "@slicemachine/adapter-nuxt/simulator";
import { components } from "~/slices";
</script>



<!-- 
<script>
import { PrismicSliceZone } from '@prismicio/vue';
import TextSlice from '../components/slices/TextSlice.vue';
// Importa otros slices según sea necesario

export default {
  components: {
    PrismicSliceZone,
    TextSlice,
    // Registra otros slices
  },
  async asyncData({ $prismic }) {
    const document = await $prismic.getByUID('your-custom-type', 'your-uid');
    return { document };
  }
}
</script> -->
