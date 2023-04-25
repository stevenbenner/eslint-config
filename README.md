# eslint-config

**A sensibly strict ESLint configuration.**

This is my set of [ESLint](https://eslint.org/) rules for verifying JavaScript. It is meant to be used with the "eslint:recommended" rules.

This software is licensed under the [MIT license][license].

[![NPM version](https://img.shields.io/npm/v/@stevenbenner/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@stevenbenner/eslint-config)
[![Build Status](https://img.shields.io/travis/stevenbenner/eslint-config/master.svg?style=flat-square)](https://travis-ci.org/stevenbenner/eslint-config)

[license]: LICENSE.txt

## Usage

Install the [@stevenbenner/eslint-config](https://www.npmjs.com/package/@stevenbenner/eslint-config) package in your project with npm:

`npm install @stevenbenner/eslint-config --save-dev`

Then add the extends to your project's root ESLint configuration file:

```json
"extends": [
	"eslint:recommended",
	"@stevenbenner/eslint-config"
]
```

Note that this package is just ESLint rules. You will also want to set your `env`, `parserOptions`, and any other project specific ESLint settings in your project's ESLint configuration file(s).
