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

jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock');
	Reanimated.default.call = () => {};

	return Reanimated;
});

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

jest.mock('react-native-gesture-handler', () => {
	const View = require('react-native').View;
	return {
		Swipeable: View,
		DrawerLayout: View,
		State: {},
		ScrollView: View,
		Slider: View,
		Switch: View,
		TextInput: View,
		ToolbarAndroid: View,
		ViewPagerAndroid: View,
		DrawerLayoutAndroid: View,
		WebView: View,
		NativeViewGestureHandler: View,
		TapGestureHandler: View,
		FlingGestureHandler: View,
		ForceTouchGestureHandler: View,
		LongPressGestureHandler: View,
		PanGestureHandler: View,
		PinchGestureHandler: View,
		RotationGestureHandler: View,
		RawButton: View,
		BaseButton: View,
		RectButton: View,
		BorderlessButton: View,
		FlatList: View,
		gestureHandlerRootHOC: jest.fn((Component) => Component),
		GestureHandlerRootView: View,
		Directions: {},
		// Delegate Pressable to RN core to preserve onPress behavior in tests
		Pressable: require('react-native').Pressable,
	};
});

jest.mock('react-native-toast-message', () => ({
	show: jest.fn(),
	hide: jest.fn(),
	setRef: jest.fn(),
}));

jest.mock('react-native-date-picker', () => {
	const React = require('react');
	const MockDatePicker = (props) => React.createElement('RNDatePicker', props);
	return {
		__esModule: true,
		default: MockDatePicker,
	};
});

jest.spyOn(console, 'warn').mockImplementation(() => {});
