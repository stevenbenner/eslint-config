'use strict';

// possible errors
module.exports = {
	rules: Object.freeze({
		'array-callback-return': 'error',
		'no-await-in-loop': 'error',
		'no-duplicate-imports': [
			'error',
			{
				'includeExports': true
			}
		],
		'no-extra-parens': [
			'error',
			'functions'
		],
		'no-invalid-this': 'error',
		'no-multi-assign': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'require-atomic-updates': 'error'
	})
};
