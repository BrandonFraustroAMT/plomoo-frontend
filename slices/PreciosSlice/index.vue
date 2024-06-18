<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PreciosSliceSlice>([
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
    <div class="precios-slice__container">
      <div class="precios-slice__container-box">
        <header>
          <h2 class="precios-slice__container-title"><PrismicRichText :field="slice.primary.titulo" /></h2>
        </header>
        <div class="precios-slice__list-box">
          <div class="precios-slice__list">
            <template v-for="item in slice.primary.groupprecios" >
              <div class="precios-slice__list-container">
                <div class="precios-slice__list-data">
                  <div>
                    <div class="precios-slice__list-subtitle">
                      <h2 class="precios-slice__subtitle-content">
                        <span class="precios-slice__subtitle-data">{{ item.subtitulo }}</span>
                      </h2>
                    </div>
                    <div class="precios-slice__list-description">
                      <p class="precios-slice__description">{{ item.descripcion }}</p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
  .precios-slice__container{
    color: var(--white);
    padding: 3rem 0;
  }
  .precios-slice__container-box{
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
    width: 100%;
  }
  .precios-slice__container-title{
    text-wrap: balance;
    letter-spacing: -.025em;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.125;
    scroll-margin-top: 120px;
    max-width: 22em;
  }
  .precios-slice__list-box{
    margin-top: 2rem;
  }
  .precios-slice__list{
    row-gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -.5rem;
  }
  .precios-slice__list-container{
    padding: 0 .5rem;
    flex-grow: 1;
    width: 100%;
  }
  .precios-slice__list-subtitle{
    display: flex;
    flex-direction: column;
  }
  .precios-slice__subtitle-content{
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .precios-slice__list-data{
    color: var(--white);
    padding: 1.5rem;
    background-color: var(--backgrounLigth);
    border-radius: .75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .precios-slice__subtitle-data{
    letter-spacing: -.025em;
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.083;
  }
  .precios-slice__list-description{
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 46em;
    margin-top: 1rem;
  }
  .precios-slice__description{
    margin-bottom: 0;
    margin-bottom: 0;
    color: var(--textGray);
  }

  @media (min-width: 640px) {
    .precios-slice__container-box{
      max-width: 640px;
    }
  }

  @media (min-width: 768px) {
    .precios-slice__container{
      padding: 5rem 0;
    }
    .precios-slice__container-box{
      max-width: 768px;
    }
    .precios-slice__list-container{
      width: 50%;
    }
    .precios-slice__list-data{
      padding: 3rem;
    }
  }

  @media (min-width: 1024px) {
    .precios-slice__container-box{
      max-width: 1024px;
      padding: 0 2rem;
    }
    .precios-slice__container-title{
      font-size: 2.5rem;
      line-height: 1.1;
    }
    .precios-slice__list-container{
      width: 33.333333%;
    }
    .precios-slice__subtitle-data{
      font-size: 3.5rem;
      line-height: 1.142;
    }
  }

  @media (min-width: 1280px) {
    .precios-slice__container-box{
      max-width: 1280px;
    }
  }
</style>