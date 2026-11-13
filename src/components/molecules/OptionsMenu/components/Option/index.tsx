import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Typography from 'atoms/Typography';
import {black, grey} from 'theme/palette';
import {horizontalScale, scaledForDevice, verticalScale} from 'scale';
import type {OptionsMenuOption} from '../../types';

const validHeight = scaledForDevice(48, verticalScale);
const validPadding = scaledForDevice(16, horizontalScale);

const styles = StyleSheet.create({
	container: {
		height: validHeight,
		justifyContent: 'center',
		paddingHorizontal: validPadding,
	},
	pressed: {
		backgroundColor: grey[100],
	},
});

const Option: FC<OptionsMenuOption> = ({title, onPress, disabled}) => (
	<Pressable
		disabled={disabled}
		onPress={onPress}
		style={({pressed}) => [styles.container, pressed && styles.pressed]}>
		<Typography type="body" size="large" color={disabled ? grey[400] : black.main}>
			{title}
		</Typography>
	</Pressable>
);

export default Option;
