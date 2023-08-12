// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/css/main.css'],
    ssr: true,
    extends: [
        'nuxt-seo-kit'
    ],

    runtimeConfig: {
        public: {
            siteUrl: 'https://singediesel.org',
            siteName: 'Singe Diesel, compagnie de théâtre de marionnettes dirigée par Juan Perez Escala.',
            siteDescription: 'Singe Diesel est une compagnie de théâtre de marionnettes française dirigée par Juan Perez Escala. Elle est basée à Guilers, dans le Finistère, en Bretagne.',
            language: 'fr-FR',
            titleSeparator: '|'
        }
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            titleTemplate: '%pageTitle %titleSeparator %siteName',
            title: '%siteName',
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                { rel: 'icon', type: 'image/png', href: '/seo-files/favicon-32x32.png', },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/seo-files/apple-touch-icon.png', },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/seo-files/favicon-32x32.png', },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/seo-files/favicon-16x16.png', },
                { rel: "manifest", href: "/seo-files/site.webmanifest" },
                { rel: "shortcut icon", href: "/seo-files/favicon.ico" },
                { rel: 'mask-icon', href: "/seo-files/safari-pinned-tab.svg", color: "#5bbad5" },
            ],

            meta: [
                {
                    name: 'msapplication-config',
                    content: "/seo-files/browserconfig.xml"
                },
                {
                    name: 'msapplication-config',
                    content: "/seo-files/browserconfig.xml"
                },
                {
                    name: 'msapplication-TitleColor',
                    content: "#da532c"
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'description',
                    content: '%siteDescription',
                },
                {
                    name: 'og:title',
                    content: '%siteName',
                },
                {
                    name: 'og:description',
                    content: '%siteDescription',
                },
                {
                    name: 'og:image',
                    content: '/seo-files/banner-1200x630.webp',
                },
                {
                    name: 'og:url',
                    content: '%siteUrl',
                },
                {
                    name: 'og:site_name',
                    content: '%siteName',
                },
                {
                    name: 'og:locale',
                    content: 'fr_FR',
                },
                {
                    name: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: '/seo-files/banner-1200x630.png',
                },
                {
                    name: 'twitter:title',
                    content: '%siteName',
                },
                {
                    name: 'twitter:description',
                    content: '%siteDescription',
                },
                {
                    name: 'twitter:image',
                    content: '/seo-files/banner-1200x630.png',
                }
            ]
        }
    },
    routeRules: {
        // for all routes to be indexed by search engines
        '/*': { index: true },
    },
    // linkChecker: {
    //     failOn404: true,
    // }
})
