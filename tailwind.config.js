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
        'p1':"url('./images/partners/partner1.png')",
        'p2':"url('./images/partners/partner2.png')",
        'p3':"url('./images/partners/partner3.png')",
        'p4':"url('./images/partners/partner4.png')",
        'p5':"url('./images/partners/partner5.png')",
        'p6':"url('./images/partners/partner6.png')",
        'p7':"url('./images/partners/partner7.png')",
        'p8':"url('./images/partners/partner8.png')",
        'p9':"url('./images/partners/partner9.png')",
        'p10':"url('./images/partners/partner10.png')",
        'p11':"url('./images/partners/partner11.png')"
      },
      boxShadow: {
        'inner-black': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

