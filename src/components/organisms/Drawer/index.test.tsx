import React from 'react';
import {create} from 'react-test-renderer';
import {Text, Pressable} from 'react-native';
import Drawer from './index';

const defaultProps = {
	isOpen: false,
	onClose: jest.fn(),
	children: <Text>Drawer Content</Text>,
};

describe('Drawer component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly when closed', () => {
		const {toJSON} = create(<Drawer {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders correctly when open', () => {
		const {toJSON} = create(<Drawer {...defaultProps} isOpen />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders children content', () => {
		const tree = create(<Drawer {...defaultProps} isOpen />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Drawer Content');
	});

	it('renders with right position', () => {
		const {toJSON} = create(<Drawer {...defaultProps} isOpen position="right" />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders with custom width', () => {
		const {toJSON} = create(<Drawer {...defaultProps} isOpen width={300} />);
		expect(toJSON()).toBeTruthy();
	});

	it('calls onClose when overlay is pressed', () => {
		const {root} = create(<Drawer {...defaultProps} isOpen />);
		const pressables = root.findAllByType(Pressable);
		pressables[0].props.onPress();
		expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
	});

	it('renders with custom overlay color', () => {
		const {toJSON} = create(
			<Drawer {...defaultProps} isOpen overlayColor="rgba(0,0,0,0.8)" />,
		);
		expect(toJSON()).toBeTruthy();
	});

	it('renders with custom animation duration', () => {
		const {toJSON} = create(
			<Drawer {...defaultProps} isOpen animationDuration={500} />,
		);
		expect(toJSON()).toBeTruthy();
	});

	it('renders with testID', () => {
		const {root} = create(
			<Drawer {...defaultProps} isOpen testID="my-drawer" />,
		);
		const drawer = root.findByProps({testID: 'my-drawer'});
		expect(drawer).toBeTruthy();
	});

	it('renders with custom style', () => {
		const {toJSON} = create(
			<Drawer {...defaultProps} isOpen style={{backgroundColor: 'red'}} />,
		);
		expect(toJSON()).toBeTruthy();
	});
});
