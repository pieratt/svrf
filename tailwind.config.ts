import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-panama)'],
        mono: ['var(--font-panama-mono)'],
        serif: ['var(--font-panama)'],
        'inconsolata': ['var(--font-inconsolata)'],
        'dm-sans': ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
