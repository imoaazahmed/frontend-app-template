module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        xxs: '0.25rem', ////// 4px
        xs: '0.5rem', //////// 8px
        sm: '0.75rem', /////// 12px
        md: '1rem', ////////// 16px
        lg: '1.5rem', //////// 24px
        xl: '1.75rem', /////// 28px
        xxl: '2rem', ///////// 32px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
