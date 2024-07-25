module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: [
					'.ios.ts',
					'.ios.tsx',
					'.android.ts',
					'.android.tsx',
					'.ts',
					'.tsx',
					'.js',
					'.jsx',
					'.json',
				],
				alias: {
					atoms: './src/components/atoms',
					molecules: './src/components/molecules',
					organisms: './src/components/organisms',
					templates: './src/components/templates',
					scale: './src/scale',
					theme: './src/theme',
					ts: './src/ts',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
};
