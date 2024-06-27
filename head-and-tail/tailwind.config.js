/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1216': '76rem',
      },
      height: {
        '640': '40rem',
      }
    },
  },
  plugins: [],
}

