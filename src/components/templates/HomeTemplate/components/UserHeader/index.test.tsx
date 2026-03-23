import React from 'react';
import {create} from 'react-test-renderer';
import {View} from 'react-native';
import UserHeader from './index';

const defaultProps = {
	userName: 'Juan Carlos',
	onMenuPress: jest.fn(),
};

describe('UserHeader component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<UserHeader {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('returns null when userName is missing', () => {
		const {toJSON} = create(<UserHeader {...defaultProps} userName="" />);
		expect(toJSON()).toBeNull();
	});

	it('renders avatar in top bar', () => {
		const {toJSON} = create(
			<UserHeader
				{...defaultProps}
				userAvatar="https://example.com/avatar.jpg"
				avatarPlaceholder="JC"
			/>
		);
		expect(toJSON()).toBeTruthy();
	});

	it('renders environment chip below name', () => {
		const {toJSON} = create(<UserHeader {...defaultProps} environment="qa" />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders environment chip with appName', () => {
		const tree = create(<UserHeader {...defaultProps} environment="beta" appName="Picking" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking BETA');
	});

	it('calls onMenuPress when menu button is pressed', () => {
		const {root} = create(<UserHeader {...defaultProps} testID="header" />);
		const menuButton = root.findByProps({testID: 'header-menu'});
		menuButton.props.onPress();
		expect(defaultProps.onMenuPress).toHaveBeenCalledTimes(1);
	});

	it('renders topBarLabel when provided', () => {
		const tree = create(<UserHeader {...defaultProps} topBarLabel="Disco Martinez" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Disco Martinez');
	});

	it('renders chevron when showTopBarChevron is true', () => {
		const {toJSON} = create(
			<UserHeader {...defaultProps} topBarLabel="Warehouse" showTopBarChevron />
		);
		expect(toJSON()).toBeTruthy();
	});

	it('calls topBarLabelOnPress when label is pressed', () => {
		const onPress = jest.fn();
		const {root} = create(
			<UserHeader
				{...defaultProps}
				topBarLabel="Warehouse"
				topBarLabelOnPress={onPress}
				testID="header"
			/>
		);
		const label = root.findByProps({testID: 'header-topbar-label'});
		label.props.onPress();
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('does not render topBarLabel when not provided', () => {
		const tree = create(<UserHeader {...defaultProps} testID="header" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).not.toContain('topbar-label');
	});

	it('renders children when provided', () => {
		const {toJSON} = create(
			<UserHeader {...defaultProps}>
				<View testID="shift-chip" />
			</UserHeader>
		);
		expect(toJSON()).toBeTruthy();
	});
});
