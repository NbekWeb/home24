export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "home24",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", "@/assets/style/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    "~/plugins/axios",
    "~/plugins/axios-instance",
    '~/plugins/v-mask.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/i18n"],

  // i18n

  i18n: {
    locales: [
      {
        code: "ru",
        iso: "ru-RU",
        name: "Russian",
      },
      {
        code: "uz",
        iso: "fr-FR",
        name: "Uzbek",
      },
    ],
    defaultLocale: "uz",
    vueI18n: {
      fallbackLocale: "uz",
      messages: {
        ru: require("./i18n/ru.json"),
        uz: require("./i18n/uzb.json"),
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
};
