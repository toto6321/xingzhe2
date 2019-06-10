module.exports = {
  'env': {
    'node': true,
    'es6': true,
    'commonjs': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
    'camelcase': 0,
    'quotes': [1, 'single'],
    'comma-dangle': [0],
    'no-unused-vars': [1]
  }
}
