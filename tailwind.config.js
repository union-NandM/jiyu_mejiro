const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        super: { widest: "2em" },
      },
      keyframes: {
        blink1: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.1" },
        },
        blink2: {
          "30%": { opacity: "1" },
          "80%": { opacity: "0.1" },
        },
        blink3: {
          "60%": { opacity: "1" },
          "10%": { opacity: "0.1" },
        },
      },
      animation: {
        blink11: "blink1 0.5s linear infinite",
        blink12: "blink1 0.75s linear infinite",
        blink13: "blink1 1s linear infinite",
        blink21: "blink2 0.5s linear infinite",
        blink22: "blink2 0.75s linear infinite",
        blink23: "blink2 1s linear infinite",
        blink31: "blink3 0.5s linear infinite",
        blink32: "blink3 0.75s linear infinite",
        blink33: "blink3 1s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-tap-highlighting": {
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        },
      });
    }),
  ],
};
