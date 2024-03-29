'use strict';

// best practices
module.exports = {
	rules: Object.freeze({
		'accessor-pairs': 'error',
		'arrow-body-style': 'error',
		'arrow-parens': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'error',
		'consistent-return': 'error',
		'complexity': 'error',
		'curly': [
			'error',
			'all'
		],
		'dot-location': [
			'error',
			'property'
		],
		'dot-notation': [
			'error',
			{
				'allowPattern': '^[a-z]+(_[a-z]+)+$'
			}
		],
		'eqeqeq': 'error',
		'grouped-accessor-pairs': [
			'error',
			'getBeforeSet'
		],
		'max-classes-per-file': 'error',
		'no-caller': 'error',
		'no-confusing-arrow': 'error',
		'no-else-return': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-object-constructor': 'error',
		'no-octal-escape': 'error',
		'no-proto': 'error',
		'no-return-assign': 'error',
		'no-script-url': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'prefer-exponentiation-operator': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': [
			'error',
			{
				'disallowRedundantWrapping': true
			}
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'radix': 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'strict': 'error',
		'symbol-description': 'error',
		'vars-on-top': 'error',
		'wrap-iife': [
			'error',
			'any'
		]
	})
};
