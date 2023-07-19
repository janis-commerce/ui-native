module.exports = {
	stories: ['../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	env: () => ({}),
	addons: ['@storybook/addon-controls', '@storybook/addon-actions', '@storybook/addon-essentials'],
};
