module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['off', {
      extensions: ['.jsx', '.js', 'ts', 'tsx']
    }],
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'no-console': 'error'
  }
};