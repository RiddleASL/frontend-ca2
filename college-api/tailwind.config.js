/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
	theme: {
		extend: {
      colors: {
        'bg-dark': '#1d232a',
        'bg-dark-alt': '#3f4b5c',
        'bg-light': '#f5f5f5',
        'bg-light-alt': '#ebebeb',
        'text-light': '#f5f5f5',
        'text-dark': '#262522',
        'primary': {
          "light" : '#C4D4F2',
          'light-alt' : '#b8c8e5',
          'dark' : '#4b45b2',
          'dark-alt' : '#874dcc',
        },
      },
    },
    fontSize: {
      '1': '4rem',
      '2': '3rem',
      '3': '2rem',
      '4': '1.5rem',
      '5': '0.75rem',
    },
	},
	plugins: [require("daisyui")],
};
