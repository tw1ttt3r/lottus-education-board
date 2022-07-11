/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,jsx,js}"],
  theme: {
    extend: {
      screens: {
        xs: { 'max': '1023px' },
        lg: {'min': '1024px'},
      },
    },
  },
  plugins: [],
}
