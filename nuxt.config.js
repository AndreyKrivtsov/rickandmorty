export default {
    server: {
        host: '0.0.0.0',
        port: 6001
    },

    head: {
        title: 'rickandmorty',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
    ],

    plugins: [
    ],

    components: true,

    buildModules: [
    ],

    modules: [
        '@nuxtjs/axios'
    ],

    build: {
    },

    axios: {
        baseURL: 'https://rickandmortyapi.com/api',
    }
}
