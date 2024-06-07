import React, {FC, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseToastProps} from 'react-native-toast-message';

export interface ToastProps extends BaseToastProps {
	type?: string;
	style?: any;
	children: ReactNode;
}

const BaseToast: FC<ToastProps> = ({children, style, type, ...props}) => {
	const styles = StyleSheet.create({
		container: {
			backgroundColor: type ? 'peru' : 'grey',
		},
	});

	return (
		<View style={[styles.container, style]} {...props}>
			{children}
		</View>
	);
};

export default BaseToast;
