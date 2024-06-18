import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {create} from 'react-test-renderer';
import Tabs from './';

const validScene1 = {
	title: 'Title1',
	scene: (
		<View>
			<Text>View</Text>
		</View>
	),
};
const validScene2 = {
	title: 'Title2',
	scene: (
		<View>
			<Text>View</Text>
		</View>
	),
};
const validScene3 = {
	title: 'Title3',
	scene: (
		<View>
			<Text>View</Text>
		</View>
	),
};
const validScene4 = {
	title: 'Title4',
	scene: (
		<View>
			<Text>View</Text>
		</View>
	),
};

const validData1 = {
	scenes: [validScene1],
	position: 'bottom',
	scrollContentStyle: {padding: 20},
	style: {backgroundColor: 'red'},
};

const validData2 = {
	scenes: [validScene1, validScene2, validScene3, validScene4],
	initialTab: 0,
	onPressTabCn: jest.fn(),
};

const invalidData1 = {
	...validData1,
	scenes: null,
};

const spyUseState = jest.spyOn(React, 'useState');
const spyUseEffect = jest.spyOn(React, 'useEffect');
const spyUseRef = jest.spyOn(React, 'useRef');

const setActiveTab = jest.fn();
spyUseState.mockReturnValueOnce([0, setActiveTab]);
spyUseRef.mockReturnValueOnce({current: {scrollToIndex: jest.fn()}});
spyUseEffect.mockImplementation((f) => f());

const intervalMock = 300;

describe('Tabs', () => {
	describe('should be null when', () => {
		it('scenes is not array or is empty', () => {
			const {toJSON} = create(<Tabs {...(invalidData1 as any)} />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('should render correct when', () => {
		afterEach(() => {
			jest.useRealTimers();
			clearInterval(intervalMock);
		});

		it('has minimum data', () => {
			jest.useFakeTimers();
			const {root} = create(<Tabs {...validData2} />);
			const [ButtonComp] = root.findAllByType(Pressable);
			const {onPress} = ButtonComp.props;
			onPress();

			const FlatlistComp = root.findByType(FlatList);
			const {getItemLayout, onScrollToIndexFailed} = FlatlistComp.props;
			getItemLayout(null, 1);
			onScrollToIndexFailed({index: 1, highestMeasuredFrameIndex: 50, averageItemLength: 4});
			jest.runOnlyPendingTimers();

			expect(root).toBeTruthy();
		});

		it('has valid data and press tab', () => {
			jest.useFakeTimers();
			const {root} = create(<Tabs {...(validData1 as any)} />);
			const [ButtonComp] = root.findAllByType(Pressable);
			const {onPress} = ButtonComp.props;
			onPress();

			jest.runOnlyPendingTimers();

			expect(root).toBeTruthy();
		});
	});
});
