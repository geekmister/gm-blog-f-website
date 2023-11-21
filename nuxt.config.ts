// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    build: {
        transpile: ['tdesign-vue-next'],
    },
  modules: [
      // use tdesign-vue-next in nuxt
      'tdesign-vue-next/es/nuxt',
  ]
})
