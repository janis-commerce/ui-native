import React from 'react';
import {TouchableOpacity} from 'react-native';
import {create} from 'react-test-renderer';
import Toast, {configToast} from './';
import {Types} from 'atoms/BaseToast';
import Typography from 'atoms/Typography';

const props1 = {
	showIcon: true,
	customIcon: 'iso_janis',
	showCloseIcon: true,
	actionTitle: 'Open',
	iconStyle: {color: 'red'},
};

const props2 = {
	...props1,
	onCloseCb: jest.fn(),
	actionCb: jest.fn(),
};

const validProps = {
	text1: 'Title toast',
	text2: 'Message toast',
	type: Types.Notice,
	style: {color: 'blue'},
	children: <Typography>Text</Typography>,
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
			const [actionTitle, close] = root.findAllByType(TouchableOpacity);
			const {onPress: linkOnPress} = actionTitle.props;
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

	describe('configToast', () => {
		const mockProps = {
			text1: 'Test Title',
			text2: 'Test message',
			type: Types.Success,
			children: <Typography>Test</Typography>,
		};

		it('should render success Toast correctly', () => {
			const {toJSON} = create(configToast.success(mockProps));
			expect(toJSON()).toBeTruthy();
		});

		it('should render notice Toast correctly', () => {
			const {toJSON} = create(configToast.notice({...mockProps, type: Types.Notice}));
			expect(toJSON()).toBeTruthy();
		});

		it('should render warning Toast correctly', () => {
			const {toJSON} = create(configToast.warning({...mockProps, type: Types.Warning}));
			expect(toJSON()).toBeTruthy();
		});

		it('should render error Toast correctly', () => {
			const {toJSON} = create(configToast.error({...mockProps, type: Types.Error}));
			expect(toJSON()).toBeTruthy();
		});

		it('should render action Toast correctly', () => {
			const {toJSON} = create(configToast.action({...mockProps, type: Types.Action}));
			expect(toJSON()).toBeTruthy();
		});
	});
});
