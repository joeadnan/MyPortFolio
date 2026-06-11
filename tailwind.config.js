/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        display: ['"Clash Display"', '"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        brand: {
          50: "#f0f0ff",
          100: "#e4e4ff",
          200: "#cdcdff",
          300: "#ababff",
          400: "#8080ff",
          500: "#5c5cff",
          600: "#4040f0",
          700: "#3030d6",
          800: "#2828ae",
          900: "#252589",
          950: "#161650",
        },
        surface: {
          DEFAULT: "#0c0c1d",
          card: "#12122a",
          border: "#1e1e3f",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-left": "slideLeft 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px #5c5cff40" },
          "100%": { boxShadow: "0 0 30px #5c5cff90, 0 0 60px #5c5cff40" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
