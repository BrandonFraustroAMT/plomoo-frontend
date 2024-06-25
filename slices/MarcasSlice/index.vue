<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.MarcasSliceSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="marcas-slice__container">
      <div class="marcas-slice__data">
        <h2 class="marcas-slice__tittle"><PrismicRichText :field="slice.primary.labeldescripcion" /></h2>
        <div class="marcas-slice__container-images">
          <template v-for="item in slice.primary.grouplogos">
              <div class="marcas-slice__content-images">
                <PrismicImage :field="item.imagenlogo" />
              </div>
            </template>
        </div>
      </div>
    </div>
    
  </section>
</template>

<style>
  .marcas-slice__container{
    color: var(--white);
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: var(--backgrounLigth);
    width: 100%;
  }
  .marcas-slice__data{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
  .marcas-slice__tittle{
    text-wrap: balance;
    letter-spacing: -.025em;
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 1.272;
    scroll-margin-top: 120px;
  }
  .marcas-slice__container-images{
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
  .marcas-slice__content-images{
    width: 8rem;
  }

  @media (min-width: 640px) {
    .marcas-slice__data{
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .marcas-slice__container{
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
    .marcas-slice__data{
      max-width: 768px;
    }
  }

  @media (min-width: 1024px) {
    .marcas-slice__data{
      max-width: 1024px;
      padding-right: 2rem;
      padding-left: 2rem;
    }
    .marcas-slice__container-images{
      gap: 6rem;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }
  @media (min-width: 1280px) {
    .marcas-slice__data{
      max-width: 1280px;
    }
  }
</style>
