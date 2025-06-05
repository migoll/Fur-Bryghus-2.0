// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  srcDir: "src/",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
   app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/newfavicon.ico",
        },
      ],
    },
  },
});
