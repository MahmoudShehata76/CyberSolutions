import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0b5ed7",
          dark: "#083b82",
        },
        secondary: "#00b7ff",
        navy: {
          DEFAULT: "#071423",
          light: "#0d2036",
          dark: "#050d18",
        },
        gray: {
          light: "#edf2f8",
          DEFAULT: "#a7b2bf",
        }
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex)", "Segoe UI", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 15px 35px rgba(11, 94, 215, 0.45), 0 0 20px rgba(0, 183, 255, 0.2)",
        card: "0 15px 40px rgba(0,0,0,0.08)",
        "card-hover": "0 25px 60px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
