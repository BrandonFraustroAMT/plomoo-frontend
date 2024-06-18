<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SeoSliceSlice>([
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
    <footer class="seo-slice__footer">
      <div class="seo-slice__container">
        <div class="seo-slice__columns">
          <div class="seo-slice__columns-group">
            <div>
              <!-- LOGO -->
               <p class="seo-slice__image-logo"><PrismicImage :field="slice.primary.logo" /></p>
              <!-- <PrismicImage :field="slice.primary.logo" class="seo-slice__image-logo" /> -->
              <div class="seo-slice__rights-container">
                <p class="seo-slice__rights-text">{{ slice.primary.labelrights }}</p>
              </div>
              <template v-for="item in slice.primary.groupredessociales" class="seo-slice__icons-container">
                <PrismicLink :field="item.linkicon" class="seo-slice__icons-link" >
                  <PrismicImage :field="item.icono" />
                  <span class="seo-slice__icons-text">X</span>
                </PrismicLink>
              </template>
              <!-- <nav class="seo-slice__icons-container">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </nav> -->
            </div>
          </div>
          <div class="seo-slice__columns-group">
            <div>
              <h2 class="seo-slice__title">{{ slice.primary.labelone }}</h2>
              <template v-for="item in slice.primary.grouplabelone">
                <PrismicLink :field="item.linklabel" class="seo-slice__link-label">
                  {{ item.label }}
                </PrismicLink>
              </template>
            </div>
          </div>
          <div class="seo-slice__columns-group">
            <div>
              <h2 class="seo-slice__title">{{ slice.primary.labeltwo }}</h2>
              <template v-for="item in slice.primary.grouplabeltwo">
                <PrismicLink :field="item.linklabel" class="seo-slice__link-label">
                  {{ item.label }}
                </PrismicLink>
              </template>
            </div>
          </div>
        </div>
        <div class="seo-slice__columns">
          <div class="seo-slice__columns-group">
            <div>
              <h2 class="seo-slice__title">{{ slice.primary.labelthree }}</h2>
              <template v-for="item in slice.primary.grouplabelthree">
                <PrismicLink :field="item.linklabel" class="seo-slice__link-label">
                  {{ item.label }}
                </PrismicLink>
              </template>
            </div>
          </div>
          <div class="seo-slice__columns-group">
            <div>
              <h2 class="seo-slice__title">{{ slice.primary.labelfour }}</h2>
              <template v-for="item in slice.primary.grouplabelfour">
                <PrismicLink :field="item.linklabel" class="seo-slice__link-label">
                  {{ item.label }}
                </PrismicLink>
              </template>
            </div>
          </div>
        </div>
        <div class="seo-slice__columns">
          <div class="seo-slice__columns-group">
            <div>
              <h2 class="seo-slice__title">{{ slice.primary.labelfive }}</h2>
              <template v-for="item in slice.primary.grouplabelfive">
                <PrismicLink :field="item.linklabel" class="seo-slice__link-label">
                  {{ item.label }}
                </PrismicLink>
              </template>
            </div>
          </div>
          <div class="seo-slice__columns-group">
            <div>
              <h2 class="seo-slice__title">{{ slice.primary.labelsix }}</h2>
              <template v-for="item in slice.primary.grouplabelsix">
                <PrismicLink :field="item.linklabel" class="seo-slice__link-label">
                  {{ item.label }}
                </PrismicLink>
              </template>
            </div>
          </div>
        </div>
        <div class="seo-slice__columns">
          <div class="seo-slice__columns-group">
            <div>
              <h2 class="seo-slice__title">{{ slice.primary.labelseven }}</h2>
              <template v-for="item in slice.primary.grouplabelseven">
                <PrismicLink :field="item.linklabel" class="seo-slice__link-label">
                  {{ item.label }}
                </PrismicLink>
              </template>
            </div>
          </div>
          <div class="seo-slice__columns-group">
            <div>
              <h2 class="seo-slice__title">{{ slice.primary.labeleight }}</h2>
              <template v-for="item in slice.primary.grouplabeleight">
                <PrismicLink :field="item.linklabel" class="seo-slice__link-label">
                  {{ item.label }}
                </PrismicLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>


<style>
  .seo-slice__footer{
    color: var(--white);
    padding: 4rem 0;
    background-color: var(--backgrounBlack);
  }
  .seo-slice__container{
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    gap: 1rem;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .seo-slice__columns{
    grid-column: span 1 / span 1;
  }
  .seo-slice__columns-group{
    margin-top: 3rem;
  }
  .seo-slice__image-logo {
    width: 35%;
    margin-bottom: -0.5rem;
  }
  .seo-slice__rights-container{
    opacity: .75;
    color: var(--white);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
  }
  .seo-slice__rights-text{
    margin-bottom: 0;
    margin-top: 0;
    color: var(--white);
  }
  .seo-slice__icons-container{
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .seo-slice__icons-link{
    color: var(--white);
    text-decoration: none;
    display: block;
    border-radius: .125rem;
  }
  .seo-slice__icons-text{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    white-space: nowrap;
    border-width: 0;
  }
  .seo-slice__title{
    margin-bottom: 2rem;
    scroll-margin-top: 120px;
    font-size: 1.375rem;
    line-height: 1.272;
    font-weight: 500;
    letter-spacing: -.025em;
    text-wrap: balance;
  }
  .seo-slice__link-label{
    margin-top: 1rem;
    display: block;
    border-radius: .125rem;
    color: var(--white);
    text-decoration: none;
    opacity: .75;
  }
  
  @media (min-width: 640px) {
    .seo-slice__container{
      max-width: 640px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 768px) {
    .seo-slice__container{
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .seo-slice__container{
      max-width: 1024px;
      padding: 0 2rem;
      grid-template-rows: repeat(1, minmax(0, 1fr));
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .seo-slice__container{
      max-width: 1280px
    }
  }
</style>