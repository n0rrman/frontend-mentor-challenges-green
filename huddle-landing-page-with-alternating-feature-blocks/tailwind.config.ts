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
        
        paleCyan: 'hsl(var(--color-paleCyan) / <alpha-value>)',
        darkCyan: 'hsl(var(--color-darkCyan) / <alpha-value>)',
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
      },
      screens: {
        'lg': '1040px'
      }
    }
  },
  plugins: [],
}
export default config
