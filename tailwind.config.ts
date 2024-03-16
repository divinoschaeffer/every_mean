import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      blue: "#5FACD3",
      violet:{
        light: "#D6D9FF",
        medium: "#B4BAFF",
        dark: "#929AFF"
      }
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
