export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_car_rent 개인 포토폴리오 작업페이지',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt_car_rent 개인 포토폴리오 작업페이지입니다.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'car rent,portfolio car,portfolio car rent, 자동차렌탈포폴사이트, nuxt use portfolio, 개인포폴차렌탈' },
      { property: 'og:title', content: '자동차렌탈포폴사이트' },
      { property: 'og:description', content: '개인포폴을 위한 클론코딩 사이트' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/js/swiper.js', body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/static/css/display.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Deployment
  target: 'static',
  router: {
    // base: '/nuxt_car_rent/'
    mode: 'hash',
    base: process.env.NODE_ENV === 'production' ? './' : '/nuxt_car_rent/',
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/',
        redirect: {
          name: 'home'
        }
      })
    }
  },
  generate: {
    dir: 'dist',
    subFolders: true,
    devtools: true
  },
}
