'use strict';

// possible errors
module.exports = {
	rules: {
		'no-await-in-loop': 'error',
		'no-extra-parens': [
			'error',
			'functions'
		],
		'no-template-curly-in-string': 'error',
		'no-unsafe-negation': 'error',
		'valid-jsdoc': [
			'error',
			{
				'requireReturn': false
			}
		]
	}
};
