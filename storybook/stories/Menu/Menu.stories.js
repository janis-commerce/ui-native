import React from 'react';
import {View, Text} from 'react-native';
import Menu from 'organisms/Menu';

export default {
	title: 'Components/Menu',
	argTypes: {
		loading: {
			control: {type: 'boolean'},
		},
	},
};

const defaultUserInfo = {
	name: 'Pablo Ortiz',
	email: 'pablo.ortiz@janiscommerce.com',
	avatarPlaceholder: 'PO',
};

const defaultMenuItems = [
	{id: 'store', icon: 'store', title: 'Palermo', onPress: () => {}},
	{id: 'end-shift', icon: 'stop', title: 'Terminar turno', onPress: () => {}},
	{id: 'notifications', icon: 'bell', title: 'Notificaciones', onPress: () => {}, badge: 23},
	{id: 'settings', icon: 'gear', title: 'Configuración', onPress: () => {}},
];

const defaultClient = {name: 'fizzmodarg', onPress: () => {}};

const Container = ({children}) => (
	<View style={{flex: 1, width: 300, backgroundColor: '#fff'}}>{children}</View>
);

export const Default = (props) => (
	<Container>
		<Menu {...props} />
	</Container>
);

Default.storyName = 'Default';
Default.args = {
	userInfo: defaultUserInfo,
	menuItems: defaultMenuItems,
	client: defaultClient,
	onLogout: () => {},
	logoutLabel: 'Cerrar sesión',
	versionLabel: 'Versión 1.120.2.0',
	loading: false,
};

export const Loading = (props) => (
	<Container>
		<Menu {...props} />
	</Container>
);

Loading.storyName = 'Loading State';
Loading.args = {
	userInfo: defaultUserInfo,
	menuItems: defaultMenuItems,
	client: defaultClient,
	onLogout: () => {},
	logoutLabel: 'Cerrar sesión',
	versionLabel: 'Versión 1.120.2.0',
	loading: true,
};

export const WithHeaderExtra = (props) => (
	<Container>
		<Menu
			{...props}
			headerExtra={
				<View style={{paddingVertical: 8}}>
					<Text style={{color: '#2979FF', fontSize: 14}}>WH Constituyentes ▼</Text>
				</View>
			}
		/>
	</Container>
);

WithHeaderExtra.storyName = 'With Header Extra (Warehouse Selector)';
WithHeaderExtra.args = {
	userInfo: defaultUserInfo,
	menuItems: defaultMenuItems,
	onLogout: () => {},
	logoutLabel: 'Cerrar sesión',
	versionLabel: 'Versión 1.120.2.0',
	loading: false,
};

export const MinimalItems = (props) => (
	<Container>
		<Menu {...props} />
	</Container>
);

MinimalItems.storyName = 'Minimal Items';
MinimalItems.args = {
	userInfo: defaultUserInfo,
	menuItems: [
		{id: 'notifications', icon: 'bell', title: 'Notificaciones', onPress: () => {}},
		{id: 'settings', icon: 'gear', title: 'Configuración', onPress: () => {}},
	],
	onLogout: () => {},
	logoutLabel: 'Cerrar sesión',
	versionLabel: 'Versión 2.0.0',
	loading: false,
};
