module.exports = {
	extends: ['@commitlint/config-conventional'],
	'type-enum': ['feat', 'fix', 'ci', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'],
	rules: {
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'ci', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'],
		],
	},
};
