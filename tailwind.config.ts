import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
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
