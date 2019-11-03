module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  // more rules visit: http://eslint.org/docs/rules/
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'semi': ['error', 'never'],
    'global-require': 0, // 0 - off, 1 - warn, 2 - on
    'no-console': 0,
    'no-undef': 0,
    'comma-dangle': ['error', 'never'],
    'prefer-template': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'new-cap': 0,
    'no-underscore-dangle': 0,
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
