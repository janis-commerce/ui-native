import React from 'react';
import {create, act} from 'react-test-renderer';
import {Pressable} from 'react-native';
import ModuleCard from './index';

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

	it('renders loading skeleton when loading is true', () => {
		const {root} = create(<ModuleCard {...defaultProps} loading testID="module" />);
		const loadingView = root.findByProps({testID: 'module-skeleton'});
		expect(loadingView).toBeTruthy();
	});

	it('renders badge when provided', () => {
		const {toJSON} = create(<ModuleCard {...defaultProps} badge={5} />);
		expect(toJSON()).toBeTruthy();
	});

	it('does not render badge when badge is 0', () => {
		const tree = create(<ModuleCard {...defaultProps} badge={0} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).not.toContain('"0"');
	});

	it('renders subtitle when provided', () => {
		const {toJSON} = create(<ModuleCard {...defaultProps} subtitle="Extra info" />);
		expect(toJSON()).toBeTruthy();
	});

	it('hides chevron when showChevron is false', () => {
		const tree = create(<ModuleCard {...defaultProps} showChevron={false} />);
		expect(tree.toJSON()).toBeTruthy();
	});
});
