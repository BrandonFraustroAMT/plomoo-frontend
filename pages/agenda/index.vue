<template>
  <div>
    <!-- Principio del widget integrado de Calendly -->
    <div ref="calendly" class="calendly-inline-widget" data-url="https://calendly.com/darias-plomosmedia/30min?primary_color=7f32d7" style="min-width:320px;height:700px;"></div>
    <!-- Final del widget integrado de Calendly -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Index',
  setup() {
    const calendlyRef = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      if (process.client) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }
    });

    return {
      calendlyRef,
    };
  },
});
</script>
  