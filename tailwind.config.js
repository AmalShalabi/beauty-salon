/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beauty-primary': '#E91E63',
        'beauty-secondary': '#FF4081',
        'beauty-accent': '#FF9800',
        'beauty-background': '#F8F9FA',
        'beauty-surface': '#FFFFFF',
        'beauty-light': '#FFF3E0',
        'beauty-dark': '#2C2C2C',
        'beauty-text': '#424242',
        'beauty-muted': '#757575',
        'beauty-border': '#E0E0E0',
        'beauty-gradient-start': '#FF6B9D',
        'beauty-gradient-end': '#C44569',
      },
      fontFamily: {
        'arabic': ['Cairo', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'beauty-gradient': 'linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)',
        'soft-gradient': 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
      },
    },
  },
  plugins: [],
}

