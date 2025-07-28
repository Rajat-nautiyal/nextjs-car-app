/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // add more paths as needed
  ],
  theme: {
    extend: {
      screens: {
        'mob': { max: '480px' },
        'max-sm': { max: '640px' },
        'max-md': { max: '768px' },
        'max-tl': { min: '769px', max: '1000px' },
      },
    },
  },
  plugins: [],
};
