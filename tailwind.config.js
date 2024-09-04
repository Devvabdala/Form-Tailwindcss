/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.li-before': {
          position: 'absolute',
          height: '28px',
          width: '28px',
          'border-radius': '50%',
          'background-image': 'url(images/)', // Add your actual image path here
        },
      }, ['before']);
    },
  ],
}