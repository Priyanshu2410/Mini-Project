// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // adjust based on your project structure
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env'),
  ],
};
