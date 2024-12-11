import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {BaseToastProps as Props} from 'react-native-toast-message';
import palette from 'theme/palette';
import {parseTypeToColor} from './utils';

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

	const backgroundColor = parseTypeToColor[type] || palette.primary.blue.normal;

	const styles = StyleSheet.create({
		container: {
			backgroundColor,
			elevation: 5,
			shadowColor: '#00000096',
		},
	});

	return (
		<View style={[styles.container, style]} {...props}>
			{children}
		</View>
	);
};

export default BaseToast;
