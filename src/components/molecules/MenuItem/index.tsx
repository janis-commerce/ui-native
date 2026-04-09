import React, {FC, ReactElement} from 'react';
import {Pressable, View, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'atoms/Icon';
import Typography from 'atoms/Typography';
import {base, grey, primary, white} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface MenuItemProps {
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
const validPaddingHorizontal = scaledForDevice(17, horizontalScale);
const validIconSize = scaledForDevice(24, moderateScale);
const validTitleMargin = scaledForDevice(14, horizontalScale);
const validBadgeSize = scaledForDevice(20, moderateScale);
const validBadgePadding = scaledForDevice(4, horizontalScale);
const validCircleSize = scaledForDevice(36, moderateScale);
const validCircleRadius = scaledForDevice(50, moderateScale);

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
		backgroundColor: '#F13B70',
		borderRadius: scaledForDevice(50, moderateScale),
		minWidth: validBadgeSize,
		height: validBadgeSize,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: validBadgePadding,
	},
});

const MenuItem: FC<MenuItemProps> = ({
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

	const textSize = showIconCircle ? 'large' : 'medium';

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
				<Icon name={icon} size={validIconSize} color={primary.main} />
			)}
			<Typography type="body" size={textSize} color={base.black} style={styles.title}>
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

export default MenuItem;
