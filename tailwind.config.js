/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}

