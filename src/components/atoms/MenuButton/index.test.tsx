import React from 'react';
import {create, act} from 'react-test-renderer';
import {Pressable} from 'react-native';
import MenuButton from './index';

describe('MenuButton component', () => {
	it('renders correctly', () => {
		const {toJSON} = create(<MenuButton onPress={jest.fn()} />);
		expect(toJSON()).toBeTruthy();
	});

	it('calls onPress when pressed', () => {
		const onPress = jest.fn();
		const {root} = create(<MenuButton onPress={onPress} />);
		const pressable = root.findByType(Pressable);
		act(() => {
			pressable.props.onPress();
		});
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('renders with custom color', () => {
		const {toJSON} = create(<MenuButton onPress={jest.fn()} color="#FF0000" />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders with custom size', () => {
		const {toJSON} = create(<MenuButton onPress={jest.fn()} size={32} />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders with testID', () => {
		const {root} = create(<MenuButton onPress={jest.fn()} testID="hamburger" />);
		const pressable = root.findByProps({testID: 'hamburger'});
		expect(pressable).toBeTruthy();
	});

	it('renders with custom style', () => {
		const {toJSON} = create(<MenuButton onPress={jest.fn()} style={{marginLeft: 10}} />);
		expect(toJSON()).toBeTruthy();
	});
});
