import React from 'react';
import {create} from 'react-test-renderer';
import {View} from 'react-native';
import AppDrawerContent from './index';

const defaultProps = {
	userInfo: {
		name: 'Juan Carlos',
		email: 'juan@janis.com',
		avatarPlaceholder: 'JC',
	},
	menuItems: [
		{icon: 'bell', title: 'Notificaciones', onPress: jest.fn(), badge: 3},
		{icon: 'gear', title: 'Configuración', onPress: jest.fn()},
	],
	onLogout: jest.fn(),
	appVersion: '1.0.0',
};

describe('AppDrawerContent component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<AppDrawerContent {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('returns null when userInfo is missing name', () => {
		const {toJSON} = create(
			<AppDrawerContent {...defaultProps} userInfo={{...defaultProps.userInfo, name: ''}} />
		);
		expect(toJSON()).toBeNull();
	});

	it('renders header extra content when provided', () => {
		const {toJSON} = create(
			<AppDrawerContent {...defaultProps} headerExtra={<View testID="warehouse-selector" />} />
		);
		expect(toJSON()).toBeTruthy();
	});

	it('renders all menu items', () => {
		const tree = create(<AppDrawerContent {...defaultProps} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Notificaciones');
		expect(json).toContain('Configuración');
	});

	it('renders logout button', () => {
		const tree = create(<AppDrawerContent {...defaultProps} testID="drawer" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Cerrar sesión');
	});

	it('renders app version', () => {
		const tree = create(<AppDrawerContent {...defaultProps} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('1.0.0');
	});

	it('renders with custom logout label', () => {
		const tree = create(<AppDrawerContent {...defaultProps} logoutLabel="Salir" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Salir');
	});

	it('renders with avatar image URL', () => {
		const {toJSON} = create(
			<AppDrawerContent
				{...defaultProps}
				userInfo={{
					...defaultProps.userInfo,
					avatarUrl: 'https://example.com/avatar.jpg',
				}}
			/>
		);
		expect(toJSON()).toBeTruthy();
	});
});
