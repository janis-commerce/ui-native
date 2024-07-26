import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {BaseToastProps as Props} from 'react-native-toast-message';
import {black, palette} from 'theme/palette';
import {parseType} from './utils';

export enum Types {
	Success = 'success',
	Notice = 'notice',
	Warning = 'warning',
	Error = 'error',
	Action = 'action',
}

const defaultType = Types.Notice;

export interface BaseToastProps extends Props {
	type?: Types;
	children: ReactNode;
	style?: {} | ViewStyle;
}

const BaseToast: FC<BaseToastProps> = ({children, style, type = defaultType, ...props}) => {
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
