/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        'muted-foreground': 'rgb(var(--muted-foreground))',
        card: 'rgb(var(--card))',
        border: 'rgb(var(--border))',
        ring: 'rgb(var(--ring))',
        customPink: '#FF7070',
      },
    },
  },
  plugins: [],
};