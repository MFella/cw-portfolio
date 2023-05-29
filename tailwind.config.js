/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    'bg-blue-gray-500',
    'text-blue-gray-500',
    'border-blue-gray-500',
    'hover:bg-blue-gray-500',
  ],
  theme: {
    extend: {
      colors: {
        "blue-gray": {
          100: '#2c36471a',
          200: '#2c364740',
          300: '#2c364780',
          500: '#2c3647b3',
          700: '#2c3647',
        },
      },

    },
  },
  darkMode: 'class',
  plugins: [],
};
