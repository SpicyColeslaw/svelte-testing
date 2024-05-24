/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
        '102': '1.02',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fffffe',
      sun: '#ffd803',
      darkblue: '#272343',
      darkerblue: '#2d334a',
      lightblue: '#bae8e8',
      lighterblue: '#e3f6f5'
    }
  },
  plugins: [],
}

