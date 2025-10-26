/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',    // Coral
        secondary: '#FFD93D',  // Sunflower yellow
        accent: '#6BCB77',     // Minty green
        bgLight: '#FFF1E6',    // Soft cream
        bgDark: '#1E1E2F',     // Dark navy
      },
      fontFamily: {
      fancy: ['"Dancing Script"', 'cursive'],
      body: ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [],
};

