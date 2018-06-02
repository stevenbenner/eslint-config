'use strict';

// stylistic issues
module.exports = {
	rules: {
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'block-spacing': 'error',
		'brace-style': 'error',
		'camelcase': 'error',
		'comma-dangle': 'error',
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'max-statements-per-line': 'error',
		'multiline-ternary': [
			'error',
			'never'
		],
		'new-cap': 'error',
		'new-parens': 'error',
		'newline-per-chained-call': [
			'error',
			{
				'ignoreChainWithDepth': 4
			}
		],
		'no-array-constructor': 'error',
		'no-lonely-if': 'error',
		'no-multiple-empty-lines': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': [
			'error',
			'always'
		],
		'one-var-declaration-per-line': 'error',
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'quote-props': [
			'error',
			'as-needed'
		],
		'quotes': [
			'error',
			'single',
			{
				'avoidEscape': true
			}
		],
		'require-jsdoc': [
			'error',
			{
				'require': {
					'FunctionDeclaration': true,
					'MethodDefinition': true,
					'ClassDeclaration': true,
					'ArrowFunctionExpression': true
				}
			}
		],
		'semi': 'error',
		'semi-spacing': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			'never'
		],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				'block': {
					'markers': [ '!' ],
					'balanced': true
				}
			}
		],
		'unicode-bom': 'error'
	}
};
