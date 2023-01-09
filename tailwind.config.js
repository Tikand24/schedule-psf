/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx,tsx}',
    './components/**/*.{html,js,jsx,tsx}',
    './sections/**/*.{html,js,jsx,tsx}',
    './styles/**/*.{js,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3ca6b9',
        'secondary-orange': '#FFEFE2',
        'primary-white': '#FCF3FD',
        'secondary-white': '#FAFAFA',
      },
    },
  },
  plugins: [],
}