import React from 'react';
import {create, act} from 'react-test-renderer';
import {Pressable, View} from 'react-native';
import MenuItem from './index';

const defaultProps = {
	icon: 'gear',
	title: 'Configuración',
	onPress: jest.fn(),
};

describe('MenuItem component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<MenuItem {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('returns null when icon is missing', () => {
		const {toJSON} = create(<MenuItem {...defaultProps} icon="" />);
		expect(toJSON()).toBeNull();
	});

	it('returns null when title is missing', () => {
		const {toJSON} = create(<MenuItem {...defaultProps} title="" />);
		expect(toJSON()).toBeNull();
	});

	it('calls onPress when pressed', () => {
		const {root} = create(<MenuItem {...defaultProps} />);
		const pressable = root.findByType(Pressable);
		act(() => {
			pressable.props.onPress();
		});
		expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
	});

	it('renders badge when provided', () => {
		const {toJSON} = create(<MenuItem {...defaultProps} badge={3} />);
		expect(toJSON()).toBeTruthy();
	});

	it('does not render badge when badge is 0', () => {
		const tree = create(<MenuItem {...defaultProps} badge={0} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).not.toContain('"0"');
	});

	it('renders icon circle by default', () => {
		const {root} = create(<MenuItem {...defaultProps} />);
		const views = root.findAllByType(View);
		const circleView = views.find((v) => {
			const style = v.props.style;
			return style && style.borderRadius;
		});
		expect(circleView).toBeTruthy();
	});

	it('does not render icon circle when showIconCircle is false', () => {
		const tree = create(<MenuItem {...defaultProps} showIconCircle={false} />);
		expect(tree.toJSON()).toBeTruthy();
	});

	it('renders with disabled state', () => {
		const {root} = create(<MenuItem {...defaultProps} disabled />);
		const pressable = root.findByType(Pressable);
		expect(pressable.props.disabled).toBe(true);
	});

	it('applies pressed style when pressed', () => {
		const {root} = create(<MenuItem {...defaultProps} />);
		const pressable = root.findByType(Pressable);
		const styleFn = pressable.props.style;
		const pressedStyles = styleFn({pressed: true});
		const unpressedStyles = styleFn({pressed: false});
		expect(pressedStyles).not.toEqual(unpressedStyles);
	});
});
