import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#04101E",
          900: "#0F2343",
          800: "#152C52",
          700: "#1C3A66",
          500: "#2E4E80",
        },
        ink: "#16233D",
        gold: {
          DEFAULT: "#C9A227",
          light: "#F0CB7E",
          dim: "#B08E2A",
        },
        paper: "#F7F8FA",
        mist: "#EDEFF3",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(15, 35, 67, 0.25)",
        card: "0 10px 40px -12px rgba(15, 35, 67, 0.15)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
