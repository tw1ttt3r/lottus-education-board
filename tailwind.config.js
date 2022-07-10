/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,jsx,js}"],
  theme: {
    extend: {
      screens: {
        'lg': {'min': '1024px'},
      },
    },
  },
  plugins: [],
}
