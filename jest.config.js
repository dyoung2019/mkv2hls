module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig-test.json'
    }
  },  
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "/node_modules/",
    "/archive/",
    "/dist/",
    "/test-js/"
  ]
};