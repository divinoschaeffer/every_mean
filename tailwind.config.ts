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
      },
      gray: {
        light: "#F3F2F2",
        medium: "#616161"
      },
      white: "#F5F5F5",
      black: "#000000",
      red: "#D35F5F"
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
