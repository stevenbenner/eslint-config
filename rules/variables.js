'use strict';

// variables
module.exports = {
	rules: Object.freeze({
		'no-shadow': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-use-before-define': [
			'error',
			{
				'functions': false
			}
		],
		'no-var': 'error',
		'prefer-const': 'error'
	})
};
