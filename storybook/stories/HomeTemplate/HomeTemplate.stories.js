import React from 'react';
import {View, Text} from 'react-native';
import HomeTemplate from 'templates/HomeTemplate';
import {MenuProvider} from 'organisms/Menu';

export default {
	title: 'Components/HomeTemplate',
	argTypes: {
		loading: {
			control: {type: 'boolean'},
		},
	},
};

const defaultModules = [
	{id: 'picking', icon: 'picking', title: 'Picking', onPress: () => {}},
	{id: 'control', icon: 'auditory', title: 'Control', onPress: () => {}},
	{id: 'repack', icon: 'box', title: 'Repack', onPress: () => {}},
];

const modulesWithDisabled = [
	...defaultModules,
	{id: 'consolidation', icon: 'round', title: 'Consolidación', onPress: () => {}, disabled: true},
];

const ShiftChipMock = () => (
	<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
		<View
			style={{
				width: 8,
				height: 8,
				borderRadius: 4,
				backgroundColor: '#1DB779',
				marginRight: 6,
			}}
		/>
		<Text style={{fontSize: 13, color: '#2F2F2F'}}>Activo ▾</Text>
	</View>
);

const menuProps = {
	userInfo: {name: 'Juan Carlos', email: 'juan.carlos@janiscommerce.com'},
	menuItems: [
		{id: 'notifications', icon: 'bell', title: 'Notificaciones', onPress: () => {}, badge: 9},
		{id: 'settings', icon: 'gear', title: 'Configuración', onPress: () => {}},
	],
	client: {name: 'fizzmodarg'},
	onLogout: () => {},
	logoutLabel: 'Cerrar sesión',
	versionLabel: 'Versión 2.8.0',
};

const HomeWithMenu = (props) => (
	<MenuProvider {...menuProps}>
		<HomeTemplate {...props} />
	</MenuProvider>
);

export const Complete = (props) => <HomeWithMenu {...props} />;

Complete.storyName = 'Complete (Picking)';
Complete.args = {
	userName: 'Juan Carlos',
	greeting: 'Bienvenido,',
	appName: 'Picking',
	environment: 'beta',
	client: {name: 'fizzmodarg'},
	selector: {label: 'Belgrano', onPress: () => {}},
	modules: defaultModules,
	sectionTitle: 'Seleccioná un módulo',
	headerExtra: <ShiftChipMock />,
	loading: false,
};

export const WithDisabledModules = (props) => <HomeWithMenu {...props} />;

WithDisabledModules.storyName = 'With Disabled Modules';
WithDisabledModules.args = {
	userName: 'Pablo',
	greeting: 'Bienvenido,',
	appName: 'Picking',
	environment: 'qa',
	modules: modulesWithDisabled,
	sectionTitle: 'Seleccioná un módulo',
	loading: false,
};

export const LoadingState = (props) => <HomeWithMenu {...props} />;

LoadingState.storyName = 'Loading State';
LoadingState.args = {
	userName: 'Juan Carlos',
	greeting: 'Bienvenido,',
	modules: defaultModules,
	sectionTitle: 'Seleccioná un módulo',
	loading: true,
};

export const Minimal = (props) => <HomeWithMenu {...props} />;

Minimal.storyName = 'Minimal (No extras)';
Minimal.args = {
	userName: 'Laura',
	greeting: 'Bienvenida,',
	modules: [
		{id: 'delivery', icon: 'shipping_big_truck', title: 'Delivery', onPress: () => {}},
		{id: 'pickup', icon: 'store', title: 'Pickup', onPress: () => {}},
		{id: 'dispatch', icon: 'box', title: 'Despacho', onPress: () => {}},
	],
	sectionTitle: 'Seleccioná un módulo',
	loading: false,
};

export const WMSExample = (props) => <HomeWithMenu {...props} />;

WMSExample.storyName = 'WMS Example';
WMSExample.args = {
	userName: 'Carlos',
	greeting: 'Bienvenido,',
	appName: 'WMS',
	environment: 'qa',
	client: {name: 'Disco'},
	selector: {label: 'Disco Martínez', onPress: () => {}},
	modules: [
		{id: 'reception', icon: 'box_arrow_right', title: 'Ingreso de mercaderías', onPress: () => {}},
		{
			id: 'collection',
			icon: 'warehouse_origen',
			title: 'Recolección de pedidos',
			onPress: () => {},
		},
		{
			id: 'order-movement',
			icon: 'control_ingreso',
			title: 'Movimiento de pedidos',
			onPress: () => {},
		},
		{
			id: 'sku-movement',
			icon: 'catalogue',
			title: 'Movimiento de SKUs',
			onPress: () => {},
			disabled: true,
		},
	],
	sectionTitle: 'Seleccioná un módulo',
	loading: false,
};
