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
        lightCyan: 'hsl(var(--color-lightCyan) / <alpha-value>)',
        neonGreen: 'hsl(var(--color-neonGreen) / <alpha-value>)',
        
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
        darkGrayishBlue: 'hsl(var(--color-darkGrayishBlue) / <alpha-value>)',
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
