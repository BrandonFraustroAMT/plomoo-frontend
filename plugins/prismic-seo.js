import { defineNuxtPlugin,  } from '#app'
import { usePrismic } from '@prismicio/vue';

export default defineNuxtPlugin(async () => {
  const { client } = usePrismic();
  
  try {
      const response = await client.getByUID('navegacion', 'plomoo');
      if(response) {
        const document = response;
        const meta = [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'og:title', content: document.data.meta_tittle[0].text },
          { name: 'og:description', content: document.data.meta_description },
          { property: 'og:image', content: document.data.meta_thumbnail.url },
        ]

        useHead({
          title: 'Plomo Media',
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
          meta: meta,
        })

      }
      
  } catch (error) {
    console.log('Error fetching document:', error);
  }
})
