module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // Common
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2, { "SwitchCase": 1 }],
    'no-console': 'off',
    'no-empty': ['warn', {
      'allowEmptyCatch': true
    }],
    'no-trailing-spaces': 'off',
    
    // Vue
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': ['error', 2],
    'vue/no-v-html': 'off',
    'vue/no-parsing-error': 'off'
  }
}
