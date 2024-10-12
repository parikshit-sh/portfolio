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
        gVibes:["Great Vibes, cursive"],
        woodland:["Woodland"],
        mori:["Mori"],
        edgy:["Edgy"]
      }
    },
  },
  plugins: [],
};
export default config;
