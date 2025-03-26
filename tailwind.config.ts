import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue-dark': '#0F2027',
        'custom-blue-middle': '#203A43',
        'custom-blue-light': '#2C5364',
      },
      screens: {
        'xs': '633px', // Novo breakpoint para 633px
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
        'custom-gradient-blue': 'radial-gradient(circle 710px at 5.2% 7.2%, rgba(37,89,222,1) 0%, rgba(37,89,222,1) 7.5%, rgba(4,4,29,1) 44.7%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
