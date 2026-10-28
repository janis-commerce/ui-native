import React, {FC, ReactElement} from 'react';
import {Pressable, View, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'atoms/Icon';
import Typography from 'atoms/Typography';
import Badge from 'atoms/Badge';
import {black, grey, primary, secondaryBlue} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface MenuItemProps {
	icon: string;
	title: string;
	onPress: () => void;
	badge?: number;
	showIconCircle?: boolean;
	rightElement?: ReactElement;
	style?: ViewStyle;
	testID?: string;
}

const validPaddingVertical = scaledForDevice(12, moderateScale);
const validPaddingHorizontal = scaledForDevice(16, horizontalScale);
const validIconSize = scaledForDevice(24, moderateScale);
const validTitleMargin = scaledForDevice(16, horizontalScale);
const validPlainTitleMargin = scaledForDevice(8, horizontalScale);
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
		backgroundColor: secondaryBlue.light,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		flex: 1,
		marginLeft: validTitleMargin,
	},
	plainTitle: {
		flex: 1,
		marginLeft: validPlainTitleMargin,
	},
});

const titleVariants = {
	withCircle: {type: 'title', size: 'mediumRegular', style: styles.title},
	plain: {type: 'body', size: 'large', style: styles.plainTitle},
} as const;

const MenuItem: FC<MenuItemProps> = ({
	icon,
	title,
	onPress,
	badge,
	showIconCircle = true,
	rightElement,
	style,
	testID,
}) => {
	if (!icon || !title) {
		return null;
	}

	const titleVariant = showIconCircle ? titleVariants.withCircle : titleVariants.plain;

	return (
		<Pressable
			testID={testID}
			onPress={onPress}
			style={({pressed}) => [styles.container, pressed && styles.pressed, style]}>
			{showIconCircle ? (
				<View style={styles.iconCircle}>
					<Icon name={icon} size={validIconSize} color={primary.main} />
				</View>
			) : (
				<Icon name={icon} size={validIconSize} color={primary.main} />
			)}
			<Typography
				type={titleVariant.type}
				size={titleVariant.size}
				color={black.main}
				style={titleVariant.style}>
				{title}
			</Typography>
			<Badge count={badge} />
			{rightElement}
		</Pressable>
	);
};

export default MenuItem;
