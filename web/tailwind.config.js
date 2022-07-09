/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          '0%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        "slide-in": 'slide-in 3s ease-in-out  ',
      }
    },
  },
  plugins: [  require('@tailwindcss/typography')],
}
