/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 2s ease-out forwards',
        'slide-in-up': 'slide-in-up 2s ease-out forwards',
        'slide-in-left': 'slide-in-left 2s ease-out forwards',
        'slide-in-right': 'slide-in-right 2s ease-out forwards',
        'scale-in': 'scale-in 2s ease-out forwards',
        'bounce-in': 'bounce-in 2.5s ease-out forwards',
        'float-in': 'float-in 3s ease-out forwards',
        'rotate-in': 'rotate-in 2.5s ease-out forwards',
        'glow-in': 'glow-in 2.5s ease-out forwards',
        'slide-in-down': 'slide-in-down 2s ease-out forwards',
        'zoom-in': 'zoom-in 2.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'scale-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)'
          },
          '70%': {
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'float-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px) scale(0.8)'
          },
          '50%': {
            opacity: '0.7',
            transform: 'translateY(-10px) scale(1.02)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          },
        },
        'rotate-in': {
          '0%': {
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.5)'
          },
          '50%': {
            opacity: '0.8',
            transform: 'rotate(10deg) scale(1.1)'
          },
          '100%': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)'
          },
        },
        'glow-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
            filter: 'brightness(0.5)'
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
            filter: 'brightness(1.2)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
            filter: 'brightness(1)'
          },
        },
        'slide-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5) translateZ(0)'
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.1) translateZ(0)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateZ(0)'
          },
        },
      },
    },
  },
  plugins: [],
} 