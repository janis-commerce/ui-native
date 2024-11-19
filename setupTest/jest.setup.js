/* eslint-disable no-undef */
jest.mock('react', () => {
	const react = jest.requireActual('react');
	return {
		...react,
		useState: jest.fn(react.useState),
		useEffect: jest.fn(react.useEffect),
		useRef: jest.fn(react.useRef),
	};
});

jest.mock('react-native-reanimated', () =>
	jest.requireActual('../node_modules/react-native-reanimated/mock')
);

jest.mock('@gorhom/bottom-sheet', () => {
	const react = require('react-native');
	return {
		__esModule: true,
		default: react.View,
		BottomSheetScrollView: react.ScrollView,
		BottomSheetFlatList: react.FlatList,
		BottomSheetView: react.View,
	};
});

jest.mock('react-native-toast-message', () => ({
	show: jest.fn(),
	hide: jest.fn(),
	setRef: jest.fn(),
}));

jest.spyOn(console, 'warn').mockImplementation(() => {});
