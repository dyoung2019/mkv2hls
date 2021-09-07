module.exports = {
  preset: 'ts-jest/presets/default-esm',
  // transform: {},
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "/archive/",
    "/dist/",
    "/test-js/"
  ],
  moduleNameMapper: {
    '^\.\./src/(.*)$': '\.\./build/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig-test.json',
      useESM: true,
    }
  }, 
};