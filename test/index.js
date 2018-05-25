// @flow
const { CLIEngine } = require('eslint')


const cli = new CLIEngine({
  configFile: 'eslint-config.js',
  useEslintrc: false,
  parser: 'babel-eslint',
})


export default cli
