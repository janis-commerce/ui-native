const config = {
	framework: '@storybook/react-webpack5',
	stories: ['../storybook/stories/**/*.mdx', '../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-controls',
		'@storybook/addon-react-native-web',
	],
	docs: {
		autodocs: 'tag',
	},
};
export default config;
