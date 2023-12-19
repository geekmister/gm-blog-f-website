// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
{
        devtools: { enabled: true },
        css: ["@/assets/style/space.css"],
        build: {
            transpile: [
                'tdesign-vue-next',
                'tdesign-icons-vue-next'
            ],
        },
        modules: [
          // use tdesign-vue-next in nuxt
          'tdesign-vue-next/es/nuxt',
        ]
    }
)
