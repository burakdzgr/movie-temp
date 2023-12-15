const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary' : '#e50914',
        'secondary' : '#6c757d',
        'hover-bg' : '#ba0a13',
        'darkGray' : '#141314',
        'tableHeader' :'#272727',
        'socialBg' : '#343a40'
      },
      colors: {
        'primary' : '#e50914',
        'warning' : '#6c757d',
        'subtitle' : '#ffffffcc',
        'star' : '#ecba12',
    },
      borderColor: {
        'subBorder' : 'rgb(255 255 255 / 10%)',
      }
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '1rem 2rem !important',
          borderRadius: '.25rem !important',
          fontWeight: '600 !important',
        },
      })
    })
  ],
}