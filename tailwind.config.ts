import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg : "var(--bg)",
        display : "var(--display)",
        card : "var(--card)",
        buttonNormalShadow : "var(--button-shadow)",
        buttonNormal : "var(--button-normal)",
        buttonNormalHover : "var(--button-normal-hover)",
        buttonDel : "var(--button-del)",
        buttonDelShadow : "var(--button-del-shadow)",
        buttonDelHover : "var(--button-del-hover)",
        buttonEq : "var(--button-eq)",
        buttonEqShadow : "var(--button-eq-shadow)",
        buttonEqHover : "var(--button-eq-hover)",
        text : "var(--text)",
        textEq : "var(--text-eq)",
        textNormal : "var(--text-normal)",
      },
    },
  },
  plugins: [],
};
export default config;
