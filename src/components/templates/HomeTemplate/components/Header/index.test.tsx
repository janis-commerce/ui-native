import React from 'react';
import {create} from 'react-test-renderer';
import Avatar from 'molecules/Avatar';
import ClientSelector from 'molecules/ClientSelector';
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

	it('builds the avatar from the user name', () => {
		const {root} = create(
			<Header
				{...defaultProps}
				userAvatar="https://example.com/avatar.jpg"
				avatarBgColor="#E8EAF6"
			/>
		);
		const avatar = root.findByType(Avatar);
		expect(avatar.props.placeholder).toBe('Juan Carlos');
		expect(avatar.props.imageUrl).toBe('https://example.com/avatar.jpg');
	});

	it('calls onMenuPress when menu button is pressed', () => {
		const {root} = create(<Header {...defaultProps} testID="header" />);
		const menuButton = root.findByProps({testID: 'header-menu'});
		menuButton.props.onPress();
		expect(defaultProps.onMenuPress).toHaveBeenCalledTimes(1);
	});

	it('renders the client selector with the client it receives', () => {
		const onPress = jest.fn();
		const {root} = create(
			<Header {...defaultProps} client={{name: 'Disco Martinez', onPress}} testID="header" />
		);
		const clientSelector = root.findByProps({testID: 'header-client-selector'});
		expect(clientSelector.props.name).toBe('Disco Martinez');

		clientSelector.props.onPress();
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('does not render the client selector without a client', () => {
		const {root} = create(<Header {...defaultProps} />);
		expect(root.findAllByType(ClientSelector)).toHaveLength(0);
	});

	it('does not render the client selector without a client name', () => {
		const {root} = create(<Header {...defaultProps} client={{name: ''}} />);
		expect(root.findAllByType(ClientSelector)).toHaveLength(0);
	});
});
