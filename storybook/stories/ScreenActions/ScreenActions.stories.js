import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ScreenActions from 'organisms/ScreenActions';
import {palette} from 'theme/palette';

export default {
	title: 'Components/ScreenActions',
	argTypes: {
		backgroundColor: {
			control: {type: 'color'},
		},
	},
};

const isWeb = Platform.OS === 'web';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: palette.grey[200],
		...(isWeb && {maxWidth: 360, height: 480}),
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentText: {
		fontSize: 24,
		color: palette.primary.main,
	},
});

const Content = () => (
	<View style={styles.content}>
		<Text style={styles.contentText}>Content</Text>
	</View>
);

const Screen = ({children}) => (
	<View style={styles.screen}>
		<Content />
		{children}
	</View>
);

export const SingleAction = (props) => (
	<Screen>
		<ScreenActions
			{...props}
			actions={[{value: 'Iniciar Picking', color: 'success', onPress: () => {}}]}
		/>
	</Screen>
);

export const TwoStacked = (props) => (
	<Screen>
		<ScreenActions
			{...props}
			actions={[
				{value: 'Confirmar Reemplazos', color: 'success', onPress: () => {}},
				{value: 'Editar Pedido', variant: 'outlined', onPress: () => {}},
			]}
		/>
	</Screen>
);

export const UnevenPair = (props) => (
	<Screen>
		<ScreenActions
			{...props}
			actions={[
				[
					{value: 'Escanear', icon: 'scanner', color: 'black', flex: 3, onPress: () => {}},
					{value: 'No Entregar', variant: 'outlined', flex: 2, onPress: () => {}},
				],
			]}
		/>
	</Screen>
);

export const IconPlusMain = (props) => (
	<Screen>
		<ScreenActions
			{...props}
			actions={[
				[
					{icon: 'scanner', color: 'black', flex: 0, onPress: () => {}},
					{value: 'Iniciar Despacho', color: 'success', onPress: () => {}},
				],
			]}
		/>
	</Screen>
);

export const TwoPlusFullWidth = (props) => (
	<Screen>
		<ScreenActions
			{...props}
			actions={[
				[
					{value: 'Elegir Otro Punto', onPress: () => {}},
					{value: 'Posponer', variant: 'outlined', onPress: () => {}},
				],
				{value: 'Iniciar Navegación', color: 'success', onPress: () => {}},
			]}
		/>
	</Screen>
);

export const ThreeIcons = (props) => (
	<Screen>
		<ScreenActions
			{...props}
			actions={[
				[
					{icon: 'keyboard', color: 'black', onPress: () => {}},
					{icon: 'camera', color: 'black', onPress: () => {}},
					{icon: 'check_light', color: 'success', onPress: () => {}},
				],
			]}
		/>
	</Screen>
);

export const Grid2x2 = (props) => (
	<Screen>
		<ScreenActions
			{...props}
			actions={[
				[
					{value: 'Opción A', variant: 'outlined', onPress: () => {}},
					{value: 'Opción B', variant: 'outlined', onPress: () => {}},
				],
				[
					{value: 'Opción C', variant: 'outlined', onPress: () => {}},
					{value: 'Confirmar', color: 'success', onPress: () => {}},
				],
			]}
		/>
	</Screen>
);

export const TopPlacement = (props) => (
	<View style={styles.screen}>
		<ScreenActions
			{...props}
			actions={[
				[
					{value: 'Filtrar', variant: 'outlined', onPress: () => {}},
					{value: 'Ordenar', variant: 'outlined', onPress: () => {}},
				],
			]}
		/>
		<Content />
	</View>
);

export const ConditionalActions = ({canCancel, ...props}) => (
	<Screen>
		<ScreenActions
			{...props}
			actions={[
				{value: 'Confirmar', color: 'success', onPress: () => {}},
				canCancel && {value: 'Cancelar', variant: 'outlined', onPress: () => {}},
			]}
		/>
	</Screen>
);

ConditionalActions.args = {
	canCancel: false,
};

ConditionalActions.argTypes = {
	canCancel: {control: {type: 'boolean'}},
};
