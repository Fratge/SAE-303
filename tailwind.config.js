/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{.html, js}"],
  theme: {
    extend: {
      width: {
        '120': '47rem',
        '115' : '33rem',
        '116': '38rem',
        '105' : '29.67rem'
      },
      height: {
        '110': '34rem',
        '116': '38rem',
        '120': '45rem',
      },
      fontSize: {
        '10xl': '12rem',
      },
      fontFamily: {
        'inter': ['Inter']
      },
      colors: {
        'blue-gradient': '#7FEEC3',
        'blue-gradient2': '#5C83DE',
        'main': '#0E0E0E',
        'purple-gradient': '#FF79C6',
        'purple-gradient2': '#6854EF',
        'light-dark': '#161616',
        'light-border': '#515151',
        'light-grey': '#808080',
        'smooth-purple' : '#D36FD2',
        'fondlight': '#161616',
        'contour': '#515151',
      }
    },
  },
  plugins: [],
}

