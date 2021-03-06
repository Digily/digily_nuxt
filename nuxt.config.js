export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'digily',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],

    // Global Javascript
    script: [
      { src: 'js/lottie.js', defer: true },
      { src: 'js/javascript.js', defer: true },
    ],

  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'reset-css/reset.css',
  ],

  styleResources: {
    scss: [
      '~/static/scss/theme.scss',
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/prismic',
    'nuxt-gsap',
  ],
  prismic: {
    endpoint: 'https://digily.cdn.prismic.io/api/v2',
    /* see configuration for more */
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  loading: {
    color: 'green',
    height: '5px'
  }
}
