import React from 'react';
import {create} from 'react-test-renderer';
import {Pressable} from 'react-native';
import Typography from 'atoms/Typography';
import SelectorButton from './index';

describe('SelectorButton component', () => {
	it('renders the label in a single line', () => {
		const {root} = create(<SelectorButton label="Disco Martínez" />);
		const label = root.findByType(Typography);
		expect(label.props.children).toBe('Disco Martínez');
		expect(label.props.numberOfLines).toBe(1);
	});

	it('shows the chevron and calls onPress when it is selectable', () => {
		const onPress = jest.fn();
		const {root} = create(<SelectorButton label="Disco Martínez" onPress={onPress} />);
		expect(root.findAllByProps({name: 'chevron_down'}).length).toBeGreaterThan(0);

		root.findByType(Pressable).props.onPress();
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('hides the chevron and disables the press without onPress', () => {
		const {root} = create(<SelectorButton label="Disco Martínez" />);
		expect(root.findAllByProps({name: 'chevron_down'})).toHaveLength(0);
		expect(root.findByType(Pressable).props.disabled).toBe(true);
	});
});
