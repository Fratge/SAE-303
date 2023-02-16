/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{.html, js}"],
  theme: {
    extend: {
      width: {
        '120': '47rem'
      },
      height: {
        '110': '34rem'
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
      }
    },
  },
  plugins: [],
}

