/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#343232',
          secondary: '#343232',
          accent: '#343232',
          neutral: '#272626',
          'base-100': 'black',
          info: '#33A3D7',
          success: '#1BAC6B',
          warning: '#F69F09',
          error: '#E87DA1',
        },
      },
      "black"
    ],
  },
};
