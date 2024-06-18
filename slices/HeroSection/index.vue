<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSectionSlice>([
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

    <div class="hero-section__container">
      <div class="hero-section__container-items">
        <div class="hero-section__content">
          <span class="hero-section__content-title"><PrismicRichText :field="slice.primary.titulo" /></span>
          <h1 class="hero-section__content-subtitle">{{ slice.primary.subtitulo }}</h1>
          <div class="hero-section_content-data">
            <div class="hero-section_content-list">
              <template v-for="item in slice.primary.groupherosection">
                <p class="hero-section_content-text">
                  <PrismicImage :field="item.icono" class="hero-section__content-icon" />
                  {{ item.label }}
                </p>
              </template>
            </div>
          </div>
          <div class="hero-section__buttons">
            <div class="hero-section__buttons-content">
              <button class="hero-section__button">
                <PrismicLink :field="slice.primary.botonlink" class="hero-section__link"> {{ slice.primary.botontexto }} </PrismicLink>
              </button>
            </div>
            <div class="hero-section__buttons-content">
              <PrismicLink :field="slice.primary.labellink" class="hero-section__link-whats">{{ slice.primary.label }} </PrismicLink>
            </div>
          </div>
        </div>
      </div>
      <PrismicImage :field="slice.primary.imagenfondo" />
    </div>
  </section>
</template>


<style>
  .hero-section__container {
    color: var(--white);
    padding-top: 5rem;
    padding-bottom: 3rem;
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  .hero-section__container-items{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
  .hero-section__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
    position: relative;
  }
  .hero-section__content-title{
    color: var(--textPurple);
    font-weight: 799;
    font-size: 1rem;
    line-height: 1.5;
    display: block;
    margin-bottom: 1rem;
  }
  .hero-section__content-subtitle{
    text-wrap: balance;
    letter-spacing: -.025em;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.083;
    scroll-margin-top: 120px;
    max-width: 14em;
  }
  .hero-section_content-data{
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 1rem;
  }
  .hero-section_content-list{
    padding: 2rem;
    background-color: var(--backgrounBlack);
    border: 2px solid rgb(80 80 80);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .hero-section__content-icon{
    margin-right: 3px;
  }
  .hero-section_content-text{
    line-height: 1.25rem;
    font-weight: 700;
    font-size: 0.87rem;
    display: flex;
    text-align: left;
    align-items: center;
    position: relative;
    margin: 10px 0
  }
  .hero-section__buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero-section__buttons-content{
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
  .hero-section__link{
    text-decoration: none;
    color: var(--backgrounBlack);
  }
  .hero-section__button{
    line-height: 1.25rem;
    font-weight: 700;
    font-size: .875rem;
    padding: .75rem 1.5rem;
    background-color: var(--white);
    border-radius: .5rem;
    white-space: nowrap;
    border: 2px solid var(--white);
  }
  .hero-section__button:hover {
    background-color: var(--whiteHover);
    border: 2px solid var(--whiteHover);
    cursor: pointer;
  }
  .hero-section__button:hover{
    cursor: pointer;
  }
  .hero-section__link-whats{
    color: var(--white);
  }

  
  @media (min-width: 640px){
    .hero-section__container-items {
        max-width: 640px;
    }
  }
  @media (min-width: 768px){
    .hero-section__container {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
    .hero-section__container-items {
        max-width: 768px;
        padding-top: 5vh;
        padding-bottom: 5vh;
    }
    .hero-section__content-title{
      font-size: 1.125rem;
      line-height: 1.555;
    }
    .hero-section_content-list{
      flex-direction: row;
    }
    .hero-section_content-text{
      max-width: 264px;
    }
    .hero-section__buttons{
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .hero-section__buttons-content{
      padding: 0 1rem;
    }
  }

  @media (min-width: 1024px) {
    .hero-section__container {
      background-image: url(/_nuxt/assets/img/background-hero.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
    }
    .hero-section__container-items {
      max-width: 1024px;
      padding-right: 2rem;
      padding-left: 2rem;
    }
    .hero-section__content-subtitle{
      font-size: 3.5rem;
      line-height: 1.142;
    }
    .hero-section_content-data{
      font-size: 1.125rem;
      line-height: 1.555;
      margin-top: 1.5rem;
    }
    .hero-section__buttons-content{
      margin-top: 2.5rem;
      padding: 0 1.5rem;
    }
  }
  @media (min-width: 1280px) {
    .hero-section__container-items {
        max-width: 1280px;
    }
  }
</style>