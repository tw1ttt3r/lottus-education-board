/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,jsx,js}"],
  theme: {
    extend: {
      screens: {
        xs: { 'max': '1023px' },
        lg: {'min': '1024px'},
      },
      fontFamily: {
        roboto: ['Roboto Mono', "monospace"],
        spaceRoboto: ['Space Mono', "monospace"],
      }
    },
  },
  plugins: [],
}
