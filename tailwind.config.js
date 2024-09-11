/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeImage: 'url("../src/assets/images/homeImage.jpg")',
        homeImageShadowLeft: 'linear-gradient(to right, rgba(2, 2, 2, 0.5) 0%, rgba(2, 2, 2, 0) 100%)',
        homeImageShadowRight: 'linear-gradient(to left, rgba(2, 2, 2, 0.5) 0%, rgba(2, 2, 2, 0) 100%)',
        journeyUnej: 'url("../src/assets/images/journey/fotoUnejBackground.jpg")',
        journeyBB: 'url("../src/assets/images/journey/fotoBBBackground.jpg")',
        journeyRG: 'url("../src/assets/images/journey/fotoRGBackground.jpg")',
        journeyGoto: 'url("../src/assets/images/journey/fotoGotoBackground.jpg")',
        journeyShadow: 'linear-gradient(to left, rgba(2, 2, 2, 0.5) 0%, rgba(2, 2, 2, 0.5) 100%)',
        gotoShadow: 'linear-gradient(to left, rgba(217, 217, 217, 0.3) 0%, rgba(217, 217, 217, 0.3) 100%)'
      },
      backgroundSize: {
        zoom: '180%'
      },
      colors: {
        primary: '#020202',
        secondary: '#F8F7F3',
        element1: '#222F3E',
        element2: '#576574',
      }
    },
      fontFamily: {
        poppins: ['Poppins']
    },
  },
  plugins: [],
}

