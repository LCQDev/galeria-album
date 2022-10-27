/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      oswald: ['Oswald', 'sans-serif'],
  },
    extend: {
      fontSize: {
        '3xl': '3rem'
      },
    },
  },
  plugins: [],
}
