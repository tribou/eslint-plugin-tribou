# eslint-plugin-tribou

[![npm version](https://badge.fury.io/js/eslint-plugin-tribou.svg)](https://badge.fury.io/js/eslint-plugin-tribou)
[![Build Status](https://travis-ci.org/tribou/eslint-plugin-tribou.svg?branch=master)](https://travis-ci.org/tribou/eslint-plugin-tribou)
[![Project Status: Active - The project has reached a stable, usable state and is being actively developed.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
[![bitHound Code](https://www.bithound.io/github/tribou/eslint-plugin-tribou/badges/code.svg)](https://www.bithound.io/github/tribou/eslint-plugin-tribou)

Start with JS Standard Style but push towards better readability,
git-awareness, vim-usability, and React and ES6 best practices.

#### Quick Start

```bash
npm install --save-dev \
    eslint-plugin-tribou@^3.0.0 \
    babel-eslint@^7.1.0 \
    eslint@^3.9.1 \
    eslint-config-airbnb@^13.0.0 \
    eslint-config-standard@^6.2.1 \
    eslint-plugin-flowtype@^2.25.0 \
    eslint-plugin-import@^2.1.0 \
    eslint-plugin-jsx-a11y@^2.2.3 \
    eslint-plugin-promise@^3.3.1 \
    eslint-plugin-react@^6.6.0 \
    eslint-plugin-standard@^2.0.1
```

Then add the following to your `.eslintrc`:

```json
{
  "extends": [
    "tribou"
  ]
}
```

Or add an `.eslintrc.yml`:

```yml
extends:
  - tribou

# Wow, that was easier... 😉
```

By default, Flow typing is required for an entire project since
`eslint-plugin-flowtype` will require the `\\ @flow` annotation to be set at
the top of every file and subsequently check for all other flow annotation
requirements in that file. This allows new projects to enforce Flow typing on
every file from the start.

If you do not wish to use Flow typing on every file (or at all) in a project,
this config can still enforce all of its other standards (including Flow
linting on files that **do** have the `// @flow` annotation). To disable this
"universal" Flow typing requirement in your `.eslintrc`:

```json
{
  "extends": [
    "tribou"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}
```

Or in your `.eslintrc.yml`:

```yml
extends:
  - tribou

settings:
  flowtype:
    onlyFilesWithFlowAnnotation: true
```
