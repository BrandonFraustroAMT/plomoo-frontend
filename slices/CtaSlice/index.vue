<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CtaSliceSlice>([
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
    <div class="cta-slice__container">
      <div class="cta-slice__container-box">
        <div class="cta-slice__container-content">
          <div class="cta-slice__container-text">
            <div class="cta-slice__text">
              <h2 class="cta-slice__text-title"><PrismicRichText :field="slice.primary.titulo" /></h2>
              <div class="cta-slice__text-subtitle">
                <p class="cta-slice__subtitle-data">{{ slice.primary.subtitulo }}</p>
              </div>
              <div class="cta-slice__text-button">
                <button class="cta-slice__button">
                  <PrismicLink :field="slice.primary.botonlink" class="cta-slice__button-link">{{ slice.primary.botonlabel }}</PrismicLink>
                </button>
              </div>
            </div>
          </div>
          <div class="cta-slice__image">
            <!-- IMAGEN -->
            <PrismicImage :field="slice.primary.imagencta" class="cta-slice__image-content"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .cta-slice__container{
    color: var(--white);
    padding: 3rem 0;
    width: 100%;
  }
  .cta-slice__container-box{
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .cta-slice__container-content{
    color: var(--backgrounBlack);
    padding: 2rem 3rem;
    background-color: var(--boxPink);
    border-radius: .75rem;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .cta-slice__container-text{
    z-index: 10;
    position: relative;
    width: 100%;
  }
  .cta-slice__text{
    max-width: 512px;
  }
  .cta-slice__text-title{
    text-wrap: balance;
    letter-spacing: -.025em;
    font-size: 2rem;
    line-height: 1.125;
    scroll-margin-top: 120px;
  }
  .cta-slice__text-subtitle{
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 1.5rem
  }
  .cta-slice__subtitle-data{
    margin-bottom: 0;
    margin-top: 0;
    color: var(--textBlack);
  }
  .cta-slice__text-button{
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1.5rem;
  }
  .cta-slice__button{
    color: var(--white);
    line-height: 1.25rem;
    font-weight: 700;
    font-size: .875rem;
    padding: .75rem 1.5rem;
    background-color: var(--backgrounBlack);
    border: 2px solid var(--backgrounBlack);
    border-radius: .5rem;
    white-space: nowrap;
  }
  .cta-slice__button:hover{
    cursor: pointer;
    background-color: var(--backgrounLigth);
  }
  .cta-slice__button-link{
    text-decoration: none;
    color: var(--white);
  }
  .cta-slice__image{
    width: 100%;
    top: 5vh;
    right: 0;
    left: 0;
    bottom: 0;
    position: relative;
  }
  .cta-slice__image-content{
    object-position: left;
    object-fit: cover;
  }

  @media (min-width: 640px) {
    .cta-slice__container-box{
      max-width: 640px
    }
  }
  @media (min-width: 768px) {
    .cta-slice__container{
      padding: 5rem 0;
    }
    .cta-slice__container-box{
      max-width: 768px
    }
    .cta-slice__container-content{
      flex-direction: column;
      padding: 8rem 3rem;
    }
  }
  @media (min-width: 1024px) {
    .cta-slice__container-box{
      max-width: 1024px;
      padding: 0 2rem;
    }
    .cta-slice__text-title{
      font-size: 2.5rem;
      line-height: 1.1;
    }
    .cta-slice__text-subtitle{
      font-size: 1.125rem;
      line-height: 1.555;
    }
    .cta-slice__text-button{
      margin-top: 2.5rem;
    }
    .cta-slice__image{
      /* left: 33.333333%; */
      top: 5%;
      right: 0;
      left: 40%;
      bottom: 0px;
      position: absolute;
    }
  }
  @media (min-width: 1280px) {
    .cta-slice__container-box{
      max-width: 1280px;
    }
  }
  
</style>