import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors: {
        softRed: 'hsl(var(--color-softRed) / <alpha-value>)',
        cyan: 'hsl(var(--color-cyan) / <alpha-value>)',
        
        darkBrown: 'hsl(var(--color-darkBrown) / <alpha-value>)',
        mediumBrown: 'hsl(var(--color-mediumBrown) / <alpha-value>)',
        cream: 'hsl(var(--color-cream) / <alpha-value>)',
        veryPaleOrange: 'hsl(var(--color-veryPaleOrange) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}
export default config
