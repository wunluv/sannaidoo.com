/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: '#FAF9F6',
        surface: '#FFFFFF',
        ink: '#1C1917',
        muted: '#78716C',
        border: '#E7E5E4',
        accent: {
          DEFAULT: '#B45309',
          hover: '#92400E',
          light: '#FEF3C7',
          soft: '#FFFBEB',
        },
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '1rem',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(28, 25, 23, 0.06)',
      },
    },
  },
  plugins: [],
};
