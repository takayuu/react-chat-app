module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    margin: ['first', 'responsive'],
    borderRadius: ['first', 'last', 'responsive'],
  },
  plugins: [],
};
