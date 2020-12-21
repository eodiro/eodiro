module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'no-alert': 'off',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': [0],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-extra-semi': [0],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-empty-function': [0],
    '@typescript-eslint/no-var-requires': [0],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/camelcase': [0],
    '@typescript-eslint/explicit-module-boundary-types': [0],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
}
