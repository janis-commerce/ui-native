import fs from 'fs';
import path from 'path';

const fromRoot = (relativePath) => path.resolve(process.cwd(), relativePath);

const aliases = {
	'react-native-fast-image': fromRoot('.storybook/mocks/fast-image-mock.js'),
	'react-native-date-picker': fromRoot('.storybook/mocks/date-picker-mock.js'),
	atoms: fromRoot('src/components/atoms'),
	molecules: fromRoot('src/components/molecules'),
	organisms: fromRoot('src/components/organisms'),
	templates: fromRoot('src/components/templates'),
	components: fromRoot('src/components'),
	scale: fromRoot('src/scale'),
	theme: fromRoot('src/theme'),
	ts: fromRoot('src/ts'),
	utils: fromRoot('src/utils'),
};

// react-native-web 0.21 throws on findNodeHandle; bottom-sheet v4 only uses it to identify the scrollable ref.
const removeFindNodeHandle = (code) =>
	code.replace(/findNodeHandle\(ref\.current\)/g, 'ref.current');

const bottomSheetBuildPlugin = {
	name: 'bottom-sheet-find-node-handle',
	enforce: 'pre',
	transform: (code, id) =>
		id.includes('@gorhom/bottom-sheet') ? removeFindNodeHandle(code) : null,
};

// In dev, Vite pre-bundles dependencies with esbuild and skips Babel, so bottom-sheet worklets need the reanimated plugin here.
const bottomSheetPrebundlePlugin = {
	name: 'bottom-sheet-prebundle',
	setup(build) {
		build.onLoad(
			{filter: /@gorhom\/bottom-sheet\/lib\/module\/.*\.js$/},
			async ({path: filePath}) => {
				const {transformAsync} = await import('@babel/core');
				const source = removeFindNodeHandle(await fs.promises.readFile(filePath, 'utf8'));
				const {code} = await transformAsync(source, {
					filename: filePath,
					babelrc: false,
					configFile: false,
					plugins: ['react-native-reanimated/plugin'],
				});
				return {contents: code, loader: 'jsx'};
			}
		);
	},
};

export default {
	stories: ['../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-docs'],
	framework: {
		name: '@storybook/react-native-web-vite',
		options: {
			modulesToTranspile: ['react-native-reanimated', '@gorhom/bottom-sheet'],
			pluginReactOptions: {
				babel: {plugins: ['react-native-reanimated/plugin']},
			},
		},
	},
	typescript: {reactDocgen: false},
	staticDirs: ['../src/fonts/'],
	viteFinal: async (config) => ({
		...config,
		resolve: {...config.resolve, alias: {...config.resolve?.alias, ...aliases}},
		optimizeDeps: {
			...config.optimizeDeps,
			esbuildOptions: {
				...config.optimizeDeps?.esbuildOptions,
				plugins: [
					...(config.optimizeDeps?.esbuildOptions?.plugins || []),
					bottomSheetPrebundlePlugin,
				],
			},
		},
		plugins: [...(config.plugins || []), bottomSheetBuildPlugin],
	}),
};
