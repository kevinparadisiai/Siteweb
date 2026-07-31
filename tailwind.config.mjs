/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F1EEE7',
        surface: '#F9F6ED',
        fg: '#161A2A',
        muted: '#5A5D6E',
        'muted-2': '#7F8291',
        border: '#E4DFD3',
        'border-strong': '#8A7D6E',
        accent: '#14213D',
        'accent-weak': '#E9E1D0',
        'accent-deep': '#2D2F3E',
        'on-accent': '#F1E7D6',
        'card-1': '#DDC7C2',
        'card-2': '#C6D2CE',
        'card-3': '#D4BE8B',
        'on-card': '#161A2A',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'step--1': 'clamp(0.83rem, 0.80rem + 0.15vw, 0.90rem)',
        'step-0':  'clamp(1.00rem, 0.96rem + 0.20vw, 1.10rem)',
        'step-1':  'clamp(1.20rem, 1.14rem + 0.30vw, 1.35rem)',
        'step-2':  'clamp(1.50rem, 1.40rem + 0.50vw, 1.75rem)',
        'step-3':  'clamp(1.95rem, 1.75rem + 1.00vw, 2.50rem)',
        'step-4':  'clamp(2.60rem, 2.20rem + 2.00vw, 3.75rem)',
        'step-5':  'clamp(3.50rem, 2.80rem + 3.50vw, 6.00rem)',
      },
      maxWidth: {
        measure: '68ch',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
