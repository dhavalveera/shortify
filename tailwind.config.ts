import type { Config } from 'tailwindcss'

// Flowbite React
import flowbite from 'flowbite/plugin'

export default {
  content: ['node_modules/flowbite-react/lib/esm/**/*.js', './app/**/*.{js,jsx,ts,tsx}', './app/**/**/*.{js,jsx,ts,tsx}', './app/**/**/**/*.{js,jsx,ts,tsx}', './app/**/**/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
} satisfies Config

