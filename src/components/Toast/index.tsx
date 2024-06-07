import React, {FC} from 'react';
import BaseToast, {ToastProps} from '../BaseToast';
import {StyleSheet} from 'react-native';
import Text from '../Text';
import {horizontalScale, moderateScale, scaledForDevice} from '../../scale';
import {base, black} from '../../theme/palette';

const Toast: FC<ToastProps> = ({type, text1, style}) => {
	const validTitle = text1 && typeof text1 === 'string';

	const styles = StyleSheet.create({
		container: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			width: '95%',
			height: 'auto',
			borderRadius: scaledForDevice(4, horizontalScale),
			padding: scaledForDevice(16, moderateScale),
		},
		title: {
			fontFamily: 'Roboto-Regular',
			fontSize: scaledForDevice(14, moderateScale),
			lineHeight: scaledForDevice(18, moderateScale),
			color: type === 'warning' ? black.main : base.white,
		},
	});

	return (
		<BaseToast type={type} style={[styles.container, style]}>
			{validTitle && <Text style={styles.title}>{text1}</Text>}
		</BaseToast>
	);
};

export default Toast;
