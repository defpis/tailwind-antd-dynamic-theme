function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}

module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // bg-<...>-100/<opacity>
      backgroundColor: {
        base: {
          400: withOpacityValue('--color-bg-base'),
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this for antd style
  },
  darkMode: 'class',
};
