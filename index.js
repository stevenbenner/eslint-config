'use strict';

module.exports = {
	'extends': [
		'./rules/errors.js',
		'./rules/best-practices.js',
		'./rules/strict.js',
		'./rules/variables.js',
		'./rules/style.js',
		'./rules/es6.js'
	].map(require.resolve)
};
