// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{vue,js}',  
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        'mypink': {
          50: '#f4c4e2',
          100: '#e9aee0',
          200: '#e399dd',
          300: '#d885da',
          400: '#d170d7',
          500: '#e78ac9', // Your base pink color
          600: '#d074b3',
          700: '#b85f9e',
          800: '#9c4a89',
          900: '#803573',
        }
      }
    }
  },
  plugins: [],
}