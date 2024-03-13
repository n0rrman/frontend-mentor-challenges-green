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
        primaryDarkBlue: 'hsl(var(--color-primaryDarkBlue) / <alpha-value>)',
        primaryDesaturatedBlue: 'hsl(var(--color-primaryDesaturatedBlue) / <alpha-value>)',
        
        accentBlue: 'hsl(var(--color-accentBlue) / <alpha-value>)',
        accentCyan: 'hsl(var(--color-accentCyan) / <alpha-value>)',
        
        neutralBlue: 'hsl(var(--color-neutralBlue) / <alpha-value>)',
        neutralGray: 'hsl(var(--color-neutralGray) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
