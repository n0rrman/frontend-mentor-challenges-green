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
        strongCyan: 'hsl(var(--color-strongCyan) / <alpha-value>)',
        lightBlue: 'hsl(var(--color-lightBlue) / <alpha-value>)',
        
        darkGrayishBlue: 'hsl(var(--color-darkGrayishBlue) / <alpha-value>)',
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
