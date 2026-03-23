import React, {FC, ReactElement} from 'react';
import {Pressable, View, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'atoms/Icon';
import Typography from 'atoms/Typography';
import {base, grey, primary, white, error as errorColor} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface DrawerMenuItemProps {
	icon: string;
	title: string;
	onPress: () => void;
	badge?: number;
	showIconCircle?: boolean;
	disabled?: boolean;
	rightElement?: ReactElement;
	style?: ViewStyle;
	testID?: string;
}

const validPaddingVertical = scaledForDevice(14, moderateScale);
const validPaddingHorizontal = scaledForDevice(20, horizontalScale);
const validIconSize = scaledForDevice(20, moderateScale);
const validIconSizeNoCircle = scaledForDevice(22, moderateScale);
const validTitleMargin = scaledForDevice(16, horizontalScale);
const validBadgeSize = scaledForDevice(20, moderateScale);
const validBadgePadding = scaledForDevice(4, horizontalScale);
const validCircleSize = scaledForDevice(36, moderateScale);
const validCircleRadius = scaledForDevice(18, moderateScale);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: validPaddingVertical,
		paddingHorizontal: validPaddingHorizontal,
	},
	pressed: {
		backgroundColor: grey[100],
	},
	iconCircle: {
		width: validCircleSize,
		height: validCircleSize,
		borderRadius: validCircleRadius,
		backgroundColor: white.light,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		flex: 1,
		marginLeft: validTitleMargin,
	},
	badge: {
		backgroundColor: errorColor.main,
		borderRadius: scaledForDevice(10, moderateScale),
		minWidth: validBadgeSize,
		height: validBadgeSize,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: validBadgePadding,
	},
});

const DrawerMenuItem: FC<DrawerMenuItemProps> = ({
	icon,
	title,
	onPress,
	badge,
	showIconCircle = true,
	disabled = false,
	rightElement,
	style,
	testID,
}) => {
	if (!icon || !title) {
		return null;
	}

	return (
		<Pressable
			testID={testID}
			onPress={onPress}
			disabled={disabled}
			style={({pressed}) => [styles.container, pressed && styles.pressed, style]}>
			{showIconCircle ? (
				<View style={styles.iconCircle}>
					<Icon name={icon} size={validIconSize} color={primary.main} />
				</View>
			) : (
				<Icon name={icon} size={validIconSizeNoCircle} color={primary.main} />
			)}
			<Typography type="body" size="medium" color={base.black} style={styles.title}>
				{title}
			</Typography>
			{!!badge && badge > 0 && (
				<View style={styles.badge}>
					<Typography type="label" size="small" color={base.white}>
						{String(badge)}
					</Typography>
				</View>
			)}
			{rightElement}
		</Pressable>
	);
};

export default DrawerMenuItem;
