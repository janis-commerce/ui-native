import React from 'react';
import {create} from 'react-test-renderer';
import Text from 'atoms/Typography';
import BaseToast, {Types} from './';

const validProps = {
	children: <Text>BaseToast</Text>,
	style: {color: 'red'},
	type: Types.Notice,
};

describe('BaseToast', () => {
	describe('return null when', () => {
		it('has not children', () => {
			const {toJSON} = create(<BaseToast>{undefined}</BaseToast>);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correctly when', () => {
		it('has children', () => {
			const {toJSON} = create(<BaseToast>{validProps.children}</BaseToast>);
			expect(toJSON()).toBeTruthy();
		});

		it('and type is incorrect, assign default type', () => {
			const {toJSON} = create(<BaseToast type={'invalid' as any}>{validProps.children}</BaseToast>);
			expect(toJSON()).toBeTruthy();
		});

		it('has valid props', () => {
			const {toJSON} = create(
				<BaseToast style={validProps.style} type={validProps.type}>
					{validProps.children}
				</BaseToast>
			);
			expect(toJSON()).toBeTruthy();
		});
	});
});
