/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2ea394',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}