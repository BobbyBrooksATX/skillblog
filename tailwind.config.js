const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['System', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        //'display': ['Rock Salt', ...defaultTheme.fontFamily.display],
      },
      colors: {
        primary: colors.pink,
        accent: withOpacityValue('--color-primary'),
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.gray.700'),
              textDecoration: 'none',
              borderBottom: '2px solid #ec4899',
              '&:hover': {
                color: '#1a1a1a !important',
                backgroundColor: '#ec4899',
                borderBottomColor: theme('colors.primary.700'),
                borderBottom: '2px solid #db2777',
              },
              code: { color: theme('colors.primary.600') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontFamily: 'Rock Salt',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
              marginTop: '2rem',
              marginBottom: '0.5rem',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.yellow.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              textDecoration: 'none',
              borderBottom: '2px solid #eab308',
              color: theme('colors.gray.300'),
              transition: '200ms',
              '&:hover': {
                background: '#eab308',
                color: '#111 !important',
              },
              code: { color: theme('colors.yellow.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
              marginTop: '2rem',
              marginBottom: '0.5rem',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
