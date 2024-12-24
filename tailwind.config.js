/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'my-img': "url('/src/images/bag.png')",
      },
    },
  },
  plugins: [],
}

