module.exports = {
	stories: ['../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-controls',
		'@storybook/addon-essentials',
		'@storybook/addon-react-native-web',
	],
	core: {
		builder: '@storybook/builder-webpack5',
	},
	docs: {
		autodocs: 'tag',
	},
	typescript: {reactDocgen: false},
};
