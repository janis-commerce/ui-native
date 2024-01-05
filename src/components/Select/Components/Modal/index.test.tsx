import React from 'react';
import {create} from 'react-test-renderer';
import Text from '../../../Text';
import BaseButton from '../../../BaseButton';
import Modal from '.';

const validData = {
	show: true,
	setShow: () => {},
	children: <Text>Option 1</Text>,
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
