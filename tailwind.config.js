const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'IRsans': ['"IRAN Sans"'],
    },
    extend: {
      screens : {
        '2xl' : "1440px"
      },
      colors : {
        'bg-back' : '#F0F0F0',
        'shimi-blue' : '#345DEA ',
        'header-blue' : '#738CBB',
        'button-blue' : '#536CC0',
        'product-blue-1' : '#6B86E3',
        'product-blue-2' : '#263A7E',
        'footer-1' : '#728ADB',
        'footer-2' : '#3753B2',
      },
      backgroundImage: {
        'bg-img-1': "url('/Rectangle 427.png')",
      }
    },
  },
  plugins: [],
}