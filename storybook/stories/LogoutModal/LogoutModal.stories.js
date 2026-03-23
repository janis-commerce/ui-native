import React, {useState} from 'react';
import {View} from 'react-native';
import Button from 'molecules/Button';
import LogoutModal from 'molecules/LogoutModal';

export default {
	title: 'Components/LogoutModal',
	argTypes: {
		appName: {
			control: {type: 'text'},
		},
		title: {
			control: {type: 'text'},
		},
		confirmLabel: {
			control: {type: 'text'},
		},
		cancelLabel: {
			control: {type: 'text'},
		},
	},
};

const LogoutModalWrapper = (props) => {
	const [visible, setVisible] = useState(false);

	return (
		<View style={{flex: 1, justifyContent: 'center', padding: 20}}>
			<Button value="Abrir LogoutModal" onPress={() => setVisible(true)} />
			<LogoutModal
				{...props}
				visible={visible}
				onConfirm={() => setVisible(false)}
				onCancel={() => setVisible(false)}
			/>
		</View>
	);
};

export const Default = (props) => <LogoutModalWrapper {...props} />;

Default.storyName = 'Default';
Default.args = {
	appName: 'Janis',
};

export const CustomApp = (props) => <LogoutModalWrapper {...props} />;

CustomApp.storyName = 'Custom App Name';
CustomApp.args = {
	appName: 'Picking',
};

export const CustomLabels = (props) => <LogoutModalWrapper {...props} />;

CustomLabels.storyName = 'Custom Labels';
CustomLabels.args = {
	appName: 'Janis',
	title: 'Salir de la app',
	message: '¿Seguro que querés salir?',
	confirmLabel: 'Salir',
	cancelLabel: 'Volver',
};
