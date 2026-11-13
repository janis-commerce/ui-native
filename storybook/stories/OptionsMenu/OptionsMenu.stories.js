import React from 'react';
import {View} from 'react-native';
import OptionsMenu from 'molecules/OptionsMenu';

export default {
	title: 'Components/OptionsMenu',
};

const Container = ({children}) => (
	<View style={{backgroundColor: '#fff', flex: 1, padding: 20, alignItems: 'flex-end'}}>
		{children}
	</View>
);

export const Default = () => (
	<Container>
		<OptionsMenu
			options={[
				{title: 'Editar', onPress: () => {}},
				{title: 'Eliminar', onPress: () => {}},
			]}
		/>
	</Container>
);

Default.storyName = 'Default';

export const WithDisabledOption = () => (
	<Container>
		<OptionsMenu
			options={[
				{title: 'Editar', onPress: () => {}},
				{title: 'Eliminar', onPress: () => {}, disabled: true},
			]}
		/>
	</Container>
);

WithDisabledOption.storyName = 'With disabled option';
