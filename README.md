# eslint-config

**A sensibly strict ESLint configuration.**

This is my set of [ESLint](https://eslint.org/) rules for verifying JavaScript. It is meant to be used with the "eslint:recommended" rules.

[![NPM version](https://img.shields.io/npm/v/@stevenbenner/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@stevenbenner/eslint-config)
[![Build Status](https://img.shields.io/travis/stevenbenner/eslint-config/master.svg?style=flat-square)](https://travis-ci.org/stevenbenner/eslint-config)
[![Dependency Status](https://img.shields.io/gemnasium/stevenbenner/eslint-config.svg?style=flat-square)](https://gemnasium.com/stevenbenner/eslint-config)

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

## License

*(This project is released under the [MIT license](https://raw.github.com/stevenbenner/eslint-config/master/LICENSE.txt).)*

Copyright (c) 2017 Steven Benner (http://stevenbenner.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
