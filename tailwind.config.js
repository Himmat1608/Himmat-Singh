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
        background: '#0B0B0B',
        surface: {
          DEFAULT: '#111111',
          secondary: '#151515',
          hover: '#181818',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
        },
        primary: '#F3F3F0',
        secondary: '#A1A1A1',
        tertiary: '#707070',
        accent: {
          DEFAULT: '#2ED47A',
          subtle: 'rgba(46, 212, 122, 0.12)',
        },
      },
      fontFamily: {
        heading: ['"General Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['"General Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        'content': '1200px',
        'hero': '760px',
        'paragraph': '640px',
      },
      letterSpacing: {
        'hero-name': '-0.04em',
        'hero-statement': '-0.03em',
        'title': '-0.02em',
      },
      borderRadius: {
        'btn': '8px',
        'card': '16px',
        'module': '24px',
      },
    },
  },
  plugins: [],
};
