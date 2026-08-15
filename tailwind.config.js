/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1A5C38',
          dark:    '#0F3520',
          deep:    '#082218',
          light:   '#D6EDDF',
          xlight:  '#EFF8F2',
        },
        marigold: {
          DEFAULT: '#CB7D0B',
          dark:    '#7D5008',
          light:   '#FDF0D5',
        },
        cream: '#FAF8F4',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
