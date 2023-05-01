module.exports = {
  testEnvironment: 'node',
  // roots: ['<rootDir>/test'],
  roots: ['<rootDir>/lib'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
