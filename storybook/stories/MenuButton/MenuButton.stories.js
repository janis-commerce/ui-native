import React from 'react';
import {View} from 'react-native';
import MenuButton from 'atoms/MenuButton';

export default {
	title: 'Components/MenuButton',
};

const Container = ({children}) => (
	<View style={{backgroundColor: '#fff', flex: 1, padding: 20}}>{children}</View>
);

export const Default = () => (
	<Container>
		<MenuButton onPress={() => {}} />
	</Container>
);

Default.storyName = 'Default';

export const CustomColor = () => (
	<Container>
		<MenuButton onPress={() => {}} color="#FF0000" />
	</Container>
);

CustomColor.storyName = 'Custom Color';

export const CustomSize = () => (
	<Container>
		<MenuButton onPress={() => {}} size={32} />
	</Container>
);

CustomSize.storyName = 'Custom Size';
