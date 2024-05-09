/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'covered-by-your-grace': ['Covered By Your Grace', 'cursive'],
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

