import React from 'react';
import {Pressable, Text, View} from 'react-native';
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

const spyUseEffect = jest.spyOn(React, 'useEffect');
const spyUseRef = jest.spyOn(React, 'useRef');

spyUseEffect.mockImplementation((f) => f());
spyUseRef.mockReturnValueOnce({current: {scrollToIndex: jest.fn()}});

describe('Tabs', () => {
	describe('should be null when', () => {
		it('scenes is not array or is empty', () => {
			const {toJSON} = create(<Tabs {...(invalidData1 as any)} />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('should render correct when', () => {
		it('has minimum data', () => {
			const {toJSON} = create(<Tabs {...validData2} />);
			expect(toJSON()).toBeTruthy();
		});

		it('has valid data and press tab', () => {
			const {root} = create(<Tabs {...(validData1 as any)} />);
			const [ButtonComp] = root.findAllByType(Pressable);
			const {onPress} = ButtonComp.props;
			onPress();

			expect(root).toBeTruthy();
		});
	});
});
