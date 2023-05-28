'use strict';

// possible errors
module.exports = {
	rules: Object.freeze({
		'array-callback-return': 'error',
		'default-param-last': 'error',
		'no-await-in-loop': 'error',
		'no-constructor-return': 'error',
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
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'require-atomic-updates': 'error'
	})
};
