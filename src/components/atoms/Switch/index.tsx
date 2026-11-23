import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'atoms/Icon';
import {base, grey, primary} from 'theme/palette';
import {horizontalScale, moderateScale, scaledForDevice} from 'scale';
import {SwitchProps} from './types';

const trackWidth = scaledForDevice(44, horizontalScale);
const trackHeight = scaledForDevice(24, moderateScale);
const thumbSize = scaledForDevice(16, moderateScale);
const haloSize = scaledForDevice(36, moderateScale);
// Material's minimum touch target in dp. Not scaled: scaling shrinks it below 48 on narrow screens.
const touchTargetSize = 48;
const trackPadding = (trackHeight - thumbSize) / 2;
const haloOffset = (haloSize - thumbSize) / 2;
const checkSize = 12;
const haloOpacity = '33';

const getTrackColor = (checked: boolean, disabled: boolean) => {
	if (disabled) {
		return checked ? grey[300] : grey[200];
	}
	return checked ? primary.main : grey[500];
};

const styles = StyleSheet.create({
	touchTarget: {
		minWidth: touchTargetSize,
		minHeight: touchTargetSize,
		alignItems: 'center',
		justifyContent: 'center',
	},
	track: {
		width: trackWidth,
		height: trackHeight,
		borderRadius: trackHeight / 2,
		paddingHorizontal: trackPadding,
		flexDirection: 'row',
		alignItems: 'center',
	},
	trackChecked: {
		justifyContent: 'flex-end',
	},
	thumb: {
		width: thumbSize,
		height: thumbSize,
		borderRadius: thumbSize / 2,
		backgroundColor: base.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	halo: {
		position: 'absolute',
		top: -haloOffset,
		left: -haloOffset,
		width: haloSize,
		height: haloSize,
		borderRadius: haloSize / 2,
	},
});

const Switch: FC<SwitchProps> = ({checked, onChange, disabled = false, style, ...props}) => {
	const color = getTrackColor(checked, disabled);

	return (
		<Pressable
			{...props}
			style={[styles.touchTarget, style]}
			disabled={disabled}
			onPress={() => onChange?.(!checked)}
			accessibilityRole="switch"
			accessibilityState={{checked, disabled}}>
			{({pressed}) => (
				<View style={[styles.track, {backgroundColor: color}, checked && styles.trackChecked]}>
					<View>
						{pressed && <View style={[styles.halo, {backgroundColor: `${color}${haloOpacity}`}]} />}
						<View style={styles.thumb}>
							<Icon name="check_bold" color={color} size={checkSize} />
						</View>
					</View>
				</View>
			)}
		</Pressable>
	);
};

export default Switch;
