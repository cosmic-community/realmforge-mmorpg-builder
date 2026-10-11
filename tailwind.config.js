/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forge-bg': '#0a0a0f',
        'forge-surface': '#12121e',
        'forge-surface-elevated': '#1a1a2e',
        'forge-primary': '#6d28d9',
        'forge-primary-glow': '#7c3aed',
        'forge-accent': '#f59e0b',
        'forge-text': '#e2e8f0',
        'forge-text-muted': '#64748b',
        'forge-error': '#ef4444',
        'forge-success': '#10b981',
        'forge-border': 'rgba(109, 40, 217, 0.3)',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(124, 58, 237, 0.5)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.5)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}