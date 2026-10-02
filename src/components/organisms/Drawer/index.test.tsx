import React from 'react';
import {create, act, ReactTestInstance, ReactTestRenderer} from 'react-test-renderer';
import {Animated, Modal, StyleSheet, Text, View} from 'react-native';
import Drawer from './index';

const SCREEN_WIDTH = 750;
const DEFAULT_WIDTH = SCREEN_WIDTH * 0.78;

const defaultProps = {
	isOpen: false,
	onClose: jest.fn(),
	children: <Text>Drawer Content</Text>,
};

const findHost = (root: ReactTestInstance, testID: string) =>
	root.find((node) => node.type === View && node.props.testID === testID);

const flattenStyle = (instance: ReactTestInstance) => StyleSheet.flatten(instance.props.style);

const isVisible = (root: ReactTestInstance) => root.findByType(Modal).props.visible;

const panelTranslateX = (root: ReactTestInstance) =>
	flattenStyle(findHost(root, 'my-drawer-panel')).transform[0].translateX;

const render = (element: React.ReactElement) => {
	let tree!: ReactTestRenderer;
	act(() => {
		tree = create(element);
	});
	return tree;
};

describe('Drawer component', () => {
	let startAnimation: jest.Mock;
	let stopAnimation: jest.Mock;

	beforeEach(() => {
		jest.clearAllMocks();
		startAnimation = jest.fn();
		stopAnimation = jest.fn();
		jest
			.spyOn(Animated, 'parallel')
			.mockReturnValue({start: startAnimation, stop: stopAnimation} as any);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('keeps the modal hidden and does not render the content while closed', () => {
		const tree = render(<Drawer {...defaultProps} />);
		expect(isVisible(tree.root)).toBe(false);
		expect(JSON.stringify(tree.toJSON())).not.toContain('Drawer Content');
	});

	it('shows the modal when open', () => {
		const {root} = render(<Drawer {...defaultProps} isOpen />);
		expect(isVisible(root)).toBe(true);
	});

	it('renders children content', () => {
		const tree = render(<Drawer {...defaultProps} isOpen />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Drawer Content');
	});

	it('uses the default width ratio when no width is provided', () => {
		const {root} = render(<Drawer {...defaultProps} isOpen testID="my-drawer" />);
		expect(flattenStyle(findHost(root, 'my-drawer-panel')).width).toBe(DEFAULT_WIDTH);
	});

	it('renders with custom width', () => {
		const {root} = render(<Drawer {...defaultProps} isOpen width={300} testID="my-drawer" />);
		expect(flattenStyle(findHost(root, 'my-drawer-panel')).width).toBe(300);
	});

	it('slides in from the left by default', () => {
		const {root} = render(<Drawer {...defaultProps} isOpen testID="my-drawer" />);
		expect(panelTranslateX(root)).toBe(-DEFAULT_WIDTH);
	});

	it('slides in from the right when position is right', () => {
		const {root} = render(<Drawer {...defaultProps} isOpen position="right" testID="my-drawer" />);
		expect(panelTranslateX(root)).toBe(SCREEN_WIDTH);
	});

	it('calls onClose when overlay is pressed', () => {
		const {root} = render(<Drawer {...defaultProps} isOpen testID="my-drawer" />);
		root.findByProps({testID: 'my-drawer-overlay'}).props.onPress();
		expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
	});

	it('keeps the modal visible until the close animation finishes', () => {
		const tree = render(<Drawer {...defaultProps} isOpen />);
		const onOpenAnimationEnd = startAnimation.mock.calls[0][0];

		act(() => onOpenAnimationEnd({finished: true}));
		expect(isVisible(tree.root)).toBe(true);

		act(() => {
			tree.update(<Drawer {...defaultProps} isOpen={false} />);
		});
		const onCloseAnimationEnd = startAnimation.mock.calls[1][0];
		expect(stopAnimation).toHaveBeenCalledTimes(1);
		expect(isVisible(tree.root)).toBe(true);

		act(() => onCloseAnimationEnd({finished: false}));
		expect(isVisible(tree.root)).toBe(true);

		act(() => onCloseAnimationEnd({finished: true}));
		expect(isVisible(tree.root)).toBe(false);
	});

	it('stops the running animation on unmount', () => {
		const tree = render(<Drawer {...defaultProps} isOpen />);
		act(() => {
			tree.unmount();
		});
		expect(stopAnimation).toHaveBeenCalledTimes(1);
	});

	it('closes with the hardware back button', () => {
		const {root} = render(<Drawer {...defaultProps} isOpen />);
		root.findByType(Modal).props.onRequestClose();
		expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
	});

	it('renders with custom overlay color', () => {
		const {root} = render(<Drawer {...defaultProps} isOpen overlayColor="rgba(0,0,0,0.8)" />);
		const overlays = root.findAllByType(Animated.View);
		const hasCustomOverlay = overlays.some(
			(overlay) => flattenStyle(overlay).backgroundColor === 'rgba(0,0,0,0.8)'
		);
		expect(hasCustomOverlay).toBe(true);
	});

	it('animates with the custom duration', () => {
		const timing = jest.spyOn(Animated, 'timing');
		render(<Drawer {...defaultProps} isOpen animationDuration={500} />);
		expect(timing).toHaveBeenCalledWith(
			expect.anything(),
			expect.objectContaining({duration: 500})
		);
	});

	it('applies custom style to the panel', () => {
		const {root} = render(
			<Drawer {...defaultProps} isOpen style={{backgroundColor: 'red'}} testID="my-drawer" />
		);
		expect(flattenStyle(findHost(root, 'my-drawer-panel')).backgroundColor).toBe('red');
	});
});
