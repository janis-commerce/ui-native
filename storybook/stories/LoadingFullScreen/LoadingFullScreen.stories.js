import React, {useState} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import LoadingFullScreen from '../../../src/components/LoadingFullScreen';
import {primary} from '../../../src/theme/palette';

export default {
	title: 'LoadingFullScreen',
	argTypes: {
		text: {
			options: ['Aguarde mientras procesamos los datos...', ''],
			control: {
				type: 'select',
				labels: {'': 'Sin texto'},
			},
		},
	},
};

export const DefaultProps = (props) => {
	const [isloading, setisloading] = useState(false);

	const Toogle = () => {
		setisloading(true);
		setTimeout(() => {
			setisloading(false);
		}, 3000);
	};

	return (
		<>
			<TouchableHighlight style={styles.ButtonStyle} onPress={Toogle}>
				<Text style={styles.TextStyles}>Open Modal</Text>
			</TouchableHighlight>
			<LoadingFullScreen {...props} isLoading={isloading} />
		</>
	);
};

const styles = StyleSheet.create({
	ButtonStyle: {
		width: 200,
		height: 50,
		borderRadius: 25,
		backgroundColor: primary.main,
		justifyContent: 'center',
		alignItems: 'center',
	},
	TextStyles: {
		color: 'white',
		fontSize: 24,
	},
});

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	text: 'Aguarde mientras procesamos los datos...',
};
