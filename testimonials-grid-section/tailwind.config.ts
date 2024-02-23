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
        moderateViolet: 'hsl(var(--color-moderateViolet) / <alpha-value>)',
        veryDarkGrayishBlue: 'hsl(var(--color-veryDarkGrayishBlue) / <alpha-value>)',
        veryDarkBlackishBlue: 'hsl(var(--color-veryDarkBlackishBlue) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)',
        
        lightGray: 'hsl(var(--color-lightGray) / <alpha-value>)',
        lightGrayishBlue: 'hsl(var(--color-lightGrayishBlue) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
