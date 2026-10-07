/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Option C: Royal Deep Cyan & Warm Gold
        royal: {
          50:  '#f0f8fb',
          100: '#e1f0f6',
          200: '#bee0ed',
          300: '#8dc8e0',
          400: '#4fa8ce',
          500: '#278bb8',
          600: '#1b7099',
          700: '#175a7c',
          800: '#0c4a60',  // Primary Deep Royal Cyan
          900: '#0a3a4c',
          950: '#052431',
        },
        gold: {
          50:  '#fdfbf3',
          100: '#faedd2',
          200: '#f5d8a0',
          300: '#eec269',
          400: '#e4a737',
          500: '#d98c19',
          600: '#b86d13',  // Accent Warm Gold
          700: '#924f13',
          800: '#793e17',
          900: '#653416',
        },
        dental: {
          cream: '#fbfdfd',
          soft:  '#f0f6f9',
          card:  '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230c4a60' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
