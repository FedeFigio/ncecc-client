module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "luckiest-guy": ["Luckiest Guy", "ui-sans-serif", "system-ui"],
        "fascinante-inline": [
          "Fascinante Inline",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      colors: {
        dark: "#202124",
      },
    },
  },
  plugins: [],
};
