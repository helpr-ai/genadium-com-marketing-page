// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl'
      },
      title: 'Genadium - AI Agents die voor jou werken',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Stop wachten, start vandaag met AI die werkt. Genadium brengt je processen in kaart en toont precies waar AI direct impact kan maken. Bewezen 5-stappen methode.'
        },
        { name: 'keywords', content: 'AI Agents, AI implementatie, bedrijfsprocessen, automatisering, AI consultant Nederland, procesoptimalisatie, kunstmatige intelligentie' },
        { name: 'author', content: 'Genadium' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Genadium - AI Agents die voor jou werken' },
        {
          property: 'og:description',
          content: 'Stop wachten, start vandaag met AI die werkt. Genadium brengt je processen in kaart en toont precies waar AI direct impact kan maken.'
        },
        { property: 'og:image', content: '/images/logo/genadium_black_tagline_color.svg' },
        { property: 'og:url', content: 'https://genadium.com' },
        { property: 'og:site_name', content: 'Genadium' },
        { property: 'og:locale', content: 'nl_NL' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Genadium - AI Agents die voor jou werken' },
        {
          name: 'twitter:description',
          content: 'Stop wachten, start vandaag met AI die werkt. Bewezen 5-stappen methode voor AI implementatie.'
        },
        { name: 'twitter:image', content: '/images/logo/genadium_black_tagline_color.svg' },

        // Additional SEO
        { name: 'geo.region', content: 'NL' },
        { name: 'geo.placename', content: 'Nederland' },
        { name: 'language', content: 'Dutch' },
        { name: 'theme-color', content: '#2563eb' }
      ],
      link: [
        // Fonts
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap'
        },

        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },

        // Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },

        // Android Icons
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' },

        // Microsoft Tiles
        { rel: 'msapplication-TileImage', href: '/favicon/ms-icon-144x144.png' },

        // Web App Manifest
        { rel: 'manifest', href: '/favicon/manifest.json' },

        // Canonical URL
        { rel: 'canonical', href: 'https://genadium.com' }
      ]
    }
  }
})
