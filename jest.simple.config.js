module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transform: {},
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
