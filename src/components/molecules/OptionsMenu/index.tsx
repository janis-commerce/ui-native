import React, {FC, useRef, useState} from 'react';
import {Modal, Pressable, StyleSheet, View, useWindowDimensions} from 'react-native';
import Icon from 'atoms/Icon';
import {base, primary} from 'theme/palette';
import {horizontalScale, moderateScale, scaledForDevice, verticalScale} from 'scale';
import Option from './components/Option';
import type {OptionsMenuOption, OptionsMenuProps} from './types';

export type {OptionsMenuOption, OptionsMenuProps} from './types';

interface Anchor {
	top: number;
	right: number;
}

const validIconSize = scaledForDevice(24, moderateScale);
const validMinWidth = scaledForDevice(167, horizontalScale);
const validRadius = scaledForDevice(4, moderateScale);
const validMenuPadding = scaledForDevice(8, verticalScale);
const validShadowRadius = scaledForDevice(4, moderateScale);

const styles = StyleSheet.create({
	// The font only ships the horizontal "options" glyph; rotating the square icon keeps
	// its measured box intact, so the menu anchors without manual offsets.
	verticalIcon: {
		transform: [{rotate: '90deg'}],
	},
	backdrop: {
		flex: 1,
	},
	menu: {
		position: 'absolute',
		minWidth: validMinWidth,
		paddingVertical: validMenuPadding,
		backgroundColor: base.white,
		borderRadius: validRadius,
		elevation: 4,
		shadowColor: base.black,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.25,
		shadowRadius: validShadowRadius,
	},
});

const OptionsMenu: FC<OptionsMenuProps> = ({options, color = primary.main, style, testID}) => {
	const buttonRef = useRef<View>(null);
	const [anchor, setAnchor] = useState<Anchor | null>(null);
	const {width: windowWidth} = useWindowDimensions();

	if (!options?.length) {
		return null;
	}

	const open = () =>
		buttonRef.current?.measureInWindow((x, y, width, height) =>
			setAnchor({top: y + height, right: windowWidth - (x + width)})
		);

	const close = () => setAnchor(null);

	const select = (option: OptionsMenuOption) => {
		close();
		option.onPress();
	};

	return (
		<View ref={buttonRef} style={style} collapsable={false}>
			<Pressable onPress={open} testID={testID}>
				<Icon name="options" size={validIconSize} color={color} style={styles.verticalIcon} />
			</Pressable>
			<Modal visible={!!anchor} transparent animationType="fade" onRequestClose={close}>
				<Pressable style={styles.backdrop} onPress={close}>
					<View style={[styles.menu, anchor]}>
						{options.map((option) => (
							<Option key={option.title} {...option} onPress={() => select(option)} />
						))}
					</View>
				</Pressable>
			</Modal>
		</View>
	);
};

export default OptionsMenu;
