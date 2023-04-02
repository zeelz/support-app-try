// https://nuxt.com/docs/api/configuration/nuxt-config
export default 
// defineNuxtConfig(
    {
    modules: [
        '@nuxtjs/tailwindcss'
    ],

    tailwindcss: {
        // Add your Tailwind CSS configuration here
        mode: 'jit',
        purge: [
          './src/**/*.html',
          './src/**/*.vue',
          './src/**/*.jsx',
        ],
        theme: {
            extend: {
                colors: {
                    transparent: 'transparent',
                    current: 'currentColor',
                    'white': '#ffffff',
                    'purple': '#ff0000',
                    'midnight': '#121063',
                    'metal': '#565584',
                    'tahiti': '#3ab7bf',
                    'silver': '#ecebff',
                    'bubble-gum': '#ff77e9',
                    'bermuda': '#78dcca',
                },
            },
            
        },
        variants: {},
        plugins: [],
    },

}
// )