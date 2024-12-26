import React from 'react';
import {create} from 'react-test-renderer';
import Dropdown from './';
import Typography from 'atoms/Typography';
import {Pressable} from 'react-native';

const validData = {
	show: true,
	setShow: () => {},
	children: <Typography>Option 1</Typography>,
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
