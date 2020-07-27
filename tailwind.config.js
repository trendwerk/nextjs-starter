const colors = require('@tailwindcss/ui/colors')
const theme = require('tailwindcss/defaultTheme')
const config = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    colors: { ...colors, brand: colors.blue },
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
      inset: {
        '16': '4rem',
        '20': '5rem',
        '1/2': '50%',
        full: '100%',
      },
      width: {
        '3/8': '37.5%',
        '96': '24rem',
      },
    },
    screens: {
      '2xs': '360px',
      xs: '480px',
      ...theme.screens,
    },
  },
  variants: {
    borderRadius: [...config.variants.borderRadius, 'first', 'last'],
    borderWidth: [...config.variants.borderWidth, 'last'],
    display: [...config.variants.display, 'group-hover'],
    margin: [...config.variants.margin, 'last'],
    translate: [...config.variants.display, 'group-hover'],
  },
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js'],
    mode: 'all',
  },
}
