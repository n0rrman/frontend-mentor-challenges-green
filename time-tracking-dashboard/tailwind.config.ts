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
        blue: 'hsl(var(--color-blue) / <alpha-value>)',

        work: 'hsl(var(--color-work) / <alpha-value>)',
        play: 'hsl(var(--color-play) / <alpha-value>)',
        study: 'hsl(var(--color-study) / <alpha-value>)',
        exercise: 'hsl(var(--color-exercise) / <alpha-value>)',
        social: 'hsl(var(--color-social) / <alpha-value>)',
        selfCare: 'hsl(var(--color-selfCare) / <alpha-value>)',
        
        veryDarkBlue: 'hsl(var(--color-veryDarkBlue) / <alpha-value>)',
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
        desaturatedBlue: 'hsl(var(--color-desaturatedBlue) / <alpha-value>)',
        paleBlue: 'hsl(var(--color-paleBlue) / <alpha-value>)',

      }
    }
  },
  plugins: [],
}
export default config
