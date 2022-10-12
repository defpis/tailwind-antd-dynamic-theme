module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
  },
};
