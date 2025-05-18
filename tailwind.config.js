/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'periwinkle': '#CDC7E5',
        'lavender-floral': '#9D80CB',
        'pomp-and-power': '#885A89',
        'pink-lavender': '#E0BAD7',
        'cambridge-blue': '#8FAD88',
        'linen': '#FFF5EB',
        'seashell': '#FFF6ED',
        'dark-purple': '#242038',
        'wisteria': '#B19AD6',
        'magnolia': '#EBE7EE'
      },
      width: {
        '9/10vw': '90vw',
      },
      height: {
        '9/10vh': '90vh',
      },
    },
  },
  plugins: [],
}

