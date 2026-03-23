import React from 'react';
import {View, Text} from 'react-native';
import HomeTemplate from 'templates/HomeTemplate';

export default {
	title: 'Components/HomeTemplate',
	argTypes: {
		loading: {
			control: {type: 'boolean'},
		},
		showTopBarChevron: {
			control: {type: 'boolean'},
		},
		showDisabledToggle: {
			control: {type: 'boolean'},
		},
		initialShowDisabled: {
			control: {type: 'boolean'},
		},
	},
};

const defaultModules = [
	{icon: 'picking', title: 'Picking', onPress: () => {}},
	{icon: 'auditory', title: 'Control', onPress: () => {}},
	{icon: 'box', title: 'Repack', onPress: () => {}},
];

const modulesWithDisabled = [
	{icon: 'picking', title: 'Picking', onPress: () => {}},
	{icon: 'auditory', title: 'Control', onPress: () => {}},
	{icon: 'box', title: 'Repack', onPress: () => {}},
	{icon: 'round', title: 'Consolidación', onPress: () => {}, disabled: true},
];

const MockIllustration = () => (
	<View style={{width: 80, height: 80, borderRadius: 40, backgroundColor: '#E8EAF6', justifyContent: 'center', alignItems: 'center'}}>
		<Text style={{fontSize: 30}}>📦</Text>
	</View>
);

const ShiftChipMock = () => (
	<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
		<View style={{width: 8, height: 8, borderRadius: 4, backgroundColor: '#1DB779', marginRight: 6}} />
		<Text style={{fontSize: 13, color: '#2F2F2F'}}>Activo ▾</Text>
	</View>
);

export const Complete = (props) => <HomeTemplate {...props} />;

Complete.storyName = 'Complete (Picking)';
Complete.args = {
	userName: 'Juan Carlos',
	appName: 'Picking',
	avatarPlaceholder: 'JC',
	avatarBgColor: '#E8EAF6',
	environment: 'beta',
	onMenuPress: () => {},
	topBarLabel: 'fizzmodarg',
	topBarLabelOnPress: () => {},
	showTopBarChevron: true,
	modules: defaultModules,
	sectionTitle: 'Seleccioná un módulo',
	illustration: MockIllustration,
	headerExtra: <ShiftChipMock />,
	loading: false,
	showDisabledToggle: true,
	initialShowDisabled: true,
};

export const WithDisabledModules = (props) => <HomeTemplate {...props} />;

WithDisabledModules.storyName = 'With Disabled Modules + Toggle';
WithDisabledModules.args = {
	userName: 'Pablo',
	appName: 'Picking',
	avatarPlaceholder: 'PO',
	environment: 'qa',
	onMenuPress: () => {},
	modules: modulesWithDisabled,
	sectionTitle: 'Seleccioná un módulo',
	loading: false,
	showDisabledToggle: true,
	initialShowDisabled: true,
};

export const LoadingState = (props) => <HomeTemplate {...props} />;

LoadingState.storyName = 'Loading State';
LoadingState.args = {
	userName: 'Juan Carlos',
	onMenuPress: () => {},
	modules: defaultModules,
	sectionTitle: 'Seleccioná un módulo',
	loading: true,
};

export const Minimal = (props) => <HomeTemplate {...props} />;

Minimal.storyName = 'Minimal (No extras)';
Minimal.args = {
	userName: 'Laura',
	onMenuPress: () => {},
	modules: [
		{icon: 'shipping_big_truck', title: 'Delivery', onPress: () => {}},
		{icon: 'store', title: 'Pickup', onPress: () => {}},
		{icon: 'box', title: 'Despacho', onPress: () => {}},
	],
	sectionTitle: 'Seleccioná un módulo',
	loading: false,
};

export const WMSExample = (props) => <HomeTemplate {...props} />;

WMSExample.storyName = 'WMS Example';
WMSExample.args = {
	userName: 'Carlos',
	appName: 'WMS',
	avatarPlaceholder: 'CM',
	environment: 'qa',
	onMenuPress: () => {},
	topBarLabel: 'Disco Martinez',
	showTopBarChevron: true,
	modules: [
		{icon: 'box_arrow_right', title: 'Ingreso de mercaderías', onPress: () => {}},
		{icon: 'warehouse_origen', title: 'Recolección de pedidos', onPress: () => {}},
		{icon: 'control_ingreso', title: 'Movimiento de pedidos', onPress: () => {}},
		{icon: 'catalogue', title: 'Movimiento de SKUs', onPress: () => {}, disabled: true},
	],
	sectionTitle: 'Seleccioná un módulo',
	illustration: MockIllustration,
	loading: false,
	showDisabledToggle: true,
	initialShowDisabled: true,
};
