import React, {FC} from 'react';
import {TextStyle, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {moderateScale, scaledForDevice} from '../../scale';
import {defaultIcon} from './utils';
import {base, black} from '../../theme/palette';
import BaseToast, {BaseToastProps} from '../BaseToast';
import Text from '../Text';
import Icon from '../Icon';

export interface ToastProps extends BaseToastProps {
	props?: {
		showIcon?: boolean;
		customIcon?: string;
		showClose?: boolean;
		link?: string;
		onCloseCb?: () => void;
		linkCb?: () => void;
		iconStyle?: TextStyle;
	};
}

const Toast: FC<ToastProps> = ({type, text1, text2, style, props}) => {
	const validType = type && typeof type === 'string';
	const validTitle = text1 && typeof text1 === 'string';
	const validMessage = text2 && typeof text2 === 'string';

	if (!validType || !validMessage) {
		return null;
	}

	const {
		showIcon = false,
		customIcon = null,
		showClose = false,
		link = null,
		onCloseCb = () => {},
		linkCb = () => {},
		iconStyle = {},
	} = props || {};

	const validColor = type === 'warning' ? black.main : base.white;

	const defaultIconName = defaultIcon[type] || defaultIcon.notice;
	const selectedIconName = customIcon || defaultIconName;
	const horizontalAlign = validTitle ? 'flex-start' : 'center';

	const styles = StyleSheet.create({
		container: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: horizontalAlign,
			width: '95%',
			borderRadius: scaledForDevice(4, moderateScale),
			paddingHorizontal: scaledForDevice(16, moderateScale),
			paddingVertical: scaledForDevice(16, moderateScale),
		},
		textWrapper: {
			flex: 1,
		},
		title: {
			fontFamily: 'Roboto-Bold',
			fontSize: scaledForDevice(18, moderateScale),
			lineHeight: scaledForDevice(22, moderateScale),
			marginBottom: scaledForDevice(10, moderateScale),
			color: validColor,
		},
		message: {
			fontFamily: 'Roboto-Regular',
			fontSize: scaledForDevice(14, moderateScale),
			lineHeight: scaledForDevice(20, moderateScale),
			color: validColor,
		},
		icon: {
			paddingRight: scaledForDevice(10, moderateScale),
		},
		feedbackWrapper: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		},
		closeIcon: {
			paddingLeft: scaledForDevice(10, moderateScale),
		},
		link: {
			marginRight: scaledForDevice(5, moderateScale),
			marginLeft: scaledForDevice(10, moderateScale),
			fontFamily: 'Roboto-Medium',
			fontSize: scaledForDevice(14, moderateScale),
			lineHeight: scaledForDevice(16, moderateScale),
			color: validColor,
		},
	});
	return (
		<BaseToast type={type} style={[styles.container, style]}>
			{showIcon && (
				<Icon
					name={selectedIconName}
					color={validColor}
					size={24}
					style={{...styles.icon, ...iconStyle}}
				/>
			)}

			<View style={styles.textWrapper}>
				{validTitle && <Text style={styles.title}>{text1}</Text>}
				{validMessage && <Text style={styles.message}>{text2}</Text>}
			</View>

			<View style={styles.feedbackWrapper}>
				{link && (
					<TouchableOpacity onPress={linkCb} activeOpacity={0.6}>
						<Text style={styles.link}>{link}</Text>
					</TouchableOpacity>
				)}
				{showClose && (
					<TouchableOpacity onPress={onCloseCb} activeOpacity={0.6}>
						<Icon name="cross_light" color={validColor} size={24} style={styles.closeIcon} />
					</TouchableOpacity>
				)}
			</View>
		</BaseToast>
	);
};
export default Toast;
