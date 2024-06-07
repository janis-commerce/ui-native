import React from 'react';
import Toast from '..';

export const configToast = {
	picked: (props: any) => <Toast {...props} />,
	warning: (props: any) => <Toast {...props} />,
	skipped: (props: any) => <Toast {...props} />,
	missing: (props: any) => <Toast {...props} />,
	substituted: (props: any) => <Toast {...props} />,
	postponed: (props: any) => <Toast {...props} />,
	unpicked: (props: any) => <Toast {...props} />,
	success: (props: any) => <Toast {...props} />,
	message: (props: any) => <Toast {...props} />,
	error: (props: any) => <Toast {...props} />,
};
