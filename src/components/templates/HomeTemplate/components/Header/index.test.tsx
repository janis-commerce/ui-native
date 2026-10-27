import React from 'react';
import {create} from 'react-test-renderer';
import MenuButton from 'atoms/MenuButton';
import Avatar from 'molecules/Avatar';
import SelectorButton from 'molecules/SelectorButton';
import {white} from 'theme/palette';
import Header from './index';

const defaultProps = {
	onMenuPress: jest.fn(),
};

const client = {name: 'Disco Martinez', logoUrl: 'https://example.com/logo.png'};

describe('Header component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<Header {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('builds the avatar from the client logo and name', () => {
		const {root} = create(<Header {...defaultProps} client={client} />);
		const avatar = root.findByType(Avatar);
		expect(avatar.props.imageUrl).toBe('https://example.com/logo.png');
		expect(avatar.props.placeholder).toBe('Disco Martinez');
		expect(avatar.props.bgColor).toBe(white.dark);
	});

	it('uses the avatar background color it receives', () => {
		const {root} = create(<Header {...defaultProps} client={client} avatarBgColor="#FF6E08" />);
		expect(root.findByType(Avatar).props.bgColor).toBe('#FF6E08');
	});

	it('calls onMenuPress when menu button is pressed', () => {
		const {root} = create(<Header {...defaultProps} testID="header" />);
		const menuButton = root.findByProps({testID: 'header-menu'});
		menuButton.props.onPress();
		expect(defaultProps.onMenuPress).toHaveBeenCalledTimes(1);
	});

	it('hides the menu button without onMenuPress', () => {
		const {root} = create(<Header />);
		expect(root.findAllByType(MenuButton)).toHaveLength(0);
	});

	it('renders the selector with the label and action it receives', () => {
		const onPress = jest.fn();
		const {root} = create(
			<Header {...defaultProps} selector={{label: 'Belgrano', onPress}} testID="header" />
		);
		const selector = root.findByProps({testID: 'header-selector'});
		expect(selector.props.label).toBe('Belgrano');

		selector.props.onPress();
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('renders neither the selector nor the avatar without them', () => {
		const {root} = create(<Header {...defaultProps} />);
		expect(root.findAllByType(SelectorButton)).toHaveLength(0);
		expect(root.findAllByType(Avatar)).toHaveLength(0);
	});

	it('renders neither the selector nor the avatar when their texts are empty', () => {
		const {root} = create(<Header {...defaultProps} client={{name: ''}} selector={{label: ''}} />);
		expect(root.findAllByType(SelectorButton)).toHaveLength(0);
		expect(root.findAllByType(Avatar)).toHaveLength(0);
	});
});
