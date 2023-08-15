/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      '2xs': '500px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-nunito)'
      },
      colors: {
        main: '#0485B4'
      },
      boxShadow: {
        header: '0px 1px 30px rgba(0, 0, 0, 0.09)',
        sound: '0px 0px 30px rgba(0, 0, 0, 0.09)'
      },
      backgroundImage: {
        'lofi-rain': 'url("/bg/lofi-rain.gif")',
        'lofi-rain-thumb': 'url("/bg/lofi-rain-thumb.png")',
        'train-rain': 'url("/bg/train-rain.gif")',
        'train-rain-thumb': 'url("/bg/train-rain-thumb.png")',
        tree: 'url("/bg/tree.gif")',
        'tree-thumb': 'url("/bg/tree-thumb.png")',
        'camping-fire': 'url("/bg/camping-fire.gif")',
        'camping-fire-thumb': 'url("/bg/camping-fire-thumb.png")'
      },
      animation: {
        'background-change': 'background-change 300s 0s infinite',
        'background-change-sm': 'background-change 50s 0s infinite'
      },
      keyframes: {
        'background-change': {
          '0%': {
            background: '#0485B4'
          },
          '5.2631%': {
            background: '#0D7AB5'
          },
          '10.5262%': {
            background: '#16528E'
          },
          '15.7893%': {
            background: '#004761'
          },
          '21.0524%': {
            background: '#0A615C'
          },
          '26.3155%': {
            background: '#147B57'
          },
          '31.5786%': {
            background: '#226D6C'
          },
          '36.8417%': {
            background: '#2F5E81'
          },
          '42.1048%': {
            background: '#4940AA'
          },
          '47.3679%': {
            background: '#5A3080'
          },
          '52.6310%': {
            background: '#5A3080'
          },
          '57.8941%': {
            background: '#4940AA'
          },
          '63.1572%': {
            background: '#2F5E81'
          },
          '68.4204%': {
            background: '#226D6C'
          },
          '73.6835%': {
            background: '#147B57'
          },
          '78.9466%': {
            background: '#0A615C'
          },
          '84.2097%': {
            background: '#004761'
          },
          '89.4728%': {
            background: '#16528E'
          },
          '94.7359%': {
            background: '#0D7AB5'
          },
          '100%': {
            background: '#0485B4'
          }
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
