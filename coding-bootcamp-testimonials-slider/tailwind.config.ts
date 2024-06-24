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
        darkblue: 'hsl(var(--color-darkblue) / <alpha-value>)',
        grayishblue: 'hsl(var(--color-grayishblue) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
