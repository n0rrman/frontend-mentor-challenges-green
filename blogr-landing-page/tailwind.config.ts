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
        ctaText: 'hsl(var(--color-ctaText) / <alpha-value>)',
        ctaHoverBg: 'hsl(var(--color-ctaHoverBg) / <alpha-value>)',
        headings: 'hsl(var(--color-headings) / <alpha-value>)',
        bodyCopy: 'hsl(var(--color-bodyCopy) / <alpha-value>)',
        footerText: 'hsl(var(--color-footerText) / <alpha-value>)',
        footerBg: 'hsl(var(--color-footerBg) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
