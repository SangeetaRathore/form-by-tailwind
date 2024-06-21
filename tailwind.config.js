/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

