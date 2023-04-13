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
      'black': 'rgba(16,14,19,0.51)',
      'bg-light-purple': "#1F1D25",
      'featured-project-hover': "rgba(128,41,196,0.62)",
      'featured-project-SM': "#451f5d",
      'elem-purple': '#9F60D1',
      'primary-light-purple': '#F1E8F8',
      'secondary-light-purple': "#CBC1D3",
      'third-light-purple': "#938F96",
    },
  },
  plugins: [],
}
