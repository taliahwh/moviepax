const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#faca0c',
        secondary: '#2b2525',
      },
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '85rem',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/aspect-ratio')],
};
