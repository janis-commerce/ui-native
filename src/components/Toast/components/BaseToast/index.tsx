import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {BaseToastProps} from 'react-native-toast-message';

export interface ToastProps extends BaseToastProps {
	children: ReactNode;
}

const BaseToast: FC<ToastProps> = ({children, ...props}) => {
	return <View {...props}>{children}</View>;
};

export default BaseToast;
