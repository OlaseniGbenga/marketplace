/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        White: '#FFFFFF',
        ExtraLight: '#F5F5F7', 
        LightGray: '#D2D2D7',
        Gray: '#808080',
        DarkGray: '#424245',
        Black: '#121212',
        StatusSuccess: '#32936F',
        StatusError: '#F55F56',
      },
      fontFamily: {
        Gilroy: ['"Roboto"', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        
      },
      animation: {
        'moveup': 'moveup 500ms ease-in',
      },

      keyframes: {
        moveup: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(-20px)' },
          '75%': { transform: 'translateY(-30px)' },
        },
      },
      

    },
  },
  plugins: [],
}