import React from 'react';
import BaseToast from '../components/BaseToast';

export const configToast = {
	picked: (props: any) => <BaseToast {...props} />,
	warning: (props: any) => <BaseToast {...props} />,
	skipped: (props: any) => <BaseToast {...props} />,
	missing: (props: any) => <BaseToast {...props} />,
	substituted: (props: any) => <BaseToast {...props} />,
	postponed: (props: any) => <BaseToast {...props} />,
	unpicked: (props: any) => <BaseToast {...props} />,
	success: (props: any) => <BaseToast {...props} />,
	message: (props: any) => <BaseToast {...props} />,
	error: (props: any) => <BaseToast {...props} />,
};
