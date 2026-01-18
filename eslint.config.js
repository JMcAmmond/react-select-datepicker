const path = require('node:path');
const { FlatCompat } = require('@eslint/eslintrc');

const legacyConfig = require('./.eslintrc.cjs');
const compat = new FlatCompat({ baseDirectory: __dirname || path.resolve() });

module.exports = [
  ...compat.config(legacyConfig),
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
  },
];
