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
        journeyBB2: 'url("../src/assets/images/journey/fotoBBBackground2.jpg")',
        journeyRG: 'url("../src/assets/images/journey/fotoRGBackground.jpg")',
        journeyGoto: 'url("../src/assets/images/journey/fotoGotoBackground.jpg")',
        shadow: 'linear-gradient(to left, rgba(2, 2, 2, 0.5) 0%, rgba(2, 2, 2, 0.5) 100%)',
        gotoShadow: 'linear-gradient(to left, rgba(217, 217, 217, 0.3) 0%, rgba(217, 217, 217, 0.3) 100%)',
        projectBackground: 'url("../src/assets/images/projects/background.jpg")',
        projectMojaveBackground: 'url("../src/assets/images/projects/mojaveBackground.jpg")',
        projectKanbanBackground: 'url("../src/assets/images/projects/kanbanBackground.jpg")',
        projectTokpedBackground: 'url("../src/assets/images/projects/tokpedBackground.jpg")',
        projectGacoanBackground: 'url("../src/assets/images/projects/gacoanBackground.jpg")',
      },
      backgroundSize: {
        zoomContent: '120%',
        zoom: '160%'
      },
      colors: {
        primary: '#000000',
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

