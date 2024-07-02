import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        firstColorYellow: "#a19108",
        secondColorDarkerYellow: "#807306",
        thirdColorGreen: "#00735e",
        fourthColorBrown: "#4b4737",
      },
      transformOrigin: {
        custom90and0: "90% 0%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
