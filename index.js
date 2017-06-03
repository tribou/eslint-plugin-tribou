'use strict'

const ESLint = require('eslint')
const Merge = require('deepmerge')
const AirbnbConfig = require('eslint-config-airbnb')
const StandardConfig = require('eslint-config-standard')
const StandardPlugin = require('eslint-plugin-standard')
const FlowtypePlugin = require('eslint-plugin-flowtype')
const ImportPlugin = require('eslint-plugin-import')
const JsxA11yPlugin = require('eslint-plugin-jsx-a11y')
const PromisePlugin = require('eslint-plugin-promise')
const ReactPlugin = require('eslint-plugin-react')

const merged = Merge.all([
  StandardPlugin,
  FlowtypePlugin,
  ImportPlugin,
  JsxA11yPlugin,
  PromisePlugin,
  ReactPlugin,
])

module.exports = {

  eslint: ESLint,

  rules: merged.rules,
  rulesConfig: merged.rulesConfig,
  deprecatedRules: merged.deprecatedRules,

  configs: {
    airbnb: AirbnbConfig,
    standard: StandardConfig,

    recommended: {

      extends: [
        'airbnb',
        'standard',
        'plugin:flowtype/recommended',
      ],

      parser: 'babel-eslint',

      plugins: [
        'flowtype',
      ],

      rules: {

        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],

        'brace-style': ['error', 'stroustrup'],
        'comma-dangle': ['error', 'always-multiline'],

        'import/extensions': ['error', {
          js: 'never',
          jsx: 'never',
        }],
        'import/no-extraneous-dependencies': ['error', {
          devDependencies: true,
        }],
        'import/no-duplicates': ['error', 'always'],
        'no-duplicate-imports': 0, // handled by import/no-duplicates

        'quote-props': ['error', 'as-needed', { numbers: true }],

        'react/jsx-filename-extension': [0],
        'react/require-extension': [0],

        strict: 0,
        'max-len': ['error', {
          code: 80,
          tabWidth: 2,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        }],
        'operator-linebreak': ['error', 'before'],
        'no-multiple-empty-lines': ['error', {
          max: 2,
          maxEOF: 0,
        }],
        'no-underscore-dangle': [0],
        'padded-blocks': ['error', 'always'],

      },

      settings: {
        flowtype: {
          onlyFilesWithFlowAnnotation: false,
        },
      },

      env: {
        jest: true,
      },

    },
  },

}
