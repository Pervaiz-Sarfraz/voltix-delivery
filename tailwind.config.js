/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#ffffff',
          light: '#f8fafc',
          dark: '#f1f5f9',
        },
        accent: {
          DEFAULT: '#34d399',
          light: '#6ee7b7',
          dark: '#065f46',
        },
        surface: {
          DEFAULT: 'rgba(15, 23, 42, 0.05)',
          glass: 'rgba(255, 255, 255, 0.7)',
        },
        slate: {
          900: '#0f172a',
          600: '#475569',
          400: '#94a3b8',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
