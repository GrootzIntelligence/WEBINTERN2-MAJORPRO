/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'black': '#000',
        'transparent': 'transparent',
        'white': '#fff',
        'gray': {
          800: '#333',
        },
        'blue': {
          600: '#1d4ed8',
        }
      },
    },
  },
  plugins: [],
}

