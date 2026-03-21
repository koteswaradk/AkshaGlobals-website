/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        m3: {
          // Primary palette - dark charcoal/navy
          primary: '#1F2937',
          'on-primary': '#ffffff',
          'primary-container': '#F97316',
          'on-primary-container': '#ffffff',
          'primary-10': '#111827',
          'primary-20': '#1F2937',
          'primary-30': '#374151',
          'primary-50': '#6B7280',
          // Secondary palette - warm gray
          secondary: '#4B5563',
          'on-secondary': '#ffffff',
          'secondary-container': '#FED7AA',
          'on-secondary-container': '#1F2937',
          'secondary-10': '#1F2937',
          'secondary-20': '#374151',
          'secondary-30': '#4B5563',
          // Tertiary palette - orange accent
          tertiary: '#F97316',
          'on-tertiary': '#ffffff',
          'tertiary-container': '#FFEDD5',
          'on-tertiary-container': '#7C2D12',
          'tertiary-10': '#7C2D12',
          'tertiary-20': '#9A3412',
          'tertiary-30': '#C2410C',
          // Surfaces
          surface: '#F9FAFB',
          'surface-dim': '#E5E7EB',
          'surface-bright': '#F9FAFB',
          'surface-container-lowest': '#FFFFFF',
          'surface-container-low': '#F3F4F6',
          'surface-container': '#E5E7EB',
          'surface-container-high': '#D1D5DB',
          'surface-container-highest': '#9CA3AF',
          'on-surface': '#111827',
          'on-surface-variant': '#4B5563',
          outline: '#6B7280',
          'outline-variant': '#D1D5DB',
          // Error
          error: '#DC2626',
          'on-error': '#ffffff',
          'error-container': '#FEE2E2',
          'on-error-container': '#7F1D1D',
          // Dark theme
          'dark-primary': '#F97316',
          'dark-on-primary': '#111827',
          'dark-primary-container': '#9A3412',
          'dark-on-primary-container': '#FFEDD5',
          'dark-secondary': '#D1D5DB',
          'dark-on-secondary': '#1F2937',
          'dark-secondary-container': '#374151',
          'dark-surface': '#111827',
          'dark-surface-container': '#1F2937',
          'dark-surface-container-high': '#374151',
          'dark-surface-container-highest': '#4B5563',
          'dark-on-surface': '#F9FAFB',
          'dark-on-surface-variant': '#D1D5DB',
          'dark-outline': '#6B7280',
        },
      },
      borderRadius: {
        'xs': '4px',
        'm3': '12px',
        'm3-lg': '16px',
        'm3-xl': '28px',
      },
      boxShadow: {
        'm3-1': '0 1px 2px 0 rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
        'm3-2': '0 1px 2px 0 rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
        'm3-3': '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
