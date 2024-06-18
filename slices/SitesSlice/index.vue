<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref } from "vue";

const currentIndex = ref(0);
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SitesSliceSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
const setCurrentIndex = (index: number) => {
    currentIndex.value = index;
  };
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="sites-slice__container">
      <div class="sites-slice__container-box">
        <header>
          <PrismicRichText :field="slice.primary.titulo" class="sites-slice__title"/>
        </header>
        <div class="sites-slice__slider-box">
          <div class="sites-slice__image-box">
            <div class="sites-slice__image-content">
              <div class="sites-slice__image-space"></div>
              <!-- div contenedor para las imagenes -->
              <template v-for="(item, index) in slice.primary.groupsites" :key="index" class="sites-slice__images-container" >
                <!-- Estos div se van a repetir -->
                <div class="sites-slice__images-boxes" v-show="currentIndex === index">
                  <div class="sites-slice__images-content">
                    <!-- imagen -->
                    <PrismicImage :field="item.imagen_sites" class="sites-slice__image-data"/>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="sites-slice__text-box">
            <template v-for="(item, index) in slice.primary.groupsites" :key="index"class="sites-slice__text-content">
              <!-- Este botón se repite -->
              <button class="sites-slice__button" @click="setCurrentIndex(index)">
                <div>
                  <div class="sites-slice__button-container">
                    <div>
                      <div class="sites-slice__button-heading">
                        <h3 class="sites-slice__heading-content">{{ item.subtitulo }}</h3>
                      </div>
                    </div>
                    <div>
                      <div class="sites-slice__button-text" v-if="currentIndex === index">
                        <p class="sites-slice__button-description">{{ item.descripcion }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .sites-slice__container{
    color: var(--white);
    padding: 3rem 0;
    width: 100%;
  }
  .sites-slice__container-box{
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .sites-slice__title{
    text-wrap: balance;
    letter-spacing: -.025em;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.125;
    scroll-margin-top: 120px;
    max-width: 22em;
  }
  .sites-slice__slider-box{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 2rem;
  }
  .sites-slice__image-box{
    position: relative;
  }
  .sites-slice__image-content{
    padding: 1px;
    position: relative;
    margin: -5px;
  }
  .sites-slice__image-space{
    
  }
  .sites-slice__images-container{
    border-radius: 1rem;
    overflow: hidden;
  }
  
  .sites-slice__images-boxes{
    overflow: hidden;
    position: relative;
    border: 2px solid var(--boxGray);
    border-radius: 1rem;
    z-index: 10;
    inset: 0;
    pointer-events: none;
    margin-bottom: 5px
  }
  .sites-slice__image-data{
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin: -3px 0;
  }
  .sites-slice__text-content{
    gap: 1rem;
    display: flex;
    flex-direction: column
  }
  .sites-slice__button {
    text-align: left;
    /* outline: 2px solid transparent; */
    /* outline-offset: 2px; */
    border: 2px solid var(--boxGray);
    border-radius: .90rem;
    width: 100%;
    margin-bottom: 10px;
  }
  .sites-slice__button:hover {
    cursor: pointer;
    background-color: var(--backgrounBlack);
  }

  .sites-slice__button-container{
    background-color: var(--backgrounLigth);
    border: 1px solid rgb(48, 48, 48);
    border-radius: .75rem;
    overflow: hidden;
  }
  .sites-slice__button-heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sites-slice__heading-content{
    text-wrap: balance;
    letter-spacing: -.025em;
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 1.272;
    text-align: left;
    padding: 2rem;
    scroll-margin-top: 120px;
    color: var(--white);
  }
  .sites-slice__button-text{
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    padding-top: 0;
    min-height: 116px;
    margin-top: -1rem;
  }
  .sites-slice__button-description{
    margin-bottom: 0;
    margin-top: 0;
    padding: 0 2rem;
    color: var(--textGray);
  }

  @media (min-width: 640px) {
    .sites-slice__container-box{
      max-width: 640px;
    }
    .sites-slice__slider-box{
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    .sites-slice__container{
      padding: 5rem 0;
    }
    .sites-slice__container-box{
      max-width: 768px;
    }
    .sites-slice__slider-box{
      flex-direction: row;
    }
    .sites-slice__image-box{
      width: 50%;
    }
    .sites-slice__text-box{
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    .sites-slice__container-box{
      max-width: 1024px;
      padding: 0 2rem;
    }
    .sites-slice__title{
      font-size: 2.5rem;
      line-height: 1.1;
    }
  }
  @media (min-width: 1280px) {
    .sites-slice__container-box{
      max-width: 1280px;
    }
  }
</style>