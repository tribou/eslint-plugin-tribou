'use strict'

var Merge = require('deepmerge')
var AirbnbConfig = require('eslint-config-airbnb')
var StandardConfig = require('eslint-config-standard')
var StandardPlugin = require('eslint-plugin-standard')
var FlowtypePlugin = require('eslint-plugin-flowtype')
var ImportPlugin = require('eslint-plugin-import')
var JsxA11yPlugin = require('eslint-plugin-jsx-a11y')
var PromisePlugin = require('eslint-plugin-promise')
var ReactPlugin = require('eslint-plugin-react')

var merged = Merge.all([
  StandardPlugin.rules,
  FlowtypePlugin.rules,
  ImportPlugin.rules,
  JsxA11yPlugin.rules,
  PromisePlugin.rules,
  ReactPlugin.rules,
])

module.exports = {

  rules: merged,

  configs: {
    airbnb: AirbnbConfig,
    standard: StandardConfig,

    tribou: {
      recommended: {
        extends: [
          'eslint-config-airbnb',
          'eslint-config-standard',
        ],

        parser: 'babel-eslint',

        plugins: [
          'flowtype',
        ],

        rules: {

          'flowtype/define-flow-type': 1,
          'flowtype/use-flow-type': 1,
          'flowtype/require-parameter-type': ['error', 'always', {
            excludeArrowFunctions: 'expressionsOnly',
          }],
          'flowtype/require-return-type': ['error', 'always', {
            excludeArrowFunctions: 'expressionsOnly',
          }],
          'flowtype/require-valid-file-annotation': ['error', 'always'],
          'flowtype/valid-syntax': ['error', 'always'],

          'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
          }],

          'quote-props': ['error', 'as-needed', { numbers: true }],

          'react/jsx-filename-extension': [0],
          'react/require-extension': [0],

          strict: 0,
          'arrow-body-style': [2, 'always'],
          'arrow-parens': [2, 'always'],
          'brace-style': [2, 'stroustrup'],
          'comma-dangle': [2, 'always-multiline'],
          'max-len': [2, {
            code: 80,
            tabWidth: 2,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
          }],
          'operator-linebreak': [2, 'before'],
          'no-multiple-empty-lines': [2, {
            max: 2,
            maxEOF: 0,
          }],
          'no-underscore-dangle': [0],
          'padded-blocks': [2, 'always'],

        },

        settings: {
          flowtype: {
            onlyFilesWithFlowAnnotation: false,
          },
        },
      },
    },
  },

}
