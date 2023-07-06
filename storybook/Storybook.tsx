import {Platform} from 'react-native';
import {getStorybookUI} from '@storybook/react-native';

/* Local files */
import '../.ondevice/storybook.requires';

const StorybookUIRoot = getStorybookUI({
	asyncStorage: null,
	host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
});

export default StorybookUIRoot;
