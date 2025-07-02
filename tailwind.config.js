/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
      extend: {
        colors: {
          // Custom color palette
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
          secondary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
          success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
          },
          warning: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
          },
          danger: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            950: '#450a0a',
          },
          accent: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          neutral: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0a0a0a',
          },
        },
        fontFamily: {
          sans: [
            'Inter',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
          serif: [
            'ui-serif',
            'Georgia',
            'Cambria',
            '"Times New Roman"',
            'Times',
            'serif',
          ],
          mono: [
            'Fira Code',
            'ui-monospace',
            'SFMono-Regular',
            '"SF Mono"',
            'Consolas',
            '"Liberation Mono"',
            'Menlo',
            'monospace',
          ],
          display: [
            '"Cal Sans"',
            'Inter',
            'system-ui',
            'sans-serif',
          ],
        },
        fontSize: {
          xs: ['0.75rem', { lineHeight: '1rem' }],
          sm: ['0.875rem', { lineHeight: '1.25rem' }],
          base: ['1rem', { lineHeight: '1.5rem' }],
          lg: ['1.125rem', { lineHeight: '1.75rem' }],
          xl: ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
          '7xl': ['4.5rem', { lineHeight: '1' }],
          '8xl': ['6rem', { lineHeight: '1' }],
          '9xl': ['8rem', { lineHeight: '1' }],
        },
        spacing: {
          '18': '4.5rem',
          '22': '5.5rem',
          '88': '22rem',
          '128': '32rem',
          '144': '36rem',
          '192': '48rem',
          '256': '64rem',
        },
        borderRadius: {
          '4xl': '2rem',
          '5xl': '2.5rem',
          '6xl': '3rem',
        },
        boxShadow: {
          'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
          'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)',
          'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
          'glow-lg': '0 0 40px rgba(59, 130, 246, 0.25)',
          'glow-xl': '0 0 60px rgba(59, 130, 246, 0.35)',
          'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'fade-in-up': 'fadeInUp 0.5s ease-out',
          'fade-in-down': 'fadeInDown 0.5s ease-out',
          'fade-in-left': 'fadeInLeft 0.5s ease-out',
          'fade-in-right': 'fadeInRight 0.5s ease-out',
          'slide-up': 'slideUp 0.3s ease-out',
          'slide-down': 'slideDown 0.3s ease-out',
          'slide-in-left': 'slideInLeft 0.5s ease-out',
          'slide-in-right': 'slideInRight 0.5s ease-out',
          'bounce-gentle': 'bounceGentle 2s infinite',
          'bounce-slow': 'bounce 2s infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'spin-slow': 'spin 3s linear infinite',
          'wiggle': 'wiggle 1s ease-in-out infinite',
          'float': 'float 3s ease-in-out infinite',
          'scale-in': 'scaleIn 0.2s ease-out',
          'scale-out': 'scaleOut 0.2s ease-in',
          'rotate-slow': 'rotate 8s linear infinite',
          'gradient-x': 'gradientX 15s ease infinite',
          'gradient-y': 'gradientY 15s ease infinite',
          'gradient-xy': 'gradientXY 15s ease infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          fadeInDown: {
            '0%': {
              opacity: '0',
              transform: 'translateY(-10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          fadeInLeft: {
            '0%': {
              opacity: '0',
              transform: 'translateX(-10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          fadeInRight: {
            '0%': {
              opacity: '0',
              transform: 'translateX(10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          slideUp: {
            '0%': { transform: 'translateY(10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideInLeft: {
            '0%': {
              opacity: '0',
              transform: 'translateX(-10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          slideInRight: {
            '0%': {
              opacity: '0',
              transform: 'translateX(10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          bounceGentle: {
            '0%, 100%': {
              transform: 'translateY(-5%)',
              animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
            },
            '50%': {
              transform: 'none',
              animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
            },
          },
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          scaleIn: {
            '0%': { 
              opacity: '0',
              transform: 'scale(0.9)',
            },
            '100%': { 
              opacity: '1',
              transform: 'scale(1)',
            },
          },
          scaleOut: {
            '0%': { 
              opacity: '1',
              transform: 'scale(1)',
            },
            '100%': { 
              opacity: '0',
              transform: 'scale(0.9)',
            },
          },
          rotate: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          gradientX: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            },
          },
          gradientY: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'center top'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'center bottom'
            },
          },
          gradientXY: {
            '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
          'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
          'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
          'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        },
        transitionTimingFunction: {
          'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
          'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
          'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
          'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
          'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
          'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        },
        screens: {
          'xs': '475px',
          '3xl': '1600px',
        },
        maxWidth: {
          '8xl': '88rem',
          '9xl': '96rem',
        },
        zIndex: {
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
          '100': '100',
        },
      },
    },
    plugins: [
      // Plugin for better component styling
      function({ addComponents, addUtilities }) {
        addComponents({
          // Button Components
          '.btn-base': {
            '@apply inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed': {},
          },
          '.btn-primary': {
            '@apply btn-base bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white focus:ring-primary-500 shadow-sm hover:shadow-md': {},
          },
          '.btn-secondary': {
            '@apply btn-base bg-secondary-200 hover:bg-secondary-300 active:bg-secondary-400 text-secondary-900 focus:ring-secondary-500 dark:bg-secondary-700 dark:hover:bg-secondary-600 dark:active:bg-secondary-500 dark:text-secondary-100': {},
          },
          '.btn-success': {
            '@apply btn-base bg-success-600 hover:bg-success-700 active:bg-success-800 text-white focus:ring-success-500 shadow-sm hover:shadow-md': {},
          },
          '.btn-warning': {
            '@apply btn-base bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white focus:ring-warning-500 shadow-sm hover:shadow-md': {},
          },
          '.btn-danger': {
            '@apply btn-base bg-danger-600 hover:bg-danger-700 active:bg-danger-800 text-white focus:ring-danger-500 shadow-sm hover:shadow-md': {},
          },
          '.btn-outline': {
            '@apply btn-base border-2 border-current bg-transparent hover:bg-current hover:text-white': {},
          },
          '.btn-ghost': {
            '@apply btn-base bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800': {},
          },
          '.btn-sm': {
            '@apply px-3 py-1.5 text-sm': {},
          },
          '.btn-lg': {
            '@apply px-6 py-3 text-lg': {},
          },
          '.btn-xl': {
            '@apply px-8 py-4 text-xl': {},
          },
          
          // Card Components
          '.card-base': {
            '@apply bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700': {},
          },
          '.card-elevated': {
            '@apply card-base shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-200': {},
          },
          '.card-bordered': {
            '@apply card-base border-2': {},
          },
          '.card-glass': {
            '@apply backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50': {},
          },
          
          // Input Components
          '.input-base': {
            '@apply block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-200': {},
          },
          '.input-lg': {
            '@apply input-base px-4 py-3 text-lg': {},
          },
          '.input-sm': {
            '@apply input-base px-2 py-1 text-sm': {},
          },
          '.input-error': {
            '@apply border-danger-300 focus:border-danger-500 focus:ring-danger-500': {},
          },
          '.input-success': {
            '@apply border-success-300 focus:border-success-500 focus:ring-success-500': {},
          },
          
          // Badge Components
          '.badge-base': {
            '@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium': {},
          },
          '.badge-primary': {
            '@apply badge-base bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100': {},
          },
          '.badge-secondary': {
            '@apply badge-base bg-secondary-100 text-secondary-800 dark:bg-secondary-800 dark:text-secondary-100': {},
          },
          '.badge-success': {
            '@apply badge-base bg-success-100 text-success-800 dark:bg-success-800 dark:text-success-100': {},
          },
          '.badge-warning': {
            '@apply badge-base bg-warning-100 text-warning-800 dark:bg-warning-800 dark:text-warning-100': {},
          },
          '.badge-danger': {
            '@apply badge-base bg-danger-100 text-danger-800 dark:bg-danger-800 dark:text-danger-100': {},
          },
          
          // Alert Components
          '.alert-base': {
            '@apply p-4 rounded-md border': {},
          },
          '.alert-success': {
            '@apply alert-base bg-success-50 border-success-200 text-success-800 dark:bg-success-900/20 dark:border-success-800 dark:text-success-200': {},
          },
          '.alert-warning': {
            '@apply alert-base bg-warning-50 border-warning-200 text-warning-800 dark:bg-warning-900/20 dark:border-warning-800 dark:text-warning-200': {},
          },
          '.alert-danger': {
            '@apply alert-base bg-danger-50 border-danger-200 text-danger-800 dark:bg-danger-900/20 dark:border-danger-800 dark:text-danger-200': {},
          },
          '.alert-info': {
            '@apply alert-base bg-primary-50 border-primary-200 text-primary-800 dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-200': {},
          },
        });
  
        addUtilities({
          // Text utilities
          '.text-gradient': {
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          },
          '.line-clamp-1': {
            display: '-webkit-box',
            '-webkit-line-clamp': '1',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
          '.line-clamp-2': {
            display: '-webkit-box',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
          '.line-clamp-3': {
            display: '-webkit-box',
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
          '.line-clamp-4': {
            display: '-webkit-box',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
          '.line-clamp-5': {
            display: '-webkit-box',
            '-webkit-line-clamp': '5',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
          '.line-clamp-6': {
            display: '-webkit-box',
            '-webkit-line-clamp': '6',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
          
          // Scrollbar utilities
          '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          
          // Glassmorphism utilities
          '.glass': {
            'backdrop-filter': 'blur(16px) saturate(180%)',
            '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
            'background-color': 'rgba(255, 255, 255, 0.75)',
            'border': '1px solid rgba(255, 255, 255, 0.125)',
          },
          '.glass-dark': {
            'backdrop-filter': 'blur(16px) saturate(180%)',
            '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
            'background-color': 'rgba(17, 25, 40, 0.75)',
            'border': '1px solid rgba(255, 255, 255, 0.125)',
          },
        });
      }
    ],
  }