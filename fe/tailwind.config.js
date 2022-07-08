/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        correct: "#6AAA64",
        correctHover: "#69BC60",
        incorrect: "#787C7E",
        baseCol: "#D3D6DA",
        primary: {
          DEFAULT: '#FFFFFF',
          "dark": colors.slate[800],
          "darker": colors.slate[900],
        },
        secondary: {
          'light': "#e5e3e3",
          DEFAULT: "#D3D6DA",
          "dark": colors.slate[500],
          "darker": colors.slate[700],
        },
        accent: {
          "light": colors.blue[300],
          DEFAULT: colors.blue[600]
        },
        success: {
          'light': "#69BC60",
          DEFAULT: "#6AAA64",
        },
        warning: colors.yellow[500],
        error: {
          'light': colors.red[400],
          DEFAULT: colors.red[500],
        }
      }
    },
  },
  plugins: [],
}
