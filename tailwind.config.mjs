/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        fg: '#0A0A0A',
        muted: '#6B7280',
        'muted-2': '#9CA3AF',
        border: '#E5E7EB',
        'border-strong': '#6B7280',
        accent: '#FF3C00',              // Sketchin signal red (graphic marks only)
        'accent-weak': '#F3F4F6',
        'accent-deep': '#000000',       // pure black for dark sections
        'on-accent': '#FAFAFA',
        'card-1': '#0A0A0A',            // featured: near-black
        'card-2': '#F3F4F6',            // placeholder: light grey
        'card-3': '#F3F4F6',
        'on-card': '#0A0A0A',           // default on light cards
        'on-card-dark': '#FAFAFA',      // for card-1 dark
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
