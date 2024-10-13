import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bit: ["PPMondwest"],
        gVibes: ["Great Vibes, cursive"],
        woodland: ["Woodland"],
        mori: ["Mori"],
        editorial: ["PPEditorial"]
      },
      colors: {
        light: {
          background: "#FAF9F6",
          text: "#121212",
          primary: "#eeff82",
        },
        dark: {
          background: "#121212",
          text: "#ffffff",
          primary: "#eeff82",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
