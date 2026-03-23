import React, {FC, useEffect, useRef} from 'react';
import {Pressable, View, StyleSheet, ViewStyle, Animated} from 'react-native';
import Icon from 'atoms/Icon';
import Typography from 'atoms/Typography';
import {base, grey, primary} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface ModuleCardProps {
	icon: string;
	title: string;
	onPress: () => void;
	disabled?: boolean;
	loading?: boolean;
	badge?: number;
	subtitle?: string;
	showChevron?: boolean;
	style?: ViewStyle;
	testID?: string;
}

const validIconContainerSize = scaledForDevice(40, moderateScale);
const validIconSize = scaledForDevice(24, moderateScale);
const validChevronSize = scaledForDevice(20, moderateScale);
const validPaddingVertical = scaledForDevice(16, moderateScale);
const validPaddingHorizontal = scaledForDevice(16, horizontalScale);
const validMarginBottom = scaledForDevice(12, moderateScale);
const validBorderRadius = scaledForDevice(12, moderateScale);
const validIconContainerRadius = scaledForDevice(20, moderateScale);
const validIconContainerMargin = scaledForDevice(12, horizontalScale);
const validBadgeSize = scaledForDevice(20, moderateScale);
const validBadgeMargin = scaledForDevice(8, horizontalScale);
const validBadgePadding = scaledForDevice(4, horizontalScale);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: base.white,
		borderRadius: validBorderRadius,
		paddingVertical: validPaddingVertical,
		paddingHorizontal: validPaddingHorizontal,
		marginBottom: validMarginBottom,
		elevation: 1,
		shadowColor: base.black,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.08,
		shadowRadius: 2,
	},
	pressed: {
		backgroundColor: grey[100],
	},
	disabled: {
		opacity: 0.5,
	},
	iconContainer: {
		width: validIconContainerSize,
		height: validIconContainerSize,
		borderRadius: validIconContainerRadius,
		backgroundColor: `${primary.main}15`,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: validIconContainerMargin,
	},
	content: {
		flex: 1,
	},
	badge: {
		backgroundColor: '#FF4343',
		borderRadius: scaledForDevice(10, moderateScale),
		minWidth: validBadgeSize,
		height: validBadgeSize,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: validBadgePadding,
		marginRight: validBadgeMargin,
	},
	skeletonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: base.white,
		borderRadius: validBorderRadius,
		paddingVertical: validPaddingVertical,
		paddingHorizontal: validPaddingHorizontal,
		marginBottom: validMarginBottom,
	},
	skeletonIcon: {
		width: validIconContainerSize,
		height: validIconContainerSize,
		borderRadius: validIconContainerRadius,
		backgroundColor: grey[200],
		marginRight: validIconContainerMargin,
	},
	skeletonTitle: {
		height: scaledForDevice(14, moderateScale),
		width: '60%',
		borderRadius: scaledForDevice(4, moderateScale),
		backgroundColor: grey[200],
	},
});

const SkeletonPulse: FC<{style?: ViewStyle; testID?: string}> = ({
	style: pulseStyle,
	testID: pulseTestID,
}) => {
	const opacity = useRef(new Animated.Value(0.4)).current;

	useEffect(() => {
		const animation = Animated.loop(
			Animated.sequence([
				Animated.timing(opacity, {toValue: 1, duration: 800, useNativeDriver: true}),
				Animated.timing(opacity, {toValue: 0.4, duration: 800, useNativeDriver: true}),
			])
		);
		animation.start();
		return () => animation.stop();
	}, [opacity]);

	return <Animated.View testID={pulseTestID} style={[pulseStyle, {opacity}]} />;
};

const ModuleCardSkeleton: FC<{testID?: string}> = ({testID: skeletonTestID}) => (
	<View style={styles.skeletonContainer} testID={`${skeletonTestID}-skeleton`}>
		<SkeletonPulse style={styles.skeletonIcon} />
		<View style={styles.content}>
			<SkeletonPulse style={styles.skeletonTitle} />
		</View>
	</View>
);

const ModuleCard: FC<ModuleCardProps> = ({
	icon,
	title,
	onPress,
	disabled = false,
	loading = false,
	badge,
	subtitle,
	showChevron = true,
	style,
	testID,
}) => {
	if (loading) {
		return <ModuleCardSkeleton testID={testID} />;
	}

	if (!icon || !title) {
		return null;
	}

	return (
		<Pressable
			testID={testID}
			onPress={onPress}
			disabled={disabled}
			style={({pressed}) => [
				styles.container,
				pressed && styles.pressed,
				disabled && styles.disabled,
				style,
			]}>
			<View style={styles.iconContainer}>
				<Icon name={icon} size={validIconSize} color={disabled ? grey[400] : primary.main} />
			</View>

			<View style={styles.content}>
				<Typography type="body" size="medium" color={disabled ? grey[400] : base.black}>
					{title}
				</Typography>
				{!!subtitle && (
					<Typography type="body" size="small" color={grey[500]}>
						{subtitle}
					</Typography>
				)}
			</View>

			{!!badge && badge > 0 && (
				<View style={styles.badge}>
					<Typography type="label" size="small" color={base.white}>
						{String(badge)}
					</Typography>
				</View>
			)}

			{showChevron && <Icon name="chevron_right" size={validChevronSize} color={grey[400]} />}
		</Pressable>
	);
};

export default ModuleCard;
