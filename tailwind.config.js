/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./public/index.html',],
  theme: {
    extend: {
      colors:{
        'invar-dark':'#1B161D',
        'invar-light-dark':"#18141B",
        'invar-light':"#b4b7c0",
        'primary':"#43324B",
      },
      backgroundImage:{
        'bg1':"url('./images/bg1.png')",
        'bgdeveloping':"url('./images/developing.png')",
      },
      boxShadow: {
        'inner-black': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

