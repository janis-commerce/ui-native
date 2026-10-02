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

const validBadgeSize = scaledForDevice(20, moderateScale);
const validBadgePadding = scaledForDevice(4, horizontalScale);

const styles = StyleSheet.create({
	badge: {
		backgroundColor: badgeColor.main,
		borderRadius: validBadgeSize / 2,
		minWidth: validBadgeSize,
		height: validBadgeSize,
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
			<Typography type="label" size="small" color={base.white}>
				{String(count)}
			</Typography>
		</View>
	);
};

export default Badge;
