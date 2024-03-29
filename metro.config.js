const {getDefaultConfig} = require('metro-config');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 *
 */

const createMetroConfig = async () => {
	const {
		resolver: {sourceExts, assetExts},
	} = await getDefaultConfig();

	return {
		transformer: {
			getTransformOptions: async () => ({
				transform: {
					experimentalImportSupport: false,
					inlineRequires: false,
				},
			}),
			babelTransformerPath: require.resolve('react-native-svg-transformer'),
		},
		resolver: {
			assetExts: assetExts.filter((ext) => ext !== 'svg'),
			sourceExts: [...sourceExts, 'svg'],
		},
	};
};

module.exports = createMetroConfig();
