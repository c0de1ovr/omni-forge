import {Config} from 'jest'

const config: Config= {
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
