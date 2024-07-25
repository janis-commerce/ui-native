import React from 'react';
import {create} from 'react-test-renderer';
import Text from '../../../../atoms/Text';
import {VariantOptions} from '../..';
import SwitcherComponent from './';

const validData = {
	variant: VariantOptions.Dropdown,
	show: true,
	isMulti: true,
	measures: {
		width: 0,
		pageY: 0,
		pageX: 0,
	},
	children: <Text>Text</Text>,
	modalAcceptText: 'Accept Button',
	setShow: () => {},
};

describe('SwitcherComponent', () => {
	it('when is Dropdown component', () => {
		const {toJSON} = create(
			<SwitcherComponent
				variant={validData.variant}
				show={validData.show}
				isMulti={validData.isMulti}
				measures={validData.measures}
				children={validData.children}
				modalAcceptText={validData.modalAcceptText}
				setShow={validData.setShow}
			/>
		);

		expect(toJSON()).toBeTruthy();
	});

	it('when is Modal component', () => {
		const {toJSON} = create(
			<SwitcherComponent
				variant={VariantOptions.Modal}
				show={validData.show}
				isMulti={validData.isMulti}
				measures={validData.measures}
				children={validData.children}
				modalAcceptText={validData.modalAcceptText}
				setShow={validData.setShow}
			/>
		);

		expect(toJSON()).toBeTruthy();
	});
});
