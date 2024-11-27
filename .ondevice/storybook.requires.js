/* do not change this file, it is auto generated by storybook. */

import {
	configure,
	addDecorator,
	addParameters,
	addArgsEnhancer,
	clearDecorators,
} from '@storybook/react-native';

global.STORIES = [
	{
		titlePrefix: '',
		directory: './storybook/stories',
		files: '**/*.stories.?(ts|tsx|js|jsx)',
		importPathMatcher:
			'^\\.[\\\\/](?:storybook\\/stories(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$',
	},
];

import '@storybook/addon-ondevice-actions/register';
import '@storybook/addon-ondevice-controls/register';

import {argsEnhancers} from '@storybook/addon-actions/dist/modern/preset/addArgs';

import {decorators, parameters} from './preview';

if (decorators) {
	if (__DEV__) {
		// stops the warning from showing on every HMR
		require('react-native').LogBox.ignoreLogs([
			'`clearDecorators` is deprecated and will be removed in Storybook 7.0',
		]);
	}
	// workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
	clearDecorators();
	decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
	addParameters(parameters);
}

try {
	argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
	return {
		'./storybook/stories/Avatar/Avatar.stories.js': require('../storybook/stories/Avatar/Avatar.stories.js'),
		'./storybook/stories/Button/Button.stories.js': require('../storybook/stories/Button/Button.stories.js'),
		'./storybook/stories/BaseInput/BaseInput.stories.js': require('../storybook/stories/BaseInput/BaseInput.stories.js'),
		'./storybook/stories/Carousel/Carousel.stories.js': require('../storybook/stories/Carousel/Carousel.stories.js'),
		'./storybook/stories/CheckBox/CheckBox.stories.js': require('../storybook/stories/CheckBox/CheckBox.stories.js'),
		'./storybook/stories/DesignStystem/Colors.stories.js': require('../storybook/stories/DesignStystem/Colors.stories.js'),
		'./storybook/stories/DesignStystem/Icons.stories.js': require('../storybook/stories/DesignStystem/Icons.stories.js'),
		'./storybook/stories/FullScreenMessage/FullScreenMessage.stories.js': require('../storybook/stories/FullScreenMessage/FullScreenMessage.stories.js'),
		'./storybook/stories/Image/Image.stories.js': require('../storybook/stories/Image/Image.stories.js'),
		'./storybook/stories/Input/Input.stories.js': require('../storybook/stories/Input/Input.stories.js'),
		'./storybook/stories/LayoutWithBottomButtons/LayoutWithBottomButtons.stories.js': require('../storybook/stories/LayoutWithBottomButtons/LayoutWithBottomButtons.stories.js'),
		'./storybook/stories/List/List.stories.js': require('../storybook/stories/List/List.stories.js'),
		'./storybook/stories/Loading/Loading.stories.js': require('../storybook/stories/Loading/Loading.stories.js'),
		'./storybook/stories/LoadingFullScreen/LoadingFullScreen.stories.js': require('../storybook/stories/LoadingFullScreen/LoadingFullScreen.stories.js'),
		'./storybook/stories/MainCardList/MainCardList.stories.js': require('../storybook/stories/MainCardList/MainCardList.stories.js'),
		'./storybook/stories/ProgressBar/ProgressBar.stories.js': require('../storybook/stories/ProgressBar/ProgressBar.stories.js'),
		'./storybook/stories/RadioButton/RadioButton.stories.js': require('../storybook/stories/RadioButton/RadioButton.stories.js'),
		'./storybook/stories/Select/Select.stories.js': require('../storybook/stories/Select/Select.stories.js'),
		'./storybook/stories/StatusChip/StatusChip.stories.js': require('../storybook/stories/StatusChip/StatusChip.stories.js'),
		'./storybook/stories/Svg/Svg.stories.js': require('../storybook/stories/Svg/Svg.stories.js'),
		'./storybook/stories/SwipeItemSelectionList/SwipeItemSelectionList.stories.js': require('../storybook/stories/SwipeItemSelectionList/SwipeItemSelectionList.stories.js'),
		'./storybook/stories/SwipeList/SwipeList.stories.js': require('../storybook/stories/SwipeList/SwipeList.stories.js'),
		'./storybook/stories/SwipeUp/SwipeUp.stories.js': require('../storybook/stories/SwipeUp/SwipeUp.stories.js'),
		'./storybook/stories/Tabs/Tabs.stories.js': require('../storybook/stories/Tabs/Tabs.stories.js'),
		'./storybook/stories/Text/Text.stories.js': require('../storybook/stories/Text/Text.stories.js'),
		'./storybook/stories/Toast/Toast.stories.js': require('../storybook/stories/Toast/Toast.stories.js'),
	};
};

configure(getStories, module, false);
