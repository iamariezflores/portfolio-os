/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'task-brown' : '#23120B',
        'start-below' : '#D1512D',
        'start-above' : '#411530',
      }
    },
  },
  plugins: [],
}
