/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desk": "url(/images/heroImg.png)",
      },
      colors: {
        pinkf: "#FBF3FE",
        mainc: "#854A9A",
        hovc: "rgba(240, 198, 255, 0.87)",
        blackt: "#3A3838",
      },
    },
  },
  plugins: [],
};
