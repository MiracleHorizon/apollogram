/** @type {import('ts-jest').JestConfigWithTsJest} */

const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['src', 'node_modules']
}

module.exports = jestConfig
