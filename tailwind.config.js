/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        'surface-border': '#27272a',
        accent: {
          DEFAULT: '#10b981',
          hover: '#059669',
          light: '#34d399',
          dark: '#047857',
          glow: 'rgba(16, 185, 129, 0.15)',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Space Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
