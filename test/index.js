// @flow
const CLIEngine = require('eslint').CLIEngine


const cli = new CLIEngine({
  configFile: 'eslint-config.js',
  useEslintrc: true,
  parser: 'babel-eslint',
})


export default cli
