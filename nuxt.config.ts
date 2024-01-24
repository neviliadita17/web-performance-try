// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image"],
  image: {
    domains: [
      'https://unsplash.com/photos/lighted-kerosene-lantern-aPdUKy65qWE'
    ],
    presets: {
      presetOne: {
        modifiers: {
          width: 400,
          height: 400,
          format: 'webp'
        }
      }
    }
  }
})