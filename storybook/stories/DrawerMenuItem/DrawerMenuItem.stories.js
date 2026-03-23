import React from 'react';
import {View} from 'react-native';
import DrawerMenuItem from 'molecules/DrawerMenuItem';

export default {
	title: 'Components/DrawerMenuItem',
	argTypes: {
		showIconCircle: {
			control: {type: 'boolean'},
		},
		disabled: {
			control: {type: 'boolean'},
		},
	},
};

const Container = ({children}) => (
	<View style={{backgroundColor: '#fff', flex: 1}}>{children}</View>
);

export const Default = (props) => (
	<Container>
		<DrawerMenuItem {...props} />
	</Container>
);

Default.storyName = 'Default';
Default.args = {
	icon: 'gear',
	title: 'Configuración',
	onPress: () => {},
	showIconCircle: true,
	disabled: false,
};

export const WithBadge = (props) => (
	<Container>
		<DrawerMenuItem {...props} />
	</Container>
);

WithBadge.storyName = 'With Badge';
WithBadge.args = {
	icon: 'bell',
	title: 'Notificaciones',
	onPress: () => {},
	badge: 23,
	showIconCircle: true,
};

export const WithoutCircle = (props) => (
	<Container>
		<DrawerMenuItem {...props} />
	</Container>
);

WithoutCircle.storyName = 'Without Circle (Logout style)';
WithoutCircle.args = {
	icon: 'arrow_alt_from_left',
	title: 'Cerrar sesión',
	onPress: () => {},
	showIconCircle: false,
};

export const Disabled = (props) => (
	<Container>
		<DrawerMenuItem {...props} />
	</Container>
);

Disabled.storyName = 'Disabled';
Disabled.args = {
	icon: 'store',
	title: 'Palermo',
	onPress: () => {},
	disabled: true,
	showIconCircle: true,
};

export const AllVariants = () => (
	<Container>
		<DrawerMenuItem icon="store" title="Palermo" onPress={() => {}} />
		<DrawerMenuItem icon="stop" title="Terminar turno" onPress={() => {}} />
		<DrawerMenuItem icon="bell" title="Notificaciones" onPress={() => {}} badge={5} />
		<DrawerMenuItem icon="gear" title="Configuración" onPress={() => {}} />
		<DrawerMenuItem icon="arrow_alt_from_left" title="Cerrar sesión" onPress={() => {}} showIconCircle={false} />
	</Container>
);

AllVariants.storyName = 'All Variants';
