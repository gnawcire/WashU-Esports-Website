import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'washu-grey': '#3d3d3d',
        'washu-red': '#a51417',
      },
      fontFamily:{
        sourceSansBold: ['var(--font-source-sans-pro-bold'],
        sourceSansBoldIt: ['var(--font-sans-boldit'],
      },
    },
  },
  plugins: [],
}
export default config
