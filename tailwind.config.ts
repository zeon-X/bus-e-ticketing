import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      sm: "360px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  daisyui: {
    themes: [
      {
        custom1: {
          "primary": "#006847",
          "secondary": "#DA924E",
          "accent": "#d6d3d1",
          "neutral": "#f8f8f8",
          "base-100": "#f3f4f6",
          "info": "#2e2c34",
          "success": "#079D49",
          "warning": "#AE5904",
          "error": "#F5324C",
          "white": "#FFFFFF",
          "offwhite": "#F7F7F7",
          "black": "#000000",
          "selecetd": "#384C6B",
        },
      },
      "light", "cupcake"
    ],
  },
  plugins: [require("daisyui")],

}
export default config
