const config = {
	framework: '@storybook/react-webpack5',
	stories: ['../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-controls',
		'@storybook/addon-react-native-web',
	],
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			// Transform all direct `react-native` imports to `react-native-web`
			'react-native$': 'react-native-web',
			// make sure we're rendering output using **web** Storybook not react-native
			'@storybook/react-native': '@storybook/react',
			// plugin-level react-native-web extensions
			'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
			// ...
		};

		const fileLoaderRule = config.module.rules.find((rule) => rule.test.test('.svg'));
		fileLoaderRule.exclude = /\.svg$/;
		config.module.rules.push({
			test: /\.svg$/,
			loader: 'svg-react-loader',
		});
	
		return config;
	}
};
export default config;
