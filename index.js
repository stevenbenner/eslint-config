'use strict';

let restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
	'extends': [
		'./rules/errors.js',
		'./rules/best-practices.js',
		'./rules/strict.js',
		'./rules/variables.js',
		'./rules/style.js',
		'./rules/es6.js'
	].map(require.resolve),
	rules: {
		'no-restricted-globals': [ 'error' ].concat(restrictedGlobals)
	}
};
