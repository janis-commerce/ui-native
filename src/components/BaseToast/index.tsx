import React, {FC, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseToastProps} from 'react-native-toast-message';
import {black, palette} from '../../theme/palette';
import {parseType} from './utils';

export enum Types {
	Success = 'success',
	Notice = 'notice',
	Warning = 'warning',
	Error = 'error',
	Action = 'action',
}

const defaultType = Types.Notice;

export interface ToastProps extends BaseToastProps {
	type?: Types;
	children: ReactNode;
	style?: any;
}

const BaseToast: FC<ToastProps> = ({children, style, type = defaultType, ...props}) => {
	if (!children) {
		return null;
	}

	const selectedType = parseType[type];
	const backgroundColor = palette[selectedType]?.main || palette[defaultType]?.main;

	const styles = StyleSheet.create({
		container: {
			backgroundColor,
			elevation: 5,
			shadowColor: black.shadow,
		},
	});

	return (
		<View style={[styles.container, style]} {...props}>
			{children}
		</View>
	);
};

export default BaseToast;
