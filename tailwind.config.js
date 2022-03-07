module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-nonav": "calc(100vh - 88px)",
      },
    },
  },
  plugins: [],
};
