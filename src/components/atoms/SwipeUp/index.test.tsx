import React from 'react';
import {create} from 'react-test-renderer';
import SwipeUp from './';
import {View, Text} from 'react-native';

describe('SwipeUp component', () => {
	it('should not render if not receive a children', () => {
		const {toJSON} = create(<SwipeUp>{null}</SwipeUp>);

		expect(toJSON()).toStrictEqual(null);
	});

	it('should render when receive a children component', () => {
		const {toJSON} = create(
			<SwipeUp>
				<View>
					<Text>UI-NATIVE</Text>
				</View>
			</SwipeUp>
		);

		expect(toJSON()).toBeTruthy();
	});
});
