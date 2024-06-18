import { repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic"],
  css: [
    '@/assets/reset.css',
    '@/assets/global.css'
  ],
  prismic: {
      endpoint: 'https://plomoo.cdn.prismic.io/api/v2',
      modern: true,
      linkResolver: '@/link-resolver.js',
      htmlSerializer: '@/html-serializer.js',
  },
  build: {
    transpile: ["@prismicio/vue"],
  },
  apiOptions: {
   routes: [
     // Resolves the Homepage document to "/"
     {
       type: 'navegacion',
       path: '/',
     },
   ],
  },
})