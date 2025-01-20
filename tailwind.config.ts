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
      fontFamily: {
        judson: ["Judson", "serif"],
        quattrocento: ["Quattrocento Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        yrsa: ["Yrsa", "serif"],
        kalufonia: ["Kalufonia", "sans-serif"],
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        strong:
          "2px 2px 4px rgba(0, 0, 0, 0.5), 0px 0px 8px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        'sm385': '385px', //custom breakpoints
        'sm425': '425px', 
        'sm470': '470px', 
        'sm550': '550px', 


      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: { matchUtilities: any; theme: any }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    },
  ],
};

export default config;
