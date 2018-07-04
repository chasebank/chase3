module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Chase Whiteside` : 'Chase Whiteside';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site of Chase Whiteside' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: 'routeDepth',

    scrollBehavior: function (to, from, savedPosition) {
      return new Promise(resolve => {
        if (savedPosition) {
          resolve(savedPosition)
        }

        else {
          resolve({ x: 0, y: 0 })
        }
      })
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,

  css: [
    '~/styles/global.scss'
  ],
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/colcade', ssr: false }
  ],

  modules: [
    ['nuxt-sass-resources-loader', '@/styles/_bitsnpieces.scss'],
  ],

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // },
      config.module.rules.push(
        // {
        //   test: /\.md$/,
        //   loaders: 'json-loader'
        // },
        {
          test: /\.md$/,
          loaders: 'markdown-with-front-matter-loader',
        }
      )
    }
  }
}
