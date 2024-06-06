import React, {FC} from 'react';
import BaseToast, {ToastProps} from './components/BaseToast';
import {StyleSheet} from 'react-native';
import Text from '../Text';
import {horizontalScale, moderateScale, scaledForDevice} from '../../scale';
import {base} from '../../theme/palette';

const Toast: FC<ToastProps> = ({text1, text2, ...props}) => {
	const validTitle = text1 && typeof text1 === 'string';
	const validText = text2 && typeof text2 === 'string';

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
			fontSize: scaledForDevice(13, moderateScale),
			color: base.white,
		},
		text: {
			fontSize: scaledForDevice(13, moderateScale),
			color: base.white,
			marginTop: scaledForDevice(5, moderateScale),
		},
	});

	return (
		<BaseToast {...props}>
			{validTitle && <Text style={styles.title}>{text1}</Text>}
			{validText && <Text style={styles.text}>{text2}</Text>}
		</BaseToast>
	);
};

export default Toast;
