import type { Config } from 'tailwindcss'

// Flowbite React
import flowbite from 'flowbite/plugin'

export default {
  content: ['node_modules/flowbite-react/lib/esm/**/*.js', './app/**/*.{js,jsx,ts,tsx}', './app/**/**/*.{js,jsx,ts,tsx}', './app/**/**/**/*.{js,jsx,ts,tsx}', './app/**/**/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: '#0A27AB',
        primaryLightBlue: '#5270fe',
      },
      backgroundColor: {
        primaryBgDarkBlue: '#0A27AB',
        primaryBgLightBlue: '#5270fe',
      },
    },
  },
  plugins: [flowbite],
} satisfies Config
