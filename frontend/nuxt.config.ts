// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      title: "Ignite Student Association - MIT Chh. Sambhajinagar",
      titleTemplate: "%s - Ignite Student Association - MIT Chh. Sambhajinagar",
      meta: [
        {
          name: "description",
          content:
            "We are student-powered! Bridging the gap between books and careers, we ignite your future. Join our vibrant community for engaging events and workshops (online & offline) connecting academia to real-world industry insights. Get ready to explore your passions, network with experts, and launch your career journey!",
        },
        { property: "theme-color", content: "#FF6246" },
        {
          property: "keywords",
          content:
            "MIT Events, MIT Chh. Sambhajinagar Ignite Event, Ignite Event, Chh. Sambhajinagar College Events, MIT Chh. Sambhajinagar Student Association",
        },
        {
          property: "og:title",
          content: "Ignite Student Association - MIT Chh. Sambhajinagar",
        },
        {
          property: "og:description",
          content:
            "We are student-powered! Bridging the gap between books and careers, we ignite your future. Join our vibrant community for engaging events and workshops (online & offline) connecting academia to real-world industry insights. Get ready to explore your passions, network with experts, and launch your career journey!",
        },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/dthrgos9e/image/upload/v1708432463/ignite-assets/events/zkk0hriqy2erukwbqsna.png",
        },
        {
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/dthrgos9e/image/upload/v1708432463/ignite-assets/events/zkk0hriqy2erukwbqsna.png",
        },
        {
          property: "og:url",
          content: "https://www.ignitestudentassociation.com/",
        },
        {
          property: "og:site_name",
          content: "Ignite Student Association - MIT Chh. Sambhajinagar",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:copyright",
          content:
            "© https://www.ignitestudentassociation.com/, 2024. All rights reserved",
        },
        {
          property: "twitter:title",
          content: "Ignite Student Association - MIT Chh. Sambhajinagar",
        },
        {
          property: "twitter:description",
          content:
            "We are student-powered! Bridging the gap between books and careers, we ignite your future. Join our vibrant community for engaging events and workshops (online & offline) connecting academia to real-world industry insights. Get ready to explore your passions, network with experts, and launch your career journey!",
        },
        {
          property: "twitter:image",
          content:
            "https://res.cloudinary.com/dthrgos9e/image/upload/v1708432463/ignite-assets/events/zkk0hriqy2erukwbqsna.png",
        },
        {
          property: "twitter:site",
          content: "https://www.ignitestudentassociation.com/",
        },
        { property: "msapplication-TileColor", content: "#FF6246" },
        {
          property: "msapplication-TileImage",
          content:
            "https://res.cloudinary.com/dthrgos9e/image/upload/v1708432463/ignite-assets/events/zkk0hriqy2erukwbqsna.png",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          children: `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "l4q4hwsohu");`,
        },
      ],
    },
  },

  routeRules: {
    "/check-payment": { ssr: false },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],

  plugins: ["~/plugins/razorpay.client.ts"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      base_url: process.env.BASE_URL,
      url_prefix: process.env.URL_PREFIX,
      frontend_base: process.env.FRONTEND_BASE,
    },
  },

  build: { transpile: ["vue-toastification"] },
});
