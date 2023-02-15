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
      }
    },
  },
  plugins: [],
}

