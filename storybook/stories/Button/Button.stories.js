import React from 'react';
import {View, Text} from 'react-native';
import Button from 'molecules/Button';

export default {
	title: 'Components/Button',
	argTypes: {
		icon: {
			control: {type: 'select'},
			options: {
				None: null,
				Scanner: 'scanner',
				Camera: 'camera',
				Keyboard: 'keyboard',
				Check: 'check_bold',
			},
		},
		iconPosition: {
			control: {type: 'select'},
			options: ['left', 'right'],
		},
		size: {
			control: {type: 'select'},
			options: ['large', 'small'],
		},
		variant: {
			control: {type: 'select'},
			options: ['contained', 'outlined', 'cleaned'],
		},
		color: {
			control: {type: 'select'},
			options: ['primary', 'black', 'success', 'error'],
		},
		shape: {
			control: {type: 'select'},
			options: ['oval', 'circle'],
		},
	},
};

export const DefaultButton = (args) => <Button {...args} />;

DefaultButton.args = {
	value: 'Confirm',
	icon: null,
	iconPosition: 'left',
	size: 'large',
	variant: 'contained',
	color: 'primary',
	shape: 'oval',
	disabled: false,
};

const styles = {
	section: {marginBottom: 28},
	sectionTitle: {fontFamily: 'Roboto', fontSize: 13, color: '#747679', marginBottom: 12},
	row: {flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'},
	item: {marginRight: 12, marginBottom: 12},
};

const variants = ['contained', 'outlined', 'cleaned'];
const buttonColors = ['primary', 'black', 'success', 'error'];

const Section = ({title, children}) => (
	<View style={styles.section}>
		<Text style={styles.sectionTitle}>{title}</Text>
		<View style={styles.row}>{children}</View>
	</View>
);

const Item = ({children}) => <View style={styles.item}>{children}</View>;

export const Gallery = () => (
	<View>
		{variants.map((variant) => (
			<Section key={variant} title={`variant ${variant} × color`}>
				{buttonColors.map((color) => (
					<Item key={color}>
						<Button value={color} variant={variant} color={color} />
					</Item>
				))}
				<Item>
					<Button value="disabled" variant={variant} disabled />
				</Item>
			</Section>
		))}
		<Section title="size large / small">
			<Item>
				<Button value="Large" />
			</Item>
			<Item>
				<Button value="Small" size="small" />
			</Item>
		</Section>
		<Section title="icon + text (left / right)">
			<Item>
				<Button value="Scan" icon="scanner" />
			</Item>
			<Item>
				<Button value="Scan" icon="scanner" iconPosition="right" />
			</Item>
			<Item>
				<Button value="Scan" icon="scanner" size="small" />
			</Item>
			<Item>
				<Button value="Manual" icon="keyboard" variant="outlined" />
			</Item>
		</Section>
		<Section title="icon-only: oval / circle × size">
			<Item>
				<Button icon="camera" />
			</Item>
			<Item>
				<Button icon="camera" size="small" />
			</Item>
			<Item>
				<Button icon="camera" shape="circle" />
			</Item>
			<Item>
				<Button icon="camera" shape="circle" size="small" />
			</Item>
			<Item>
				<Button icon="camera" shape="circle" variant="outlined" />
			</Item>
			<Item>
				<Button icon="camera" shape="circle" variant="cleaned" />
			</Item>
		</Section>
	</View>
);
