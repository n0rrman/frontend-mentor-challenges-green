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
        pink: 'hsl(var(--color-pink) / <alpha-value>)',
        lightPink: 'hsl(var(--color-lightPink) / <alpha-value>)',
        lightRed: 'hsl(var(--color-lightRed) / <alpha-value>)',

        veryDarkCyan: 'hsl(var(--color-veryDarkCyan) / <alpha-value>)',
        veryPaleBlue: 'hsl(var(--color-veryPaleBlue) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
