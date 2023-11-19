/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': "#FFF",
        'colorOne': '#6A859C',
        'colorTwo': '#676770',
        'colorThree': '#69B9FF'
      },
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif']
      },
      backgroundColor: {
        'bg': '#69B9FF',
        'bg2': '#192024'
      },
      letterSpacing: {
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
      },
      backgroundImage: {
        'velocity': "url('./src.assets/img/bgVelocity.png')"
      },
      borderRadius: {
        '4px': '4px',
      }
    },
  },
  plugins: [],
}

