import React, {FC} from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import {DropdownMeasures} from '../..';

export interface DropdownProps {
	show: boolean;
	setShow: (isShowed: boolean) => void;
	children: React.Component | React.ReactNode;
	measures: DropdownMeasures;
}

const Dropdown: FC<DropdownProps> = ({show, setShow, children, measures}) => {
	const styles = StyleSheet.create({
		background: {
			width: '100%',
			height: '100%',
		},
		dropdown: {
			position: 'absolute',
			height: '100%',
			width: measures.width,
			top: measures.pageY,
			left: measures.pageX,
		},
	});

	return (
		<Modal animationType="fade" transparent visible={show}>
			<Pressable style={styles.background} onPress={() => setShow(false)}>
				<View style={styles.dropdown}>{children}</View>
			</Pressable>
		</Modal>
	);
};

export default Dropdown;
