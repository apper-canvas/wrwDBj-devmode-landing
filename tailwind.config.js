/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00AEEF',
          light: '#7FD7FF',
          dark: '#0077A3'
        },
        secondary: {
          DEFAULT: '#4B0055',
          light: '#7A2D84',
          dark: '#2A0030'
        },
        accent: {
          blue: '#00AEEF',
          pink: '#FFB3C1',
          green: '#A5E887',
          orange: '#FFA500',
          plum: '#4B0055'
        },
        background: {
          yellowGreen: '#F1FFD4',
          lavender: '#E8D9F0',
          offWhite: '#FAFAFA',
          black: '#0A0A0A'
        },
        surface: {
          50: '#f8fafc',   // Lightest
          100: '#f1f5f9',
          200: '#e2e8f0', 
          300: '#cbd5e1',
          400: '#94a3b8',  
          500: '#64748b',  
          600: '#475569',  
          700: '#334155',  
          800: '#1e293b',  
          900: '#0f172a'   // Darkest
        }      
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      }    
    }  
  },
  plugins: [],
  darkMode: 'class',
}