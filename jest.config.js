module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePathIgnorePatterns: ['dist', '.history'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
      isolatedModules: true
    },
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
  testURL: 'http://localhost/',
  collectCoverageFrom: ['assets/script/**/*.{js,ts}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test-helpers/'],
  coverageReporters: ['json', 'lcov'],
  verbose: true,
  preset: 'ts-jest',
};

