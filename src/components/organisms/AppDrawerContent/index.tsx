import React, {FC, ReactElement, useEffect, useRef} from 'react';
import {View, StyleSheet, SafeAreaView, Animated, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import Avatar from 'molecules/Avatar';
import Svg from 'atoms/Svg';
import List, {TypeList} from 'atoms/List';
import DrawerMenuItem from 'molecules/DrawerMenuItem';
import {base, grey} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface DrawerUserInfo {
	name: string;
	email: string;
	avatarUrl?: string;
	avatarPlaceholder?: string;
	avatarBgColor?: string;
}

export interface DrawerItem {
	icon: string;
	title: string;
	onPress: () => void;
	badge?: number;
	showIconCircle?: boolean;
	disabled?: boolean;
}

export interface AppDrawerContentProps {
	userInfo: DrawerUserInfo;
	menuItems: DrawerItem[];
	onLogout: () => void;
	logoutLabel?: string;
	logoutIcon?: string;
	appVersion: string;
	headerExtra?: ReactElement | null;
	loading?: boolean;
	testID?: string;
}

const validHeaderPadding = scaledForDevice(20, moderateScale);
const validHeaderPaddingHorizontal = scaledForDevice(20, horizontalScale);
const validAvatarSize = scaledForDevice(48, moderateScale);
const validUserTextMarginLeft = scaledForDevice(12, horizontalScale);
const validNameMarginBottom = scaledForDevice(2, moderateScale);
const validHeaderExtraPadding = scaledForDevice(8, moderateScale);
const validMenuPaddingTop = scaledForDevice(8, moderateScale);
const validBrandPaddingVertical = scaledForDevice(16, moderateScale);
const validBrandPaddingHorizontal = scaledForDevice(20, horizontalScale);
const validJanisLogoSize = scaledForDevice(24, moderateScale);
const validDividerMarginHorizontal = scaledForDevice(20, horizontalScale);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: base.white,
	},
	header: {
		padding: validHeaderPadding,
	},
	userRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	userTextColumn: {
		flex: 1,
		marginLeft: validUserTextMarginLeft,
	},
	userName: {
		marginBottom: validNameMarginBottom,
	},
	divider: {
		height: 1,
		backgroundColor: grey[200],
		marginHorizontal: validDividerMarginHorizontal,
	},
	headerExtra: {
		paddingVertical: validHeaderExtraPadding,
		paddingHorizontal: validHeaderPaddingHorizontal,
	},
	menuItems: {
		flex: 1,
		paddingTop: validMenuPaddingTop,
	},
	footer: {
		paddingTop: scaledForDevice(8, moderateScale),
	},
	brandFooter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: validBrandPaddingVertical,
		paddingHorizontal: validBrandPaddingHorizontal,
	},
	skeletonItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: scaledForDevice(14, moderateScale),
		paddingHorizontal: scaledForDevice(20, horizontalScale),
	},
	skeletonIcon: {
		width: scaledForDevice(36, moderateScale),
		height: scaledForDevice(36, moderateScale),
		borderRadius: scaledForDevice(18, moderateScale),
		backgroundColor: grey[200],
	},
	skeletonText: {
		height: scaledForDevice(14, moderateScale),
		borderRadius: scaledForDevice(4, moderateScale),
		backgroundColor: grey[200],
		marginLeft: scaledForDevice(16, horizontalScale),
	},
});

const DrawerSkeletonPulse: FC<{style?: ViewStyle | ViewStyle[]}> = ({style: pulseStyle}) => {
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

	return <Animated.View style={[pulseStyle, {opacity}]} />;
};

const DrawerMenuSkeleton: FC = () => (
	<>
		{[0.7, 0.5, 0.6, 0.4].map((width, index) => (
			<View key={index} style={styles.skeletonItem}>
				<DrawerSkeletonPulse style={styles.skeletonIcon} />
				<DrawerSkeletonPulse style={[styles.skeletonText, {width: `${width * 100}%`}]} />
			</View>
		))}
	</>
);

const AppDrawerContent: FC<AppDrawerContentProps> = ({
	userInfo,
	menuItems,
	onLogout,
	logoutLabel = 'Cerrar sesión',
	logoutIcon = 'arrow_alt_from_left',
	appVersion,
	headerExtra = null,
	loading = false,
	testID,
}) => {
	if (!userInfo || !userInfo.name) {
		return null;
	}

	return (
		<SafeAreaView style={styles.container} testID={testID}>
			<View style={styles.header}>
				<View style={styles.userRow}>
					<Avatar
						customSize={validAvatarSize}
						imageUrl={userInfo.avatarUrl}
						placeholder={userInfo.avatarPlaceholder || userInfo.name}
						bgColor={userInfo.avatarBgColor}
					/>
					<View style={styles.userTextColumn}>
						<Typography type="label" size="small" style={styles.userName}>
							{userInfo.name}
						</Typography>
						<Typography type="body" size="small" color={grey[500]}>
							{userInfo.email}
						</Typography>
					</View>
				</View>
			</View>

			<View style={styles.divider} />

			{headerExtra && <View style={styles.headerExtra}>{headerExtra}</View>}

			{loading ? (
				<View style={styles.menuItems}>
					<DrawerMenuSkeleton />
				</View>
			) : (
				<List
					data={menuItems}
					type={TypeList.ScrollView}
					style={styles.menuItems}
					renderComponent={({item}) => (
						<DrawerMenuItem
							key={item.title}
							icon={item.icon}
							title={item.title}
							onPress={item.onPress}
							badge={item.badge}
							showIconCircle={item.showIconCircle}
							disabled={item.disabled}
						/>
					)}
				/>
			)}

			<View style={styles.footer}>
				{loading ? (
					<View style={styles.skeletonItem}>
						<DrawerSkeletonPulse style={styles.skeletonIcon} />
						<DrawerSkeletonPulse style={[styles.skeletonText, {width: '50%'}]} />
					</View>
				) : (
					<DrawerMenuItem
						icon={logoutIcon}
						title={logoutLabel}
						onPress={onLogout}
						showIconCircle={false}
						testID={`${testID}-logout`}
					/>
				)}
				<View style={styles.divider} />
				<View style={styles.brandFooter}>
					<Svg name="janis-iso" size={validJanisLogoSize} />
					<Typography type="label" size="small" color={grey[400]}>
						{`Versión ${appVersion}`}
					</Typography>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default AppDrawerContent;
