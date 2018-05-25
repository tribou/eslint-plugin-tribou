# eslint-plugin-tribou

[![npm version](https://badge.fury.io/js/eslint-plugin-tribou.svg)](https://badge.fury.io/js/eslint-plugin-tribou)
[![CircleCI](https://img.shields.io/circleci/project/github/tribou/eslint-plugin-tribou.svg)](https://circleci.com/gh/tribou/eslint-plugin-tribou)
[![Project Status: Active - The project has reached a stable, usable state and is being actively developed.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)

Start with JS Standard Style but push towards better readability,
git-awareness, vim-usability, and React and ES6 best practices.

## Quick Start

NOTE: If you're migrating from `eslint-config-tribou` and want to maintain
compatibility, see the [Legacy
Configuration](https://github.com/tribou/eslint-plugin-tribou#legacy-configuration).

```bash
npm install --save-dev \
    eslint-plugin-tribou \
    babel-eslint \
    eslint
```

Then add the following to your `.eslintrc`:

```json
{
  "extends": [
    "plugin:tribou/recommended"
  ],
  "plugins": [
    "tribou"
  ]
}
```

Or add an `.eslintrc.yml`:

```yml
extends:
  - plugin:tribou/recommended

plugins:
  - tribou

# Wow, that was easier... 😉
```

### Flow

By default, Flow typing is required for an entire project since
`eslint-plugin-flowtype` will require the `\\ @flow` annotation to be set at
the top of every file and subsequently check for all other flow annotation
requirements in that file. This allows new projects to enforce Flow typing on
every file from the start.

If you do not wish to use Flow typing on every file (or at all) in a project,
this config can still enforce all of its other standards (including Flow
linting on files that **do** have the `// @flow` annotation). To disable this
"universal" Flow typing requirement in your `.eslintrc`:

```js
{
  ...
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}
```

Or in your `.eslintrc.yml`:

```yml
...
settings:
  flowtype:
    onlyFilesWithFlowAnnotation: true
```

## Prettier Usage

Like using [`prettier`](https://prettier.io/)? You can ignore rules that affect
`prettier` styles with
[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

Install:

```
npm install --save-dev eslint-config-prettier
```

And add the configs to your `.eslintrc.yml`:

```yml
extends:
  - plugin:tribou/recommended
  - prettier
  - prettier/flowtype
  - prettier/react

plugins:
  - tribou
```

## Legacy Configuration

In order to apply the rules equivalent to `eslint-config-tribou@^3.0.0`,
install v0.2.0 instead:

```bash
npm install --save-dev \
    eslint-plugin-tribou@^0.2.0 \
    babel-eslint@^7.2.3 \
    eslint@^3.19.0
```
