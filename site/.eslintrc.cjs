/** @type {import('eslint').Linter.Config} */
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', "prettier"],
	extends: [
		"eslint:recommended",
    	"plugin:@typescript-eslint/eslint-recommended",
   		"plugin:@typescript-eslint/recommended",
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
        'prettier'
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		// to enforce using type for object type definitions, can be type or interface
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		"prettier/prettier": 2 // Means error
	},
	env: {
		browser: true,
		es2019: true,
	},
};
