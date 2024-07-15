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
        lime: 'hsl(var(--color-lime) / <alpha-value>)',
        red: 'hsl(var(--color-red) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)',
        slate: {
          100: 'hsl(var(--color-slate-100) / <alpha-value>)',
          300: 'hsl(var(--color-slate-300) / <alpha-value>)',
          500: 'hsl(var(--color-slate-500) / <alpha-value>)',
          700: 'hsl(var(--color-slate-700) / <alpha-value>)',
          900: 'hsl(var(--color-slate-900) / <alpha-value>)',
        }
      }
    }
  },
  plugins: [],
}
export default config
