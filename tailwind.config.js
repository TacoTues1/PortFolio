/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'theme-khaki',
    'theme-sand',
    'theme-olive',
    'theme-midnight',
    'theme-mono',
    'theme-light',
    'theme-dark',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        khaki: {
          50: '#faf7f2',
          100: '#f3ede1',
          200: '#e5d9c3',
          300: '#d5c2a1',
          400: '#c3b091',
          500: '#ae9973',
          600: '#927d58',
          700: '#736144',
          800: '#4e422f',
          900: '#2b251b',
          950: '#15130e',
        },
        primary: {
          50: '#faf7f2',
          100: '#f3ede1',
          200: '#e5d9c3',
          300: '#d5c2a1',
          400: '#c3b091',
          500: '#ae9973',
          600: '#927d58',
          700: '#736144',
          800: '#4e422f',
          900: '#2b251b',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Space Grotesk',
          'Plus Jakarta Sans',
          'sans-serif',
        ],
        mono: [
          'IBM Plex Mono',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.pink.600'),
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.pink.400'),
            },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}; 