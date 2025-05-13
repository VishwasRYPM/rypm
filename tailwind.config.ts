import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-from-left': {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 0.9 }
        },
        'slide-from-right': {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 0.9 }
        }
      },
      animation: {
        'slide-from-left': 'slide-from-left 0.3s ease-out forwards',
        'slide-from-right': 'slide-from-right 0.3s ease-out forwards'
      }
    }
  },
  plugins: [],
}

export default config
