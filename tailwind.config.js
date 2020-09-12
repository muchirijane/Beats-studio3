module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        xsm: '320px',
        lmd: '425px',
        xxl: '1400px',
        xxxl: '1600px',
        bigdesktop: '1920px'
      },
      fontSize: {
        '8xl': '5rem',
        largeTitle: '6rem',
        largeText: '1.75rem',
        titlexl: '7rem',
        titlexxl: '8rem',
        titleHuge: '10rem',
        titlextra: '11rem',
        xsText: '0.06rem',
        xxsm: '0.008rem'

      },
      colors: {
        darkBlack: '#1E1E1E',
        SecondaryColor: '#FBF4EE',
        lightgray: '#4D4B4B',
        btnBg: '#FFEDDE',
        darkBrown: '#B55A05',
        hoverBorders: '#FFAB5D',
        hoverColor: '#FFAB5E',
        menuText: '#DEDEDE'
      },
      fontFamily: {
        bodyFont: ['Nunito'],
        titleFont: ['Roboto']
      },
      backgroundImage: {
        'beats-logo': 'img/beats-logo-bg.svg',
      },
      boxShadow: {
        btnShadow: '0px 5px 20px rgba(170, 77, 0, 0.32)',
        imgShadow: '0px 6px 40px rgba(0, 0, 0, 0.25)'
      },
      inset: {
        '-5': '-0.3rem',
        '-20': '-1.25rem',
        '20': '20rem',
        '50': '50%',
        'p40': '40%',
      },
      spacing: {
        '70': '20rem',
        '75': '30rem',
        '80': '36rem',
        '85': '45rem',
      }
    },
  },
  variants: {},
  plugins: [],
}