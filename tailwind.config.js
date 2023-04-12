/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'bg-purple': '#19171E',
      'bg-dark-purple': "#141316",
      'elem-purple': '#9F60D1',
      'primary-light-purple': '#F1E8F8',
      'secondary-light-purple': "#CBC1D3",
      'third-light-purple': "#938F96",
    },
  },
  plugins: [],
}
