import React from 'react';
import {create} from 'react-test-renderer';
import Chevron from './';
import {Pressable} from 'react-native';

const validProps = {
	style: {backgroundColor: 'red'},
	color: '#f2f2f2',
	size: 25,
	onPress: jest.fn(),
};

describe('Chevron component', () => {
	it('render correctly', () => {
		const {root} = create(
			<Chevron style={validProps.style} color={validProps.color} size={validProps.size} />
		);
		const PressableComponent = root.findByType(Pressable);
		const {onPress} = PressableComponent.props;
		onPress();

		expect(root).toBeTruthy();
	});
});
