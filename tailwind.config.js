module.exports = {
  purge: [],
  theme: {
    extend: {
      fontSize: {
        largeTitle: '6rem',
        largeText: '1.75rem',
        titlexxl: '9rem'

      },
      colors: {
        darkBlack: '#1E1E1E',
        SecondaryColor: '#FBF4EE',
        lightgray: '#4D4B4B',
        btnBg: '#F8E6D8',
        btnTextColor: '#B55A05',
        hoverBorders: '#FFAB5D',
        hoverColor: '#FFAB5E',
        menuText: '#DEDEDE'
      },
      fontFamily: {
        bodyFont: ['Nunito'],
        titleFont: ['Roboto']
      },
      boxShadow: {
        btnShadow: '0px 5px 30px rgba(255, 171, 94, 0.15)',
        imgShadow: '0px 6px 40px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        'golden-headphone': 'url(public/img/black-golden-headphone.svg)',
      }
    },
  },
  variants: {},
  plugins: [],
}