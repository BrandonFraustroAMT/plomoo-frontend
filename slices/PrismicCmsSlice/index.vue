<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PrismicCmsSliceSlice>([
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
    <div class="prismic-slice__container">
      <div class="prismic-slice__content">
        <header class="prismic-slice__content-header">
          <h2 class="prismic-slice__title"><PrismicRichText :field="slice.primary.titulo" /></h2>
          <div class="prismic-slice__subtitle">
            <p class="prismic-slice__subtitle-content">{{ slice.primary.subtitulo }}</p>
          </div>
          <div class="prismic-slice__link">
            <PrismicLink :field="slice.primary.linklabel" class="prismic-slice__link-text">{{ slice.primary.label }}</PrismicLink>
          </div>
        </header>
        <div class="prismic-slice__list-container">
          <template v-for="item in slice.primary.groupdescripcion" class="prismic-slice__list">
            <div class="prismic-slice__list-content">
              <div class="prismic-slice__list-box">
                <div class="prismic-slice__title-image">
                  <!-- imagen -->
                  <PrismicImage :field="item.icono" class="prismic-slice__image"/>
                  <h3 class="prismic-slice__description">{{ item.descripcion }}</h3>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="prismic-slice__image-container">
          <div class="prismic-slice__image-space"></div>
          <div class="prismic-slice__box-image">
            <!-- imagen -->
            <PrismicImage :field="slice.primary.imagen_muestra" class="prismic-slice__image-content"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .prismic-slice__container{
    color: var(--white);
    padding: 3rem 0;
    width: 100%;
  }
  .prismic-slice__content{
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .prismic-slice__content-header{
    text-align: center;
    margin: 0 auto;
  }
  .prismic-slice__title{
    text-wrap: balance;
    letter-spacing: -.025em;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.125;
    scroll-margin-top: 120px;
    max-width: 22em;
    margin: 0 auto;
  }
  .prismic-slice__subtitle{
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 36rem;
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
  .prismic-slice__subtitle-content{
    margin: 1.5rem 0;
    color: var(--textGray);
  }
  .prismic-slice__link{
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .prismic-slice__link-text{
    text-underline-offset: 8px;
    text-decoration-line: underline;
    line-height: 1.25rem;
    font-weight: 700;
    font-size: .875rem;
    padding: .75rem .625rem;
    border-color: var(--white);
    border-radius: .5rem;
    white-space: nowrap;
    display: inline-block;
    margin-top: 2.5rem;
    margin-left: -.625rem;
    margin-right: -.625rem;
    color: var(--white)
  }
  .prismic-slice__list-container{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .prismic-slice__list{
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    margin: 0 -.5rem;
  }
  .prismic-slice__list-content{
    padding: 0 .5rem;
    flex-grow: 1;
    width: 100%;
    margin-bottom: 10px
  }
  .prismic-slice__list-box{
    padding: 1.5rem;
    border: 2px solid var(--backgrounLigth);
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .prismic-slice__title-image{
    gap: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .prismic-slice__image{
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
  }
  .prismic-slice__description{
    text-wrap: balance;
    letter-spacing: -.025em;
    font-weight: 500;
    font: 1.125rem;
    line-height: 1.333;
    scroll-margin-top: 120px;
  }
  .prismic-slice__image-container{
    padding: 1px;
    margin-top: 3rem;
    position: relative;
  }
  .prismic-slice__image-space{
    border: 2px solid var(--backgrounLigth);
    border-radius: 1rem;
    z-index: 10;
    inset: 0;
    position: absolute;
    pointer-events: none;
  }
  .prismic-slice__box-image{
    border-radius: 1rem;
    overflow: hidden;
  }
  .prismic-slice__image-content{
    width: 100%;
  }

  @media (min-width: 640px) {
    .prismic-slice__content{
      max-width: 640px;
    }
    
  }
  @media (min-width: 768px) {
    .prismic-slice__container{
      padding: 5rem 0;
    }
    .prismic-slice__content{
      max-width: 768px;
    }
    .prismic-slice__list-content{
      width: 50%;
    }
    .prismic-slice__list-box{
      padding: 1.5rem;
    }
    .prismic-slice__title-image{
      justify-content: center;
    }
    .prismic-slice__list-container{
      flex-direction: row;
    }
    
  }
  @media (min-width: 1024px) {
    .prismic-slice__content{
      max-width: 1024px;
      padding: 0 2rem;
    }
    .prismic-slice__title{
      font-size: 2.5rem;
      line-height: 1.1;
    }
    .prismic-slice__subtitle{
      font-size: 1.125rem;
      line-height: 1.555;
    }
    .prismic-slice__list-content{
      width: 33.333333%;
    }
  }
  @media (min-width: 1280px) {
    .prismic-slice__content{
      max-width: 1280px;
    }
    
  }


</style>