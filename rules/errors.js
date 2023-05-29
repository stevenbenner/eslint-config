'use strict';

// possible errors
module.exports = {
	rules: Object.freeze({
		'array-callback-return': 'error',
		'default-param-last': 'error',
		'no-await-in-loop': 'error',
		'no-constant-binary-expression': 'error',
		'no-constructor-return': 'error',
		'no-duplicate-imports': [
			'error',
			{
				'includeExports': true
			}
		],
		'no-empty-static-block': 'error',
		'no-extra-parens': [
			'error',
			'functions'
		],
		'no-invalid-this': 'error',
		'no-multi-assign': 'error',
		'no-new-native-nonconstructor': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable-loop': 'error',
		'no-unused-expressions': 'error',
		'no-unused-private-class-members': 'error',
		'require-atomic-updates': 'error'
	})
};
