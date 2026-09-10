/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09090b',
        paper: '#f7f7f5',
        lime: '#c8ff3d',
      },
      boxShadow: {
        glow: '0 0 70px rgba(200,255,61,.13)',
      },
    },
  },
  plugins: [],
}
