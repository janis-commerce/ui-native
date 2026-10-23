const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withStorybook} = require('@storybook/react-native/metro/withStorybook');

const config = mergeConfig(getDefaultConfig(__dirname), {});

module.exports = withStorybook(config, {
	configPath: path.resolve(__dirname, './.ondevice'),
	useJs: true,
});
