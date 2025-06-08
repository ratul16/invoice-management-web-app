// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  compatibilityDate: '2025-05-15',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    // prerender: {
    //   crawlLinks: false,
    //   routes: ['/sitemap.xml'],
    //   ignore: ['/hi'],
    // },
  },

  eslint: {
    checker: true,
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
