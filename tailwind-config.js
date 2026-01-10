/** @type {import('tailwindcss').Config} */
tailwind.config = {
    theme: {
      extend: {
        colors: {
          void: '#0E0E10',   // Main Background
          panel: '#16161A',  // Card/Surface
          zinc: {
            850: '#202024',
            950: '#09090B',
          }
        },
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'sans-serif'],
          heading: ['Inter', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
        }
      }
    }
  }
