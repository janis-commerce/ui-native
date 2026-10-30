import React, {FC} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import {badge as badgeColor, base} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface BadgeProps {
	count?: number;
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

const validBadgeHeight = scaledForDevice(18, moderateScale);
const validBadgeMinWidth = scaledForDevice(24, horizontalScale);
const validBadgePadding = scaledForDevice(4, horizontalScale);

const styles = StyleSheet.create({
	badge: {
		backgroundColor: badgeColor.main,
		borderRadius: validBadgeHeight / 2,
		minWidth: validBadgeMinWidth,
		height: validBadgeHeight,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: validBadgePadding,
	},
});

const Badge: FC<BadgeProps> = ({count, style, testID}) => {
	if (!count) {
		return null;
	}

	return (
		<View style={[styles.badge, style]} testID={testID}>
			<Typography type="label" size="medium" color={base.white}>
				{String(count)}
			</Typography>
		</View>
	);
};

export default Badge;
