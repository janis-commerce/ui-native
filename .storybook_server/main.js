module.exports = {
	stories: ['../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	env: () => ({}),
	core: {
		builder: 'webpack5',
	},
	addons: ['@storybook/addon-controls', '@storybook/addon-actions', '@storybook/addon-essentials'],
};
