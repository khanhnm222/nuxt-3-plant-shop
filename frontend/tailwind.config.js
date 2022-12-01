/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "**/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': {
          DEFAULT: '#284139',
          100: 'hsl(152, 24%, 32%)',
          300: '#28413A',
          500: '#28413A',
          600: '#28413A',
          800: '#284139'
        },
        // 'brand-beige': {
        //   DEFAULT: '#c09763',
        //   100: '#C09782',
        //   200: '#C09775',
        //   300: '#C09751'
        // },
        // 'brand-brown-500': '#AE3924',
        // 'brand-orange': '#FF6721'
        'brand-grey': {
          300: '#828282',
          DEFAULT: '#898989',
          500: '#B5B5B5',
          600: '#5E5E5E',
          800: '#383838',
        },
        'brand-beige': {
          100: '#E5E5E5',
          200: '#E3D9CD',
          300: '#EAE5E0',
          DEFAULT: '#E9BA9E',
        },
        'brand-white': {
          DEFAULT: '#fff'
        },
        brandbeige: '#E9BA9E',
        'brand-brown-500': '#4E3924',
        'brand-orange': '#FF6721',
      },
      // screens: {
        // 'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        // 'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        // 'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        // 'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        // '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      // },
      fontFamily: {
        'heading': ['Roboto', 'sans-serif', 'Playfair Display', 'serif'],
        'body': ['Source Sans Pro']
      }
    },
  },
  plugins: [],
}
