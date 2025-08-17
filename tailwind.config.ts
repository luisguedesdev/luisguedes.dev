import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ciano: "#00D1FF",
        turquesa: "#00A2DA",
        azul: "#0073B4",
        marinho: "#0A0F24",
      },
    },
  },
  plugins: [],
};
export default config;
