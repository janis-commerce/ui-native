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
	{icon: 'store', title: 'Palermo', onPress: () => {}},
	{icon: 'stop', title: 'Terminar turno', onPress: () => {}},
	{icon: 'bell', title: 'Notificaciones', onPress: () => {}, badge: 23},
	{icon: 'gear', title: 'Configuración', onPress: () => {}},
];

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
	onLogout: () => {},
	appVersion: '1.120.2.0',
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
	onLogout: () => {},
	appVersion: '1.120.2.0',
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
	appVersion: '1.120.2.0',
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
		{icon: 'bell', title: 'Notificaciones', onPress: () => {}},
		{icon: 'gear', title: 'Configuración', onPress: () => {}},
	],
	onLogout: () => {},
	appVersion: '2.0.0',
	loading: false,
};
