import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tangerine: "#F26330",
        secondary: "#F3F4F6",
        secondarytext: "#6A7280",
        primary: "#020817",
      },
      gradientColorStops: {
        background: "rgb(242,99,48)",
        headgradient:
          "radial-gradient(circle, rgba(242,99,48,1) 0%, rgba(255,255,255,1) 100%)",
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [],
};
export default config;
