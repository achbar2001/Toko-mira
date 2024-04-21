export default {

  // Target Deployment
  target: 'server',

  //rendering mode SSR	
  ssr: true,

  loading: {
    color: 'white',	// <-- color
    height: '5px'	// <-- height
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-ecommerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/images/logomira.jpg'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    },
    ],
    script: [
      { src: '/js/coreui.bundle.min.js' },
      { src: 'https://app.sandbox.midtrans.com/snap/snap.js', 'data-client-key': 'Mid-client-YWE9hqGN0BYdwz4U' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.min.css',
    '@/assets/css/custom.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-star-rating.js', mode: 'client' },
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/mixins.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',	// <-- register PWA
  ],


  pwa: {
    meta: {
      title: 'Toko Mira - E-Commerce Fashion',
      author: 'Toko Mira'
    },
    manifest: {
      name: 'Toko Mira',
      short_name: 'tokomira',
      description: 'Official Toko Online Penjualan Produk Toko Mira',
      lang: 'en'
    },
    icon: {
      fileName: 'images/logomira.jpg',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },
  pwa: {
    meta: {
      title: 'TOKO MIRA - E-Commerce Fashion',
      author: 'Toko Mira'
    },
    manifest: {
      name: 'Toko Mira',
      short_name: 'Mstore',
      description: 'Official Toko Online Penjualan Produk Toko Mira',
      lang: 'en'
    },
    icon: {
      fileName: 'images/logomira.jpg',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //https://dev.auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    //https://github.com/avil13/vue-sweetalert2
    'vue-sweetalert2/nuxt',
  ],

  auth: {
    strategies: {

      //strategy "admin"
      admin: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/admin/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/admin/logout',
            method: 'post'
          },
          user: {
            url: '/api/admin/user',
            method: 'get',
            propertyName: 'user'
          }
        },
      },

      //strategy "customer"
      customer: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/customer/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/customer/logout',
            method: 'post'
          },
          user: {
            url: '/api/customer/user',
            method: 'get',
            propertyName: 'user'
          }
        },
      },

    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://achbar.my.id'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
