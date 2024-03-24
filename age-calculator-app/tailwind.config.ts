import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors: {
        purple: 'hsl(var(--color-purple) / <alpha-value>)',
        lightRed: 'hsl(var(--color-lightRed) / <alpha-value>)',

        white: 'hsl(var(--color-white) / <alpha-value>)',
        offWhite: 'hsl(var(--color-offWhite) / <alpha-value>)',
        lightGray: 'hsl(var(--color-lightGray) / <alpha-value>)',
        smokeyGray: 'hsl(var(--color-smokeyGray) / <alpha-value>)',
        offBlack: 'hsl(var(--color-offBlack) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
