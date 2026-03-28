/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        surface: "#f5f5f8",
        text: "#1a1a1a",
        secondary: "#4A4A4A",
        accent: "#a60008",
        'accent-dark': "#820b0b",
      },
      fontFamily: {
        heading: ["'Inter'", "-apple-system", "system-ui", "sans-serif"],
        body: ["'Inter'", "-apple-system", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
