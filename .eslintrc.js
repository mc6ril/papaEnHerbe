module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['project-structure'],
  settings: {
    'project-structure/config-path': 'projectStructure.json', // json | yaml
  },
  rules: {
    'project-structure/file-structure': 'error',
    quotes: ['error', 'double'],
    radix: ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'function-paren-newline': ['error', 'consistent'],
    'function-call-argument-newline': ['error', 'consistent'],
    'max-len': [
      'error',
      {
        code: 200,
        ignoreUrls: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0,
    'no-return-await': 'error',
    complexity: ['error', 25],
    camelcase: ['error', {properties: 'never', ignoreDestructuring: true}],
    'consistent-return': 'error',
  },
};
