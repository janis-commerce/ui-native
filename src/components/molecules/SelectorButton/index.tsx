import React, {FC} from 'react';
import {Pressable, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import Icon from 'atoms/Icon';
import {black, primary} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface SelectorInfo {
	label: string;
	onPress?: () => void;
}

export interface SelectorButtonProps extends SelectorInfo {
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

const validChevronSize = scaledForDevice(16, moderateScale);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	label: {
		flexShrink: 1,
	},
	chevron: {
		marginLeft: scaledForDevice(8, horizontalScale),
	},
});

const SelectorButton: FC<SelectorButtonProps> = ({label, onPress, style, testID}) => (
	<Pressable
		onPress={onPress}
		disabled={!onPress}
		style={[styles.container, style]}
		testID={testID}>
		<Typography type="title" size="large" color={black.main} numberOfLines={1} style={styles.label}>
			{label}
		</Typography>
		{!!onPress && (
			<Icon
				name="chevron_down"
				size={validChevronSize}
				color={primary.main}
				style={styles.chevron}
			/>
		)}
	</Pressable>
);

export default SelectorButton;
