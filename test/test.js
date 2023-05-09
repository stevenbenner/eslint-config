'use strict';

// node modules
const path = require('node:path');
const fs = require('node:fs');
const test = require('node:test');
const assert = require('node:assert');

// constants
const RULES_FOLDER = path.resolve('./rules');
const RULES_FILE_LIST = fs.readdirSync(RULES_FOLDER);

test('module is correctly structured', async (t) => {
	const eslintConfig = require('../index');

	await t.test('index returns correct types', (st) => {
		assert.strictEqual(typeof eslintConfig, 'object', 'return is an object');
		assert.strictEqual(typeof eslintConfig.rules, 'object', 'rules is an object');
		assert.ok(Object.isFrozen(eslintConfig.rules), 'rules is a frozen object');
		assert.ok(Array.isArray(eslintConfig.extends), 'extends is an array');
	});

	await t.test('extends array is correct', (st) => {
		assert.ok(
			eslintConfig.extends.every((rulesPath) => typeof rulesPath === 'string'),
			'extends array only contains strings'
		);
		assert.deepStrictEqual(
			RULES_FILE_LIST.map((rulesPath) => path.parse(rulesPath).base).sort(),
			eslintConfig.extends.map((rulesPath) => path.parse(rulesPath).base).sort(),
			'extends array contains all files in rules folder'
		);
	});
});

test('rules files are correctly structured', async (t) => {
	const subTests = [];

	for (const fileName of RULES_FILE_LIST) {
		subTests.push(t.test(`${fileName} returns correct types`, (st) => {
			const ruleSet = require(path.join(RULES_FOLDER, fileName));
			assert.strictEqual(typeof ruleSet, 'object', `${fileName} return is an object`);
			assert.strictEqual(typeof ruleSet.rules, 'object', `${fileName} rules is an object`);
			assert.ok(Object.isFrozen(ruleSet.rules), 'rules is a frozen object');
		}));
	}

	await Promise.all(subTests);
});

test('all rules exist in eslint', async (t) => {
	const Linter = require('eslint').Linter;
	const linter = new Linter();
	const eslintRules = linter.getRules();
	const subTests = [];

	for (const fileName of RULES_FILE_LIST) {
		subTests.push(t.test(`${fileName} only contains known eslint rules`, (st) => {
			const { rules } = require(path.join(RULES_FOLDER, fileName));
			Object.keys(rules).forEach((ruleName) => {
				assert.ok(eslintRules.has(ruleName), `${fileName} rule "${ruleName}" is a known eslint rule`);
			});
		}));
	};

	await Promise.all(subTests);
});

test('rules files do not duplicate rules', async (t) => {
	const subTests = [];

	for (const fileName of RULES_FILE_LIST) {
		subTests.push(t.test(`${fileName} does not duplicate rules`, (st) => {
			const { rules: theseRules } = require(path.join(RULES_FOLDER, fileName));
			RULES_FILE_LIST.forEach((otherFile) => {
				if (fileName === otherFile) {
					return;
				}
				Object.keys(theseRules).forEach((ruleName) => {
					const { rules: thoseRules } = require(path.join(RULES_FOLDER, otherFile));
					assert.ok(
						!Object.hasOwn(thoseRules, ruleName),
						`${fileName} does not duplicate rule "${ruleName}" in ${otherFile}`
					);
				});
			});
		}));
	}

	await Promise.all(subTests);
});

test('rules do not override any rules from eslint:recommended', async (t) => {
	const eslintJs = require('@eslint/js');
	const subTests = [];

	for (const fileName of RULES_FILE_LIST) {
		subTests.push(t.test(`${fileName} does not contain eslint:recommended rules`, (st) => {
			const { rules } = require(path.join(RULES_FOLDER, fileName));
			Object.keys(eslintJs.configs.recommended.rules).forEach((recommendedRule) => {
				assert.ok(
					!Object.hasOwn(rules, recommendedRule),
					`${fileName} does not contain eslint:recommended rule "${recommendedRule}"`
				);
			});
		}));
	};

	await Promise.all(subTests);
});
