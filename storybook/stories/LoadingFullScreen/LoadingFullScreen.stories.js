import React, {useState} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import LoadingFullScreen from '../../../src/components/LoadingFullScreen';
import {primary} from '../../../src/theme/palette';
import {moderateScale} from '../../../src/utils';

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
		paddingLeft: moderateScale(15),
		paddingRight: moderateScale(15),
		height: moderateScale(50),
		borderRadius: moderateScale(25),
		backgroundColor: primary.main,
		justifyContent: 'center',
		alignItems: 'center',
	},
	TextStyles: {
		color: 'white',
		fontSize: moderateScale(24),
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
