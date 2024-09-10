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
      },
      colors: {
        primary: '#020202',
        secondary: '#F8F7F3'
      }
    },
      fontFamily: {
        poppins: ['Poppins']
    },
  },
  plugins: [],
}

