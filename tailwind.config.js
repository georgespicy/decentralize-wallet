/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
      colors: {
        primary: {
          50: "#eff9ff",
          100: "#def1ff",
          200: "#b6e6ff",
          300: "#75d3ff",
          400: "#2dbdff",
          500: "#019dea",
          600: "#0084d3",
          700: "#0069aa",
          800: "#00588c",
          900: "#064a74",
          950: "#042f4d",
        },
        secondary: {
          50: "#f3f7fc",
          100: "#e5eff9",
          200: "#c6ddf1",
          300: "#94c2e5",
          400: "#5ba1d5",
          500: "#3686c1",
          600: "#2669a3",
          700: "#205584",
          800: "#1e496e",
          900: "#1e3e5c",
          950: "#0e1c2b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        "passion-one": ["var(--font-passion-one)"],
        urbanist: ["var(--font-urbanist)"],
      },
    },
    screens: {
      xs: "475px",
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      md: "15px",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
