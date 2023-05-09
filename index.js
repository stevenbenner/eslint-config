'use strict';

const restrictedGlobals = require('confusing-browser-globals').map((varName) => ({
	name: varName,
	message: `You should probably use 'window.${varName}' instead.`
}));

module.exports = {
	extends: [
		'./rules/errors.js',
		'./rules/best-practices.js',
		'./rules/variables.js',
		'./rules/style.js'
	].map(require.resolve),
	rules: Object.freeze({
		'no-restricted-globals': [ 'error' ].concat(restrictedGlobals)
	})
};
