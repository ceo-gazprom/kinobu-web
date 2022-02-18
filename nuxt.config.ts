import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src',
    css: [
        '/styles/common.sass',
        '/styles/dark-theme.sass',
        '/styles/light-theme.sass',
    ],
    buildModules: [
        '@nuxt/typescript-build',
        '@pinia/nuxt',
    ],
})
