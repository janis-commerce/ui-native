import React from 'react';
import {create} from 'react-test-renderer';
import {Pressable} from 'react-native';
import ClientSelector from './index';

describe('ClientSelector component', () => {
	it('renders the client name', () => {
		const tree = create(<ClientSelector name="fizzmodarg" />);
		expect(JSON.stringify(tree.toJSON())).toContain('fizzmodarg');
	});

	it('shows the chevron and calls onPress when it is selectable', () => {
		const onPress = jest.fn();
		const {root} = create(<ClientSelector name="fizzmodarg" onPress={onPress} />);
		expect(root.findAllByProps({name: 'chevron_down'}).length).toBeGreaterThan(0);

		root.findByType(Pressable).props.onPress();
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('hides the chevron and disables the press without onPress', () => {
		const {root} = create(<ClientSelector name="fizzmodarg" />);
		expect(root.findAllByProps({name: 'chevron_down'})).toHaveLength(0);
		expect(root.findByType(Pressable).props.disabled).toBe(true);
	});
});
