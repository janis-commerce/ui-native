module.exports = {
	stories: ['../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-controls',
		'@storybook/addon-essentials',
		{
			name: '@storybook/addon-react-native-web',
			options: {
				modulesToTranspile: ['react-native-reanimated', '@gorhom/bottom-sheet'],
				babelPlugins: ['react-native-reanimated/plugin'],
			},
		},
	],
	core: {
		builder: '@storybook/builder-webpack5',
	},
	docs: {
		autodocs: 'tag',
	},
	typescript: {reactDocgen: false},
	staticDirs: ['../src/fonts/'],
};
