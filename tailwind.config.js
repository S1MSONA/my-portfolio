/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  lighMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
        neon: "0 0 10px rgba(0, 255, 0, 0.5)",
      },

      opacity: {
        10: "0.1",
        90: "0.9",
      },
      padding: {
        38: "150px",
      },
    },
  },
  plugins: [],
};
