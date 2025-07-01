const path = require('path');

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
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			'react-native-fast-image': path.resolve(__dirname, './mocks/fast-image-mock.js'),
		};
		return config;
	},
};
