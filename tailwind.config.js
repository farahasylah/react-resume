/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerbg: '#D8DAFF',
        htmlbg: '#eceaff',
        grayColor: '#717171',
        lightgrayColor: '#e0e0e0',
        purpleColor: '#9297FF',
        whiteColor: '#fff',
        main: '#e11d48',
        darkmain: '#9f1239',
        secondary: '#3b82f6',
        info: '#dcdcfe',
        darkmodeBox: '#00000057'
      },
    },
  },
  plugins: [],
}
