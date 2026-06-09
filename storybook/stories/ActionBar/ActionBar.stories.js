import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ActionBar from 'organisms/ActionBar';
import Button from 'molecules/Button';
import {palette} from 'theme/palette';

export default {
	title: 'Components/ActionBar',
	argTypes: {
		variant: {
			options: ['rounded', 'flush'],
			control: {type: 'select'},
		},
		backgroundColor: {
			control: {type: 'color'},
		},
		withSafeArea: {
			control: {type: 'boolean'},
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

const Screen = ({children}) => (
	<View style={styles.screen}>
		<View style={styles.content}>
			<Text style={styles.contentText}>Content</Text>
		</View>
		{children}
	</View>
);

export const SingleAction = (props) => (
	<Screen>
		<ActionBar
			{...props}
			actions={[{value: 'Iniciar Picking', color: 'success', onPress: () => {}}]}
		/>
	</Screen>
);

export const TwoStacked = (props) => (
	<Screen>
		<ActionBar
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
		<ActionBar
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
		<ActionBar
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
		<ActionBar
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
		<ActionBar
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
		<ActionBar
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

export const Composition = (props) => (
	<Screen>
		<ActionBar {...props}>
			<ActionBar.Row>
				<ActionBar.Item flex={0}>
					<Button icon="camera" color="black" onPress={() => {}} />
				</ActionBar.Item>
				<ActionBar.Item>
					<Button value="Confirmar Pedido" color="success" onPress={() => {}} />
				</ActionBar.Item>
			</ActionBar.Row>
		</ActionBar>
	</Screen>
);
