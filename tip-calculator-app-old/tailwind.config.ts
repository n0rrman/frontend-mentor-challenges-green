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
        
        darkCyan: 'hsl(var(--color-darkCyan) / <alpha-value>)',
        darkGrayishCyan: 'hsl(var(--color-darkGrayishCyan) / <alpha-value>)',
        grayishCyan: 'hsl(var(--color-grayishCyan) / <alpha-value>)',
        lightGrayishCyan: 'hsl(var(--color-lightGrayishCyan) / <alpha-value>)',
        lighterGrayishCyan: 'hsl(var(--color-lighterGrayishCyan) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
