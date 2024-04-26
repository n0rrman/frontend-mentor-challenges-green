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
        primaryRed: 'hsl(var(--color-primaryRed) / <alpha-value>)',
        primaryBlue: 'hsl(var(--color-primaryBlue) / <alpha-value>)',

        white: 'hsl(var(--color-white) / <alpha-value>)',
        veryLightGrayishBlue: 'hsl(var(--color-veryLightGrayishBlue) / <alpha-value>)',
        lightGrayishBlue1: 'hsl(var(--color-lightGrayishBlue1) / <alpha-value>)',
        lightGrayishBlue2: 'hsl(var(--color-lightGrayishBlue2) / <alpha-value>)',
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
        darkGrayishBlue: 'hsl(var(--color-darkGrayishBlue) / <alpha-value>)',
        veryDarkBlue: 'hsl(var(--color-veryDarkBlue) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
