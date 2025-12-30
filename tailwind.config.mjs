/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyan-dark': '#067f75',
        'yellow-custom': '#FFC519',
        'cyan-light': '#0E8D81',
        'white-bg': '#FEFEFE',
      },
    },
  },
  plugins: [],
}
