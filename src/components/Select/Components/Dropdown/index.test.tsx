import React from 'react';
import {create} from 'react-test-renderer';
import Dropdown from '.';
import Text from '../../../Text';
import {Pressable} from 'react-native';

const validData = {
	show: true,
	setShow: () => {},
	children: <Text>Option 1</Text>,
	measures: {
		width: 0,
		pageY: 0,
		pageX: 0,
	},
};

describe('Dropdown component', () => {
	it('render correctly and press to change show value', () => {
		const {root} = create(<Dropdown {...validData} />);
		const PresableComp = root.findByType(Pressable);
		PresableComp.props.onPress();

		expect(root).toBeTruthy();
	});
});
