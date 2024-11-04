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
        "plus-jakarta-sans": "var(--font-plus-jakarta-sans)",
        roboto: "var(--font-roboto)",
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
  plugins: [],
};
export default config;
