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
        paleBlue: 'hsl(var(--color-paleBlue) / <alpha-value>)',
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
        veryDarkBlue: 'hsl(var(--color-veryDarkBlue) / <alpha-value>)',
        
        gradientFrom: 'hsl(var(--color-gradientFrom) / <alpha-value>)',
        gradientTo: 'hsl(var(--color-gradientTo) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config



