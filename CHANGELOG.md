# Change Log

All notable changes to this project will be documented in this file.

## [2.0.5] - 2017-07-16
### Changed
- Removed `react/prefer-stateless-function` restriction
- Added warning when using `React.Component` to suggest `React.PureComponent`
  with Flow covariant instructions.
### Maintenance
- Dependency upgrades.

## [0.2.5] - 2017-07-13
### Fixed
- Remove yarn `package.engine` restriction.

## [1.0.5] - 2017-06-22
### Fixed
- Remove yarn `package.engine` restriction.

## [1.0.4] - 2017-06-17
### Maintenance
- Dependency upgrades.

## [1.0.3] - 2017-06-17
### Maintenance
- CircleCI migration to v2.0 and include node v8 in tests.

## [1.0.2] - 2017-06-03
### Maintenance
- Add `flow-typed` definitions and add flow tests.

## [1.0.1] - 2017-06-02
### Maintenance
- Add CHANGELOG and update README.

## [1.0.0] - 2017-06-02
### Changed
- `arrow-body-style`: Relaxed rules to use `'as-needed'` which allows one-line
  lambdas, simpler stateless React components, easier currying, and return
  shorthand for object literals.
- `arrow-parens`: Relaxed rules to use `'as-needed'` which allows omitting
  parenthesis if only one argument.

[1.0.0]: https://github.com/tribou/eslint-plugin-tribou/compare/v0.2.0...v1.0.0


## [0.2.0] - 2017-05-31
### Added
- Added existing `eslint-config-tribou@^3.1.0` rules to provide a
  backwards-compatible migration path coming from that project.

[0.2.0]: https://github.com/tribou/eslint-plugin-tribou/compare/v0.1.0...v0.2.0
