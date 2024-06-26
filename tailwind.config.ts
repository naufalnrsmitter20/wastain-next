const flowbite = require("flowbite-react/tailwind");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-green": "#4F6F52",
        "gray-1": "#BFC9D9",
        "gray-2": "#8D96AA",
        "gray-3": "#6D7588",
        "gray-4": "#ECF1F4",
        "dark-green": "#1A4D2E",
        "light-green": "#00AA5B",
        "primary-black": "#252525",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
