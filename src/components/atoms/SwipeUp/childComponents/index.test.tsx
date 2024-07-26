import React from 'react';
import {create} from 'react-test-renderer';
import {SwipeUpFlatList, SwipeUpScrollView, SwipeUpView} from './';
import {View, Text} from 'react-native';

describe('SwipeUpView', () => {
	it('should not render if not receive a children element', () => {
		const {toJSON} = create(<SwipeUpView>{null}</SwipeUpView>);

		expect(toJSON()).toStrictEqual(null);
	});

	it('should render when receive a children component', () => {
		const {toJSON} = create(
			<SwipeUpView>
				<View>
					<Text>UI-NATIVE</Text>
				</View>
			</SwipeUpView>
		);

		expect(toJSON()).toBeTruthy();
	});
});

describe('SwipeUpFlatList', () => {
	const dataItem = ['1', '2', '3', '4', '5'];
	const renderItem = ({item}: any) => <Text>{item}</Text>;

	describe('should not render and return null', () => {
		it('if not receive a data argument', () => {
			const {toJSON} = create(<SwipeUpFlatList data={[]} renderItem={renderItem} />);

			expect(toJSON()).toStrictEqual(null);
		});

		it('if not receive a renderItem function argument', () => {
			const {toJSON} = create(<SwipeUpFlatList data={dataItem} renderItem={null} />);

			expect(toJSON()).toStrictEqual(null);
		});
	});

	it('should render when receive a valid data and renderItem arguments', () => {
		const {toJSON} = create(<SwipeUpFlatList data={dataItem} renderItem={renderItem} />);

		expect(toJSON()).toBeTruthy();
	});
});

describe('SwipeUpScrollView', () => {
	it('should not render if not receive a children element', () => {
		const {toJSON} = create(<SwipeUpScrollView>{null}</SwipeUpScrollView>);

		expect(toJSON()).toStrictEqual(null);
	});

	it('should render when receive a children component', () => {
		const {toJSON} = create(
			<SwipeUpScrollView>
				<View>
					<Text>UI-NATIVE</Text>
				</View>
			</SwipeUpScrollView>
		);

		expect(toJSON()).toBeTruthy();
	});
});
