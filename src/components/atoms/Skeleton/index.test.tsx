import React from 'react';
import {create, act, ReactTestRenderer} from 'react-test-renderer';
import {Animated, StyleSheet, View} from 'react-native';
import Skeleton from './index';

const render = (element: React.ReactElement) => {
	let tree!: ReactTestRenderer;
	act(() => {
		tree = create(element);
	});
	return tree;
};

describe('Skeleton component', () => {
	let startAnimation: jest.Mock;
	let stopAnimation: jest.Mock;

	beforeEach(() => {
		startAnimation = jest.fn();
		stopAnimation = jest.fn();
		jest
			.spyOn(Animated, 'loop')
			.mockReturnValue({start: startAnimation, stop: stopAnimation} as any);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('starts the pulse animation on mount', () => {
		render(<Skeleton />);
		expect(startAnimation).toHaveBeenCalledTimes(1);
	});

	it('pulses between the minimum opacity and full opacity', () => {
		const timing = jest.spyOn(Animated, 'timing');
		render(<Skeleton />);
		expect(timing).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({toValue: 1}));
		expect(timing).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({toValue: 0.4}));
	});

	it('stops the pulse animation on unmount', () => {
		const tree = render(<Skeleton />);
		act(() => {
			tree.unmount();
		});
		expect(stopAnimation).toHaveBeenCalledTimes(1);
	});

	it('applies the shape it receives over the default background', () => {
		const {root} = render(<Skeleton style={{width: 40, borderRadius: 20}} testID="skeleton" />);
		const skeleton = root.find((node) => node.type === View && node.props.testID === 'skeleton');
		const style = StyleSheet.flatten(skeleton.props.style);
		expect(style).toEqual(expect.objectContaining({width: 40, borderRadius: 20}));
		expect(style.backgroundColor).toBeDefined();
	});
});
