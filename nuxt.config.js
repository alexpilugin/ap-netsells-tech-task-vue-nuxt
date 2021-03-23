import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ap-netsells-task',
    title: 'ap-netsells-task',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Heebo:wght@400;700;900&family=Montserrat&family=Oswald&display=swap" }
    ],
  },

  //Customize the progress-bar color 
  loading: { color: '#E05D5D' }, // Brand Red

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/styles/page-transition.css'
  ],

  // Make scss variables available in all components, without the need to import them in every file.
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-lazyload.js', ssr: false },
    { src: '~/plugins/mixins.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { treeShake: true }],
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', { fix: true }],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  sitemap: {
    hostname: 'http://localhost/',
    gzip: true
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // POST End Point: https://recruitment-submissions.netsells.co.uk/api/vacancies/javascript-developer/submissions
    baseURL: 'https://recruitment-submissions.netsells.co.uk/api'
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      default: 'light',
      themes: {
        light: {
          roman: '#e05d5d', // brand red
          titled: '#464646',
          greyed: '#A3A3A3',
          inputborder: '#D4D4D4',
          /* Next colours are messy since is not clear "who is who" */
          primary: '#464646',
          secondary: '#424242',
          accent: '#A3A3A3',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        dark: {
          roman: '#e05d5d', // brand red
          titled: '#C0C0C0',
          greyed: '#060505',
          inputborder: '#4A4A4A',
          /* Next colours are messy since is not clear "who is who" */
          primary: '#D8D8D8',
          secondary: '#A3A3A3',
          accent: '#060505',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        },
      },
    },
  },

  /* Page Transitions */
  pageTransition: {
    name: "page", //css class: '~assets/styles/page-transition.css'
    mode: "out-in"
  },
  /* Layout Transitions */
  layoutTransition: {
    name: "page", //css class: '~assets/styles/page-transition.css'
    mode: "out-in"
  },
    
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true,
    extractCSS: true,
    buildDir: '.nuxt',
    publicPath: '/assets/',
    //https://github.com/nuxt/nuxt.js/issues/3828#issuecomment-508428611
    filenames: {
      app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
    },
    babel: {
      presets({ isServer }) {
        // let targets = isServer ? { node: '10' } : { ie: '11' }
        return [
          [require.resolve('@nuxt/babel-preset-app'),
          {
            // targets
            buildTarget: isServer ? 'server' : 'client',
            corejs: { version: 3 }
          }
          ]
        ]
      },
      'env': {
        'production': {
          'plugins': []
        }
      }
    },
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
