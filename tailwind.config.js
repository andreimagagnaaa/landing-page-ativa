/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#002B49",
      secondary: "#EDF0F2",
      white: "#FFFFFF",
      transparent: "transparent",
      current: "currentColor",
      
      // Mapeamento de compatibilidade
      gray: {
        50: "#EDF0F2",
        100: "#EDF0F2", 
        200: "#EDF0F2",
        300: "#EDF0F2", // borders often use 300
        400: "#002B49", // mid-tones becoming dark for contrast
        500: "#002B49",
        600: "#002B49",
        700: "#002B49",
        800: "#002B49",
        900: "#002B49",
        950: "#002B49",
      },
      blue: {
        50: "#EDF0F2",
        100: "#EDF0F2",
        200: "#EDF0F2",
        300: "#EDF0F2", // CAREFUL: Was White, now Secondary for safety (better visibility on White if accidental). But on dark bg it's okay.
        400: "#EDF0F2",
        500: "#002B49",
        600: "#002B49",
        700: "#002B49",
        800: "#002B49",
        900: "#002B49",
      },
      green: {
        50: "#EDF0F2",
        100: "#EDF0F2",
        400: "#002B49", 
        500: "#002B49", 
        600: "#002B49", 
        700: "#002B49",
      },
      red: {
        500: "#002B49",
        100: "#EDF0F2",
        700: "#002B49"
      },
      yellow: {
        500: "#002B49",
        100: "#EDF0F2",
        300: "#002B49"
      },
      purple: {
        100: "#EDF0F2",
        700: "#002B49"
      },
      orange: {
        100: "#EDF0F2",
        700: "#002B49"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        md: '4rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '12rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        title: ['Barlow', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}