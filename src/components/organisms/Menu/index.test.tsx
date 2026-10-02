import React from 'react';
import {create, act} from 'react-test-renderer';
import {View} from 'react-native';
import Skeleton from 'atoms/Skeleton';
import ClientSelector from 'molecules/ClientSelector';
import Menu from './index';

const defaultProps = {
	userInfo: {
		name: 'Juan Carlos',
		email: 'juan@janis.com',
		avatarPlaceholder: 'JC',
	},
	menuItems: [
		{id: 'notifications', icon: 'bell', title: 'Notificaciones', onPress: jest.fn(), badge: 3},
		{id: 'settings', icon: 'gear', title: 'Configuración', onPress: jest.fn()},
	],
	onLogout: jest.fn(),
	logoutLabel: 'Cerrar sesión',
	versionLabel: 'Versión 1.0.0',
};

describe('Menu component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<Menu {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('returns null when userInfo is missing name', () => {
		const {toJSON} = create(
			<Menu {...defaultProps} userInfo={{...defaultProps.userInfo, name: ''}} />
		);
		expect(toJSON()).toBeNull();
	});

	it('renders header extra content when provided', () => {
		const {root} = create(
			<Menu {...defaultProps} headerExtra={<View testID="warehouse-selector" />} />
		);
		expect(root.findByProps({testID: 'warehouse-selector'})).toBeTruthy();
	});

	it('renders all menu items', () => {
		const tree = create(<Menu {...defaultProps} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Notificaciones');
		expect(json).toContain('Configuración');
	});

	it('renders logout button', () => {
		const tree = create(<Menu {...defaultProps} testID="drawer" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Cerrar sesión');
	});

	it('renders the version label it receives', () => {
		const tree = create(<Menu {...defaultProps} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Versión 1.0.0');
	});

	it('renders with custom logout label', () => {
		const tree = create(<Menu {...defaultProps} logoutLabel="Salir" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Salir');
	});

	it('renders with avatar image URL', () => {
		const {toJSON} = create(
			<Menu
				{...defaultProps}
				userInfo={{
					...defaultProps.userInfo,
					avatarUrl: 'https://example.com/avatar.jpg',
				}}
			/>
		);
		expect(toJSON()).toBeTruthy();
	});

	it('falls back to the user name as avatar placeholder', () => {
		const {toJSON} = create(
			<Menu {...defaultProps} userInfo={{name: 'Juan Carlos', email: 'juan@janis.com'}} />
		);
		expect(toJSON()).toBeTruthy();
	});

	it('renders the skeleton instead of the items while loading', () => {
		const tree = create(<Menu {...defaultProps} loading />);
		expect(tree.root.findAllByType(Skeleton).length).toBeGreaterThan(0);
		expect(JSON.stringify(tree.toJSON())).not.toContain('Notificaciones');
		act(() => {
			tree.unmount();
		});
	});

	it('keeps the logout action while loading', () => {
		const tree = create(<Menu {...defaultProps} loading testID="menu" />);
		expect(tree.root.findByProps({testID: 'menu-logout'}).props.title).toBe('Cerrar sesión');
		act(() => {
			tree.unmount();
		});
	});

	it('keeps the logout action when there are no items', () => {
		const {root} = create(<Menu {...defaultProps} menuItems={[]} testID="menu" />);
		expect(root.findByProps({testID: 'menu-logout'})).toBeTruthy();
	});

	it('renders the client selector below the user', () => {
		const onPress = jest.fn();
		const {root} = create(
			<Menu {...defaultProps} client={{name: 'fizzmodarg', onPress}} testID="menu" />
		);
		const clientSelector = root.findByProps({testID: 'menu-client-selector'});
		expect(clientSelector.props.name).toBe('fizzmodarg');

		clientSelector.props.onPress();
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('does not render the client selector without a client name', () => {
		const {root} = create(<Menu {...defaultProps} client={{name: ''}} />);
		expect(root.findAllByType(ClientSelector)).toHaveLength(0);
	});
});
