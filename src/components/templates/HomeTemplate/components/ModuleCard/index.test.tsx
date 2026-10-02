import React from 'react';
import {create, act} from 'react-test-renderer';
import {Pressable} from 'react-native';
import Skeleton from 'atoms/Skeleton';
import {ModuleCard, ModuleCardSkeleton} from './index';

const defaultProps = {
	icon: 'picking',
	title: 'Picking',
	onPress: jest.fn(),
};

describe('ModuleCard component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<ModuleCard {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('returns null when icon is missing', () => {
		const {toJSON} = create(<ModuleCard {...defaultProps} icon="" />);
		expect(toJSON()).toBeNull();
	});

	it('returns null when title is missing', () => {
		const {toJSON} = create(<ModuleCard {...defaultProps} title="" />);
		expect(toJSON()).toBeNull();
	});

	it('calls onPress when pressed', () => {
		const {root} = create(<ModuleCard {...defaultProps} />);
		const pressable = root.findByType(Pressable);
		act(() => {
			pressable.props.onPress();
		});
		expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
	});

	it('renders with disabled state', () => {
		const {root} = create(<ModuleCard {...defaultProps} disabled />);
		const pressable = root.findByType(Pressable);
		expect(pressable.props.disabled).toBe(true);
	});

	it('renders badge when provided', () => {
		const tree = create(<ModuleCard {...defaultProps} badge={5} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('"5"');
	});

	it('does not render badge when badge is 0', () => {
		const tree = create(<ModuleCard {...defaultProps} badge={0} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).not.toContain('"0"');
	});

	it('renders subtitle when provided', () => {
		const tree = create(<ModuleCard {...defaultProps} subtitle="Extra info" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Extra info');
	});

	it('renders chevron by default', () => {
		const {root} = create(<ModuleCard {...defaultProps} />);
		expect(root.findAllByProps({name: 'chevron_right'}).length).toBeGreaterThan(0);
	});

	it('hides chevron when showChevron is false', () => {
		const {root} = create(<ModuleCard {...defaultProps} showChevron={false} />);
		expect(root.findAllByProps({name: 'chevron_right'})).toHaveLength(0);
	});

	it('applies pressed style when pressed', () => {
		const {root} = create(<ModuleCard {...defaultProps} />);
		const pressable = root.findByType(Pressable);
		const styleFn = pressable.props.style;
		expect(styleFn({pressed: true})).not.toEqual(styleFn({pressed: false}));
	});
});

describe('ModuleCardSkeleton component', () => {
	it('renders the icon and title placeholders', () => {
		const tree = create(<ModuleCardSkeleton testID="module-skeleton" />);
		expect(tree.root.findByProps({testID: 'module-skeleton'})).toBeTruthy();
		expect(tree.root.findAllByType(Skeleton)).toHaveLength(2);
		act(() => {
			tree.unmount();
		});
	});
});
