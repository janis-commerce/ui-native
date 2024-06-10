import React from 'react';
import Toast from '..';
import {ToastProps} from '../../BaseToast';

export const configToast = {
	success: (props: ToastProps) => <Toast {...props} />,
	notice: (props: ToastProps) => <Toast {...props} />,
	warning: (props: ToastProps) => <Toast {...props} />,
	error: (props: ToastProps) => <Toast {...props} />,
	action: (props: ToastProps) => <Toast {...props} />,
};
