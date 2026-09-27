/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep institutional navy and slate
        navy: {
          950: '#030B17', // deepest black-navy
          900: '#071527', // deep institutional navy background
          850: '#0B1E36', // dark surface
          800: '#0F294A', // card/panel surface on dark
          700: '#173D6B', // subtle borders/accents
          600: '#235694',
        },
        // Cool scientific blue (credibility & clarity)
        sci: {
          50: '#F0F6FE',
          100: '#DBE9FD',
          200: '#BFD7FC',
          300: '#93BEFA',
          400: '#5F9CF6',
          500: '#2563EB',
          600: '#1D4ED8', // Primary institutional accent
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },
        // Muted teal & cyan (computational biology, genomics)
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488', // Secondary scientific accent
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // Restrained warm gold / amber highlight (official Indian Govt / ICAR citations & CTAs)
        academic: {
          amber: '#B45309',
          gold: '#C59B27',
          goldLight: '#FEF3C7',
          goldDark: '#92400E',
        },
        // Warm off-white & clean academic slate
        surface: {
          ground: '#F8FAFC',
          card: '#FFFFFF',
          muted: '#F1F5F9',
          border: '#E2E8F0',
          darkBorder: '#1E293B',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Merriweather', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'display': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-xl': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.45', letterSpacing: '0' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
        'stat': ['2.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'academic': '0 2px 8px -2px rgba(15, 23, 42, 0.08), 0 1px 3px -1px rgba(15, 23, 42, 0.04)',
        'academic-hover': '0 8px 24px -4px rgba(15, 23, 42, 0.12), 0 2px 6px -2px rgba(15, 23, 42, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fadeIn': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
