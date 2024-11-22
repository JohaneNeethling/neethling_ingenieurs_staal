/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        workers: "url('/src/media/Workers.png')",
        plans: "url('/src/media/Plans.png')",
      },
    },
  },
  plugins: [],
};
