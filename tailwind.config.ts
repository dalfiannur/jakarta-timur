import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { withTV } from "tailwind-variants/transformer";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": "var(--font-plus-jakarta-sans)",
        roboto: "var(--font-roboto)",
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "soft-white": "rgba(251, 251, 251, 1)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        light: "2px 2px 20px 1px rgba(0, 69, 105, 0.06)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".scrollbar-hidden": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
export default withTV(config);
