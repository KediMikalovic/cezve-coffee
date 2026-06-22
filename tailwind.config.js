/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#2C4A3B",
        espresso: "#2E2018",
        cream: "#EFE6DA",
        orange: { DEFAULT: "#D9824A", dark: "#C56A33" },
        muted: "#7A857C",
        soft: "#D9D2C6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(44,74,59,0.25)",
        card: "0 24px 50px -18px rgba(44,74,59,0.38)",
        glow: "0 0 0 1px rgba(217,130,74,0.35), 0 26px 50px -18px rgba(217,130,74,0.5)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-22px) translateX(10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(8deg)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

