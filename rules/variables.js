'use strict';

// variables
module.exports = {
	rules: {
		'no-catch-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-use-before-define': [
			'error',
			{
				'functions': false
			}
		]
	}
};
