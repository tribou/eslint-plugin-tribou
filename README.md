# eslint-plugin-tribou

[![npm version](https://badge.fury.io/js/eslint-plugin-tribou.svg)](https://badge.fury.io/js/eslint-plugin-tribou)
[![Build Status](https://travis-ci.org/tribou/eslint-plugin-tribou.svg?branch=master)](https://travis-ci.org/tribou/eslint-plugin-tribou)
[![Project Status: Active - The project has reached a stable, usable state and is being actively developed.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
[![bitHound Code](https://www.bithound.io/github/tribou/eslint-plugin-tribou/badges/code.svg)](https://www.bithound.io/github/tribou/eslint-plugin-tribou)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftribou%2Feslint-plugin-tribou.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftribou%2Feslint-plugin-tribou?ref=badge_shield)

Start with JS Standard Style but push towards better readability,
git-awareness, vim-usability, and React and ES6 best practices.

#### Quick Start

NOTE: If you're migrating from `eslint-config-tribou` and want to maintain
compatibility, see the [Legacy
Configuration](https://github.com/tribou/eslint-plugin-tribou#legacy-configuration).

```bash
yarn add --dev \
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

#### Legacy Configuration

In order to apply the rules equivalent to `eslint-config-tribou@^3.0.0`, install v0.2.0 instead:

```bash
yarn add --dev \
    eslint-plugin-tribou@^0.2.0 \
    babel-eslint@^7.2.3 \
    eslint@^3.19.0
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftribou%2Feslint-plugin-tribou.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftribou%2Feslint-plugin-tribou?ref=badge_large)