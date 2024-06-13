import React from 'react';
import {TouchableOpacity} from 'react-native';
import {create} from 'react-test-renderer';
import Toast from '.';
import {Types} from '../BaseToast';
import Text from '../Text';

const props1 = {
	showIcon: true,
	customIcon: 'iso_janis',
	showClose: true,
	link: 'Open',
	iconStyle: {color: 'red'},
};

const props2 = {
	...props1,
	onCloseCb: jest.fn(),
	linkCb: jest.fn(),
};

const validProps = {
	text1: 'Title toast',
	text2: 'Message toast',
	type: Types.Notice,
	style: {color: 'blue'},
	children: <Text>Text</Text>,
};

describe('Toast', () => {
	describe('return null when', () => {
		it('has not text1 prop', () => {
			const {toJSON} = create(
				<Toast text2={undefined} type={validProps.type} children={validProps.children} />
			);
			expect(toJSON()).toBeNull();
		});

		it('has not type prop', () => {
			const {toJSON} = create(
				<Toast text2={validProps.text2} type={undefined} children={validProps.children} />
			);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correctly when', () => {
		it('has valid props case 1', () => {
			const {toJSON} = create(
				<Toast
					style={validProps.style}
					type={'invalid' as any}
					text2={validProps.text2}
					children={validProps.children}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});

		it('has valid props case 2', () => {
			const {root} = create(
				<Toast
					style={validProps.style}
					type={validProps.type}
					text1={validProps.text1}
					text2={validProps.text2}
					children={validProps.children}
					props={props1}
				/>
			);
			const [link, close] = root.findAllByType(TouchableOpacity);
			const {onPress: linkOnPress} = link.props;
			const {onPress: closeOnPress} = close.props;
			linkOnPress();
			closeOnPress();
		});

		it('color change if type is warning', () => {
			const {toJSON} = create(
				<Toast
					style={validProps.style}
					type={Types.Warning}
					text2={validProps.text2}
					children={validProps.children}
					props={props2}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});
	});
});
