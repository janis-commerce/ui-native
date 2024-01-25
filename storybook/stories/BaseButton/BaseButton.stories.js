import React, {useState} from 'react';
import BaseButton from '../../../src/components/BaseButton';
import CheckBox from '../../../src/components/CheckBox';
import {StyleSheet, View, Text} from 'react-native';
import {palette} from '../../../src/theme/palette';

export default {
	title: 'Components/BaseButton',
	argTypes: {
		icon: {
			options: {None: null, 'Plus Circle': 'plus_circle'},
			control: {type: 'select'},
		},
		borderRadius: {control: 'number', min: 0},
		color: {
			control: {type: 'color'},
		},
	},
};

export const DefaultProps = (props) => <BaseButton {...props} />;

DefaultProps.storyName = 'Default props';

DefaultProps.args = {
	title: 'Button',
	icon: 'plus_circle',
	disabled: false,
	iconRight: false,
	borderRadius: 25,
	color: 'primary',
};

export const WithChildren = (props) => {
	const [isChecked, setIsChecked] = useState(false);

	const styles = StyleSheet.create({
		container: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: 4,
			borderRadius: 20,
			padding: 5,
			width: '100%',
		},
		text: {
			color: isChecked ? palette.primary.dark : palette.grey[600],
			paddingHorizontal: 10,
			fontWeight: 'bold',
			textAlign: 'center',
		},
	});

	return (
		<BaseButton
			android_ripple={{color: palette.primary.main}}
			onPress={() => setIsChecked(!isChecked)}
			{...props}>
			<View style={styles.container}>
				<CheckBox style={styles.check} checked={isChecked} />
				<Text style={styles.text}>Custom Children</Text>
			</View>
		</BaseButton>
	);
};

WithChildren.storyName = 'With Children Components';

WithChildren.args = {
	title: '',
	icon: null,
	disabled: false,
	iconRight: false,
	borderRadius: 4,
	style: {
		width: 200,
		backgroundColor: palette.white.main,
		borderColor: palette.grey[400],
		borderWidth: 1,
	},
	pressedColor: palette.white.dark,
};
