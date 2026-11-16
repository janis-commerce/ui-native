import React, {FC, useEffect, useRef, useState} from 'react';
import {Modal, Pressable, StyleSheet, View, useWindowDimensions} from 'react-native';
import Icon from 'atoms/Icon';
import {base} from 'theme/palette';
import {horizontalScale, moderateScale, scaledForDevice, verticalScale} from 'scale';
import Option from './components/Option';
import type {OptionsMenuOption, OptionsMenuProps} from './types';

export type {OptionsMenuOption, OptionsMenuProps} from './types';

interface Anchor {
	top: number;
	right: number;
}

const validIconSize = scaledForDevice(24, moderateScale);
// Brings the touch area to 48 (Android's minimum target) around the 24 icon.
const validButtonPadding = scaledForDevice(12, moderateScale);
const validMinWidth = scaledForDevice(167, horizontalScale);
const validMaxWidth = scaledForDevice(280, horizontalScale);
const validRadius = scaledForDevice(4, moderateScale);
const validMenuPadding = scaledForDevice(8, verticalScale);
const validShadowRadius = scaledForDevice(4, moderateScale);

const styles = StyleSheet.create({
	// The font only ships the horizontal "options" glyph; rotating the square icon keeps
	// its measured box intact, so the menu anchors without manual offsets.
	verticalIcon: {
		transform: [{rotate: '90deg'}],
	},
	button: {
		padding: validButtonPadding,
	},
	backdrop: {
		flex: 1,
	},
	menu: {
		position: 'absolute',
		minWidth: validMinWidth,
		maxWidth: validMaxWidth,
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

const OptionsMenu: FC<OptionsMenuProps> = ({options, color, style, testID}) => {
	const buttonRef = useRef<View>(null);
	const [anchor, setAnchor] = useState<Anchor | null>(null);
	const {width: windowWidth} = useWindowDimensions();
	const hasOptions = !!options?.length;

	// Without this the menu remembers it was open and pops back up on its own when options return.
	useEffect(() => {
		if (!hasOptions) {
			setAnchor(null);
		}
	}, [hasOptions]);

	if (!hasOptions) {
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
			<Pressable onPress={open} style={styles.button} testID={testID}>
				<Icon name="options" size={validIconSize} color={color} style={styles.verticalIcon} />
			</Pressable>
			<Modal visible={!!anchor} transparent animationType="fade" onRequestClose={close}>
				<Pressable style={styles.backdrop} onPress={close}>
					{/* Disabled options don't take the touch, so without this it reaches the backdrop and closes the menu. */}
					<View style={[styles.menu, anchor]} onStartShouldSetResponder={() => true}>
						{options.map((option, index) => (
							<Option
								key={option.key ?? option.id ?? String(index)}
								title={option.title}
								disabled={option.disabled}
								onPress={() => select(option)}
							/>
						))}
					</View>
				</Pressable>
			</Modal>
		</View>
	);
};

export default OptionsMenu;
