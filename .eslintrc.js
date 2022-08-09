module.exports = {
	env: {
		es6: true,
		jest: true,
	},
	extends: ['airbnb', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		__DEV__: 'readonly',
		fetch: false,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'no-use-before-define': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'off',
			{
				extensions: ['.jsx', '.js', '.ts', '.tsx'],
			},
		],
		'import/prefer-default-export': 'off',
		'react/no-array-index-key': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
