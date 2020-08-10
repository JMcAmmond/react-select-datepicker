/* eslint-disable import/no-extraneous-dependencies */
const { defaults } = require('jest-config');

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFiles: ['<rootDir>/src/setupTests.js'],
  verbose: true,
};
