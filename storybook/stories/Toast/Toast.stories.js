import React from 'react';
import Button from 'molecules/Button';
import Toast from 'react-native-toast-message';
import {configToast} from 'molecules/Toast';

export default {
	title: 'Components/Toast',
	argTypes: {
		type: {
			control: {
				type: 'select',
				labels: {
					success: 'Success',
					notice: 'Notice',
					warning: 'Warning',
					error: 'Error',
					action: 'Action',
				},
			},
			options: ['success', 'notice', 'warning', 'error', 'action'],
		},
		customIcon: {
			control: {
				type: 'select',
				labels: {
					null: 'None',
					iso_janis: 'Janis',
				},
			},
			options: [null, 'iso_janis'],
		},
		actionTitle: {
			control: {
				type: 'select',
				labels: {
					null: 'None',
					Select: 'Select',
				},
			},
			options: [null, 'Select'],
		},
	},
	decorators: [
		(Story) => (
			<>
				<Story />
				<Toast config={configToast} position="bottom" />
			</>
		),
	],
};

export const DefaultProps = (props) => (
	<Button
		value="Show Toast"
		onPress={() =>
			Toast.show({
				type: props.type,
				text1: props.text1,
				text2: props.text2,
				autoHide: props.autoHide,
				props: {
					actionTitle: props.actionTitle,
					showIcon: props.showIcon,
					customIcon: props.customIcon,
					showCloseIcon: props.showCloseIcon,
					iconStyle: props.iconStyle,
					onCloseCb: Toast.hide,
				},
			})
		}
	/>
);

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	type: 'success',
	text1: 'Title Text',
	text2:
		'Lorem ipsum dolor sit amet, consectetur adipiscingsed ipsum dolorrrrdfds ipsum dolor sit amet.',
	autoHide: true,
	showIcon: true,
	showCloseIcon: true,
	customIcon: null,
	actionTitle: null,
	iconStyle: {},
};
