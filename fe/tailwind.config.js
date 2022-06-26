/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        correct: "#6AAA64",
        correctHover: "#69BC60",
        incorrect: "#787C7E",
        baseCol: "#D3D6DA"
      }
    },
  },
  plugins: [],
}
