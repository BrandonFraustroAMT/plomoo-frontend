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
  head: {
    title: 'Plomo Media',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Plomo media' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './public/favicon.ico' }
    ]
  },
})