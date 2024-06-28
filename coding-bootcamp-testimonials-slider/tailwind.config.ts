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
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
        grayishBlue: 'hsl(var(--color-grayishBlue) / <alpha-value>)',
      },
      keyframes: {
        scaleIn: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: "0"
          },
          '75%': {
            transform: 'scale(1.02)'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: "1"
          }
        },
        floatRight: {
          '0%': { transform: 'translateX(10rem)', opacity: "0" },
          '70%': { transform: 'translateX(-0.5rem)' }, 
          '100%': { transform: 'translateX(0vw)', opacity: "1"}, 
        },
        floatLeft: {
          '0%': { transform: 'translateX(-5rem)', opacity: "0" },
          '70%': { transform: 'translateX(0.25rem)' }, 
          '100%': { transform: 'translateX(0vw)', opacity: "1"}, 
        },
      },
      animation: {
        scaleIn: 'scaleIn 0.3s ease-out',
        floatRight: 'floatRight 0.4s ease-out',
        floatLeft: 'floatLeft 0.4s ease-out',
      },
    }
  },
  plugins: [],
}
export default config
