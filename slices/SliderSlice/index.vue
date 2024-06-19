<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, onMounted, onUnmounted } from 'vue';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SliderSliceSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// Reference for the image slider container
const sliderContainer = ref<HTMLDivElement | null>(null);

// Function to handle scroll
const handleScroll = () => {
  if (sliderContainer.value) {
    const scrollPosition = window.scrollY;
    sliderContainer.value.scrollLeft = scrollPosition / 1; 
  }
};

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="slider-slice__container">
      <div class="slider-slice__content">
        <div class="slider-slice__data">
          <div ref="sliderContainer" class="slider-slice__slider">
            <template v-for="item in slice.primary.groupimages">
              <div class="slider-slice__images">
                <PrismicImage :field="item.imagen" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .slider-slice__container{
    color: var(--white);
    width: 100%;
  }
  .slider-slice__content{
    margin-top: 0;
    overflow: hidden;
    width: 100%;
    margin-top: 1rem;
  }
  .slider-slice__data{
    width: 100%;
    display: flex;
  }
  .slider-slice__slider{
    display: flex;
    gap: 1rem;
    scroll-snap-type: x mandatory;
    overflow-x: hidden;
  }
  .slider-slice__images{
    border: 12px solid var(--backgrounLigth);
    border-radius: .5rem;
    flex-shrink: 0;
    width: 80%;
  }

  @media (min-width: 640px) {
    .slider-slice__images{
      width: 50%;
    }
  }
  @media (min-width: 768px) {
    .slider-slice__container{
    }
    .slider-slice__images{
      width: 33.333333%;
    }
  }
</style>