import React from 'react';
import {create, act} from 'react-test-renderer';
import {Pressable} from 'react-native';
import Typography from 'atoms/Typography';
import {black, grey} from 'theme/palette';
import Option from './index';

describe('OptionsMenu Option', () => {
	it('runs onPress when tapped', () => {
		const onPress = jest.fn();
		const {root} = create(<Option title="Editar" onPress={onPress} />);

		act(() => root.findByType(Pressable).props.onPress());

		expect(onPress).toHaveBeenCalledTimes(1);
		expect(root.findByType(Typography).props.color).toBe(black.main);
	});

	it('shows disabled options greyed out and not pressable', () => {
		const {root} = create(<Option title="Eliminar" onPress={jest.fn()} disabled />);

		expect(root.findByType(Pressable).props.disabled).toBe(true);
		expect(root.findByType(Typography).props.color).toBe(grey[400]);
	});

	it('highlights while pressed', () => {
		const {root} = create(<Option title="Editar" onPress={jest.fn()} />);
		const styleFn = root.findByType(Pressable).props.style;

		expect(styleFn({pressed: true})[1]).toBeTruthy();
		expect(styleFn({pressed: false})[1]).toBe(false);
	});
});
