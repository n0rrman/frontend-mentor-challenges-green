import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      fullSlider: 'hsl(var(--color-fullSlider) / <alpha-value>)',
      sliderBg: 'hsl(var(--color-sliderBg) / <alpha-value>)',
      discountBg: 'hsl(var(--color-discountBg) / <alpha-value>)',
      discountText: 'hsl(var(--color-discountText) / <alpha-value>)',
      ctaText: 'hsl(var(--color-ctaText) / <alpha-value>)',
      
      pricingCompBg: 'hsl(var(--color-pricingCompBg) / <alpha-value>)',
      mainBg: 'hsl(var(--color-mainBg) / <alpha-value>)',
      emptySlider: 'hsl(var(--color-emptySlider) / <alpha-value>)',
      toggleBg: 'hsl(var(--color-toggleBg) / <alpha-value>)',
      text: 'hsl(var(--color-text) / <alpha-value>)',
      ctaBg: 'hsl(var(--color-ctaBg) / <alpha-value>)',
    }
  },
  plugins: [],
}
export default config
