import React from 'react';
import {create} from 'react-test-renderer';
import Header from './index';

const defaultProps = {
	userName: 'Juan Carlos',
	onMenuPress: jest.fn(),
};

describe('Header component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<Header {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders avatar with image url and placeholder', () => {
		const {toJSON} = create(
			<Header
				{...defaultProps}
				userAvatar="https://example.com/avatar.jpg"
				avatarPlaceholder="JC"
				avatarBgColor="#E8EAF6"
			/>
		);
		expect(toJSON()).toBeTruthy();
	});

	it('calls onMenuPress when menu button is pressed', () => {
		const {root} = create(<Header {...defaultProps} testID="header" />);
		const menuButton = root.findByProps({testID: 'header-menu'});
		menuButton.props.onPress();
		expect(defaultProps.onMenuPress).toHaveBeenCalledTimes(1);
	});

	it('renders topBarLabel when provided', () => {
		const tree = create(<Header {...defaultProps} topBarLabel="Disco Martinez" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Disco Martinez');
	});

	it('does not render topBarLabel when not provided', () => {
		const tree = create(<Header {...defaultProps} testID="header" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).not.toContain('topbar-label');
	});

	it('renders chevron when showTopBarChevron is true', () => {
		const {root} = create(<Header {...defaultProps} topBarLabel="Warehouse" showTopBarChevron />);
		expect(root.findAllByProps({name: 'chevron_down'}).length).toBeGreaterThan(0);
	});

	it('does not render chevron by default', () => {
		const {root} = create(<Header {...defaultProps} topBarLabel="Warehouse" />);
		expect(root.findAllByProps({name: 'chevron_down'})).toHaveLength(0);
	});

	it('calls topBarLabelOnPress when label is pressed', () => {
		const onPress = jest.fn();
		const {root} = create(
			<Header
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
});
