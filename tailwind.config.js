/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('./tailwind.theme.cjs')],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
