import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic duotone palette: deep teal-black Red Sea night + warm amber stage glow
        abyss: '#04090c',
        midnight: '#071319',
        teal: {
          deep: '#0a2b30',
          sea: '#10474f',
          glow: '#1c6b6f',
        },
        amber: {
          glow: '#ffb15c',
          stage: '#ff8a3d',
          ember: '#ff5e2b',
        },
        bone: '#f3ede2',
        ash: '#9aa6a4',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'sans-serif'],
      },
      letterSpacing: {
        mega: '0.42em',
        wide2: '0.28em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.16)' },
        },
        floatHint: {
          '0%,100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards',
        fadeIn: 'fadeIn 1.4s ease forwards',
        slowZoom: 'slowZoom 28s ease-out infinite alternate',
        floatHint: 'floatHint 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
