/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'periwinkle': '#CDC7E5',
        'pomp-and-power': '#885A89',
        'cambridge-blue': '#8FAD88',
        'linen': '#FFF5EB',
      },
      width: {
        '9/10vw': '90vw',
      }
    },
  },
  plugins: [],
}

