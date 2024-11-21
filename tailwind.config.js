/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scans all your React files for Tailwind classes
  theme: {
    extend: {
      backgroundImage: {
        workers: "url('/src/media/Workers.png')", // Hardcode the image path here
        plans: "url('/src/media/Plans.png')", // Hardcode the image path here
      },
    },
  },
  plugins: [],
};
