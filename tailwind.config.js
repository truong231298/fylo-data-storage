/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'PaleBlue': 'hsl(243, 100%, 93%)',
        'GrayishBlue': 'hsl(229, 7%, 55%)',
        'DarkBlue': 'hsl(228, 56%, 26%)',
        'VeryDarkBlue': 'hsl(229, 57%, 11%)',
        'custom-yellow': 'hsl(6, 100%, 80%)',
        'custom-pink': 'hsl(335, 100%, 65%)',
      },
      backgroundImage:{
        "bg-Desktop": "url('/images/bg-desktop.png')",
        "bg-mobile": "url('/images/bg-mobile.png')"
      }
    },
  },
  plugins: [],
}