Change Log
======================

v3.0.0 (2023-11-12)
----------------------

  * Upgraded to ESLint version 8
  * Added ESLint version >=8.50.0 as a peer dependency
  * Increased minimum Node.js version from 4.0.0 to 16.17.0
  * Migrated from deprecated [eslint-restricted-globals][npmerg] package to [confusing-browser-globals][npmcbg]
  * Modified `space-before-function-paren` rule to require space for async arrow
  * Modified `no-duplicate-imports` rule to enable `'includeExports': true`
  * Enabled `linebreak-style` rule
  * Enabled `prefer-const` rule
  * Enabled `no-invalid-this` rule
  * Enabled `prefer-spread` rule
  * Enabled `prefer-template` rule
  * Enabled `prefer-rest-params` rule
  * Enabled `prefer-numeric-literals` rule
  * Enabled `no-multi-assign` rule
  * Enabled `lines-between-class-members` rule
  * Enabled `max-classes-per-file` rule
  * Enabled `prefer-object-spread` rule
  * Enabled `require-atomic-updates` rule
  * Enabled `require-unicode-regexp` rule
  * Enabled `default-param-last` rule
  * Enabled `prefer-regex-literals` rule
  * Enabled `grouped-accessor-pairs` rule
  * Enabled `no-constructor-return` rule
  * Enabled `prefer-exponentiation-operator` rule
  * Enabled `no-promise-executor-return` rule
  * Enabled `no-unreachable-loop` rule
  * Enabled `no-unused-private-class-members` rule
  * Enabled `no-constant-binary-expression` rule
  * Enabled `no-empty-static-block` rule
  * Enabled `no-new-native-nonconstructor` rule
  * Removed `no-shadow-restricted-names` and `no-with` rules, because they are now in eslint:recommended
  * Removed `require-jsdoc` and `valid-jsdoc` rules, because they have been deprecated in ESLint v5.10.0
  * Removed `no-return-await` rule, because it has been deprecated in ESLint v8.46.0
  * Replaced deprecated `no-catch-shadow` rule with `no-shadow`
  * Replaced deprecated `no-new-object` rule with `no-object-constructor`
  * Applied `Object.freeze` the `rules` objects provided by this package
  * Created test suite

[npmerg]: https://www.npmjs.com/package/eslint-restricted-globals
[npmcbg]: https://www.npmjs.com/package/confusing-browser-globals

v2.0.0 (2018-06-09)
----------------------

  * Enabled `implicit-arrow-linebreak` rule, requiring arrow function body on the same line
  * Enabled `padding-line-between-statements` rule, replacing deprecated `lines-around-directive` rule
  * Enabled `semi-style` rule, requiring semicolons to be located at the end of statements
  * Enabled `switch-colon-spacing` rule, requiring no space before switch colon, and some space after
  * Enabled `rest-spread-spacing` rule, disallowing whitespace after the spread operator
  * Enabled `symbol-description` rule, requiring description text be added to symbols
  * Removed `lines-around-directive` rule, because it has been deprecated in ESLint 4.0
  * Removed `no-global-assign` rule, because it is already enabled in eslint:recommended
  * Removed `no-unsafe-negation` rule, because it is already enabled in eslint:recommended
  * Added a couple trivial package code improvements

v1.0.1 (2017-10-14)
----------------------

  * Added error messages for restricted globals

v1.0.0 (2017-10-07)
----------------------

  * Initial release
