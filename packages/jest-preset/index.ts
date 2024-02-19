/* eslint-disable import/no-default-export -- default export was proposed by the maintainer of the lib itself */

const config = {
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        isolatedModules: true,
      },
    ],
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageDirectory: './coverage',
};

export default config;
