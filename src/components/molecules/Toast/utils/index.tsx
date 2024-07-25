import React from 'react';
import Toast from '..';
import {ToastProps} from '../';

export const configToast = {
	success: (props: ToastProps) => <Toast {...props} />,
	notice: (props: ToastProps) => <Toast {...props} />,
	warning: (props: ToastProps) => <Toast {...props} />,
	error: (props: ToastProps) => <Toast {...props} />,
	action: (props: ToastProps) => <Toast {...props} />,
};

export const defaultIcon = {
	success: 'check_circle_bold',
	notice: 'info_circle_bold',
	warning: 'exclamation_triangle_bold',
	error: 'cross_big_circle_bold',
	action: 'info_circle_bold',
};
