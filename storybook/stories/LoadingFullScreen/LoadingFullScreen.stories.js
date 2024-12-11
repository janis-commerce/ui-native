import React, {useState} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import LoadingFullScreen from 'organisms/LoadingFullScreen';
import palette from 'theme/palette';

export default {
	title: 'Components/LoadingFullScreen',
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

const styles = StyleSheet.create({
	ButtonStyle: {
		paddingLeft: 15,
		paddingRight: 15,
		height: 50,
		borderRadius: 25,
		backgroundColor: palette.primary.blue.normal,
		justifyContent: 'center',
		alignItems: 'center',
	},
	TextStyles: {
		color: 'white',
		fontSize: 24,
	},
});

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
				<Text style={styles.TextStyles}>Preview loading screen</Text>
			</TouchableHighlight>
			<LoadingFullScreen {...props} isLoading={isloading} />
		</>
	);
};

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	text: 'Aguarde mientras procesamos los datos...',
};
