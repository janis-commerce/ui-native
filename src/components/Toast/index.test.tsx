import React from 'react';
import {create} from 'react-test-renderer';
import Toast from './';
import {Types} from '../BaseToast';
import Text from '../Text';

const validProps = {
	text1: 'Message toast',
	type: Types.Notice,
	style: {color: 'blue'},
	children: <Text>Text</Text>,
};

describe('Toast', () => {
	it('has not text1 prop', () => {
		const {toJSON} = create(<Toast text1={undefined} children={validProps.children} />);
		expect(toJSON()).toBeNull();
	});

	describe('render correctly when', () => {
		it('has valid props', () => {
			const {toJSON} = create(
				<Toast
					style={validProps.style}
					type={validProps.type}
					text1={validProps.text1}
					children={validProps.children}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});

		it('color change if type is warning', () => {
			const {toJSON} = create(
				<Toast
					style={validProps.style}
					type={Types.Warning}
					text1={validProps.text1}
					children={validProps.children}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});
	});
});
