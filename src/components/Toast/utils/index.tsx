import React from 'react';
import Toast from '..';

export const configToast = {
	success: (props: any) => <Toast {...props} />,
	notice: (props: any) => <Toast {...props} />,
	warning: (props: any) => <Toast {...props} />,
	error: (props: any) => <Toast {...props} />,
	action: (props: any) => <Toast {...props} />,
};
