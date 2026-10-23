import AsyncStorage from '@react-native-async-storage/async-storage';
import {view} from '../.ondevice/storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
	storage: {
		getItem: AsyncStorage.getItem,
		setItem: AsyncStorage.setItem,
	},
});

export default StorybookUIRoot;
