import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: 'hsl(var(--color-lightGreen) / <alpha-value>)',
        green: 'hsl(var(--color-green) / <alpha-value>)',
        red: 'hsl(var(--color-red) / <alpha-value>)',

        white: 'hsl(var(--color-white) / <alpha-value>)',
        mediumGrey: 'hsl(var(--color-mediumGrey) / <alpha-value>)',
        darkGrey: 'hsl(var(--color-darkGrey) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
