import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./domain/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#70727F",
        btnColor: "#3BAD6B",
        // Neutral Colors

        neutral: {
          1: "#1B1C20",
          2: "#383A47",
          3: "#70727F",
          4: "#CDCED8",
          5: "#FFFFFF",
        },
        // Background Colors
        background: {
          1: "#060809",
          2: "#474958",
          3: "#E8E9ED",
          4: "#F8F8FA",
          5: "#FFFEFC",
          6: "#F9FAFB",
          7: "#E7F7EB",
          8: "#F9F9FC",
        },
        // Primary Colors
        primary: {
          1: "#E26336",
          2: "#F6BF25",
          3: "#DA2750",
          4: "#3BAD6B",
          5: "#2D2E2C",
          6: "#32A061",
        },
        // Primary Light Colors
        "primary-light": {
          1: "#E67B55",
          2: "#F7C436",
          3: "#E14E70",
          4: "#52C482",
        },
        // Secondary Color
        secondary: "#2A3735",
      },
      fontFamily: {
        "br-firma": ["BR Firma", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;