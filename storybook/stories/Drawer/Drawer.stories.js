import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from 'molecules/Button';
import Drawer from 'organisms/Drawer';

export default {
	title: 'Components/Drawer',
	argTypes: {
		position: {
			control: {type: 'select'},
			options: {Left: 'left', Right: 'right'},
		},
	},
};

const DrawerWrapper = ({position = 'left', width}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<View style={{flex: 1, justifyContent: 'center', padding: 20}}>
			<Button value="Abrir Drawer" onPress={() => setIsOpen(true)} />
			<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position={position} width={width}>
				<View style={{flex: 1, padding: 20}}>
					<Text style={{fontSize: 18, fontWeight: '500', marginBottom: 20}}>Drawer Content</Text>
					<Text>Position: {position}</Text>
				</View>
			</Drawer>
		</View>
	);
};

export const Left = () => <DrawerWrapper position="left" />;
Left.storyName = 'Left (Default)';

export const Right = () => <DrawerWrapper position="right" />;
Right.storyName = 'Right';

export const CustomWidth = () => <DrawerWrapper position="left" width={200} />;
CustomWidth.storyName = 'Custom Width';
