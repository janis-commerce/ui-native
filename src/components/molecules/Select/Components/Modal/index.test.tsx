import React from 'react';
import {create} from 'react-test-renderer';
import Typography from 'atoms/Typography';
import BaseButton from 'atoms/BaseButton';
import Modal from './';

const validData = {
	show: true,
	setShow: () => {},
	children: <Typography>Option 1</Typography>,
	measures: {
		width: 0,
		pageY: 0,
		pageX: 0,
	},
	isMulti: true,
	modalAcceptText: 'accept',
};

describe('Modal component', () => {
	it('render correctly and press to change show value', () => {
		const {root} = create(<Modal {...validData} />);
		const PresableComp = root.findByType(BaseButton);
		PresableComp.props.onPress();

		expect(root).toBeTruthy();
	});
});
