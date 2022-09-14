/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      colors: {
        default: '#F53838'
      },
      boxShadow: {
        '3xl': '0 35px 80px 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
