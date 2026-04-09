import React from 'react';
import {View} from 'react-native';
import MenuItem from 'molecules/MenuItem';

export default {
	title: 'Components/MenuItem',
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
		<MenuItem {...props} />
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
		<MenuItem {...props} />
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
		<MenuItem {...props} />
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
		<MenuItem {...props} />
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
		<MenuItem icon="store" title="Palermo" onPress={() => {}} />
		<MenuItem icon="stop" title="Terminar turno" onPress={() => {}} />
		<MenuItem icon="bell" title="Notificaciones" onPress={() => {}} badge={5} />
		<MenuItem icon="gear" title="Configuración" onPress={() => {}} />
		<MenuItem
			icon="arrow_alt_from_left"
			title="Cerrar sesión"
			onPress={() => {}}
			showIconCircle={false}
		/>
	</Container>
);

AllVariants.storyName = 'All Variants';
