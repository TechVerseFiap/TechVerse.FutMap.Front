module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  // use the package entrypoint; newer versions export the matchers from the package root
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs', '@testing-library/jest-dom'],
  // map path aliases ("@/...") used in the project to the src directory
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|svg|gif)$': '<rootDir>/__mocks__/fileMock.js'
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
