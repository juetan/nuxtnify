export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  nuxnify: {
    overrideFetch: false,
  },
  unocss: {
    preflight: true,
  },
  arco: {
    icons: false,
  },
  modules: ["@unocss/nuxt", "arco-design-nuxt-module"],
});
