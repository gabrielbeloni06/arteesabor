import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FFF8F0',
          orange: '#FF7E21',
          brown: '#4A2C2A',
          red: '#D9381E',
          green: '#3D5A28',
        }
      },
    },
  },
  plugins: [],
};
export default config;