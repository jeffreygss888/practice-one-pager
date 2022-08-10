module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['react', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-console': 1,
    'prefer-arrow-callback': 1,
    'tailwindcss/classnames-order': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [0],
    'react/require-default-props': [0],
    'tailwindcss/no-custom-classname': [0],
  },
};
