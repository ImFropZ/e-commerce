/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D1E2C4",
        "primary-900": "#778A35",
        secondary: "#D9D9D9",
        tertiary: "#EBEBE8",
      },
    },
  },
  plugins: [],
};
