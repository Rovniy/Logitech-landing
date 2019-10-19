const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  env: {
    MVIDEO_LINK: 'https://www.mvideo.ru/products/igrovye-naushniki-logitech-g432-981-000770-50126861',
  },
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Игровая гарнитура Logitech G432 с поддержкой технологии объемного звучания 7.1',
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'Ravy & Seenix' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#000000' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Игровая гарнитура Logitech G432 с поддержкой технологии объемного звучания 7.1' },
      { name: 'twitter:description', content: 'В универсальной игровой гарнитуре G432 с облегченной конструкцией используются диффузоры диаметром 50 мм, технология объемного звучания DTS, 6-миллиметровый микрофон и многое другое.' },
      { name: 'og:title', content: 'Игровая гарнитура Logitech G432 с поддержкой технологии объемного звучания 7.1' },
      { name: 'og:description', content: 'В универсальной игровой гарнитуре G432 с облегченной конструкцией используются диффузоры диаметром 50 мм, технология объемного звучания DTS, 6-миллиметровый микрофон и многое другое.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'http://headsets.logitech.promo' },
      { name: 'og:locale', content: 'ru_RU' },
      { name: 'twitter:image', content: 'https://www.logitechg.com/content/dam/gaming/en/products/g432/g432-hero.png.imgw.1318.1318.jpeg' },
      { name: 'og:image', content: 'https://www.logitechg.com/content/dam/gaming/en/products/g432/g432-hero.png.imgw.1318.1318.jpeg' },
      { hid: 'description', name: 'description', content: 'В универсальной игровой гарнитуре G432 с облегченной конструкцией используются диффузоры диаметром 50 мм, технология объемного звучания DTS, 6-миллиметровый микрофон и многое другое.' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'images/favicon.ico'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'vue-plyr/dist/vue-plyr.css',
    '@/static/library/animate.css',
    { src: resolve(__dirname, 'assets/styles/common.sass'), lang: 'sass' }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname)
    }
  },
  modules: [
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: 'UA-150244485-1'
    }]
  ],
  styleResources: {
    sass: [
      './assets/styles/variables.sass'
    ]
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/plyr',
    { src: '~/plugins/waypoint', mode: 'client' }
  ]
}
