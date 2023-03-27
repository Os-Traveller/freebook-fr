/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#d1e4fc",
          200: "#a3c9fa",
          300: "#74adf7",
          400: "#4692f5",
          500: "#1877f2",
          600: "#135fc2",
          700: "#0e4791",
          800: "#0a3061",
          900: "#051830",
        },
        white_gray: {
          100: "#f8f9fa",
          200: "#f0f3f5",
          300: "#e9ecf0",
          400: "#e1e6eb",
          500: "#dae0e6",
          600: "#aeb3b8",
          700: "#83868a",
          800: "#575a5c",
          900: "#2c2d2e",
        },

        black_gray: {
          100: "#d3d3d4",
          200: "#a7a8a8",
          300: "#7c7c7d",
          400: "#505151",
          500: "#242526",
          600: "#1d1e1e",
          700: "#161617",
          800: "#0e0f0f",
          900: "#070708",
        },
        black: {
          100: "#d1d1d1",
          200: "#a3a3a3",
          300: "#747576",
          400: "#464748",
          500: "#18191a",
          600: "#131415",
          700: "#0e0f10",
          800: "#0a0a0a",
          900: "#050505",
        },
      },
    },
  },
  plugins: [],
};
