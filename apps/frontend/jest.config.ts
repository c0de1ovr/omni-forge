import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: __dirname,
});

const config = {
  displayName: 'frontend',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
