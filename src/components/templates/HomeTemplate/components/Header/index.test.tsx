import React from 'react';
import {create} from 'react-test-renderer';
import MenuButton from 'atoms/MenuButton';
import Avatar from 'molecules/Avatar';
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

	it('does not render the avatar without a client', () => {
		const {root} = create(<Header {...defaultProps} />);
		expect(root.findAllByType(Avatar)).toHaveLength(0);
	});

	it('does not render the avatar without a client name', () => {
		const {root} = create(<Header {...defaultProps} client={{name: ''}} />);
		expect(root.findAllByType(Avatar)).toHaveLength(0);
	});
});
