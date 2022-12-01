// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
    // 'mdi/css/materialdesignicons.min.css'
  ],
  app: {
    head: {
      meta: [
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap' },
        { rel: 'preconnect', href: "https://app.snipcart.com" },
        { rel: 'preconnect', href: "https://cdn.snipcart.com" },
        { rel: 'stylesheet', href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' }
      ],
      script: [
        { src: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js', async: true }
      ]
    }
  },
  modules: ['@intlify/nuxt3', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  intlify: {
    localeDir: 'i18n',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en'
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.sass";',
        },
      },
    },
  }
})
