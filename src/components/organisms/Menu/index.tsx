import React, {FC, ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';
import Typography from 'atoms/Typography';
import Avatar from 'molecules/Avatar';
import Svg from 'atoms/Svg';
import List, {TypeList} from 'atoms/List';
import Skeleton from 'atoms/Skeleton';
import MenuItem, {MenuItemProps} from 'molecules/MenuItem';
import ClientSelector, {ClientInfo} from 'molecules/ClientSelector';
import {base, grey, white} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import {composeTestID} from 'utils';

export interface MenuUserInfo {
	name: string;
	email: string;
	avatarUrl?: string;
	avatarPlaceholder?: string;
	avatarBgColor?: string;
}

export type MenuItemData = MenuItemProps & {id: string};

export interface MenuProps {
	userInfo: MenuUserInfo;
	menuItems: MenuItemData[];
	onLogout: () => void;
	logoutLabel: string;
	logoutIcon?: string;
	versionLabel: string;
	client?: ClientInfo;
	headerExtra?: ReactElement | null;
	loading?: boolean;
	testID?: string;
}

const validHeaderPadding = scaledForDevice(20, moderateScale);
const validHeaderPaddingHorizontal = scaledForDevice(20, horizontalScale);
const validAvatarSize = scaledForDevice(36, moderateScale);
const validUserTextMarginLeft = scaledForDevice(12, horizontalScale);
const validNameMarginBottom = scaledForDevice(2, moderateScale);
const validHeaderExtraPadding = scaledForDevice(8, moderateScale);
const validMenuPaddingTop = scaledForDevice(8, moderateScale);
const validBrandPaddingVertical = scaledForDevice(16, moderateScale);
const validBrandPaddingHorizontal = scaledForDevice(20, horizontalScale);
const validJanisLogoSize = scaledForDevice(24, moderateScale);
const validDividerMarginHorizontal = scaledForDevice(17, horizontalScale);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: base.white,
	},
	header: {
		padding: validHeaderPadding,
		backgroundColor: white.light,
		shadowColor: base.black,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.08,
		shadowRadius: 4,
		elevation: 2,
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
	},
	skeletonText: {
		height: scaledForDevice(14, moderateScale),
		borderRadius: scaledForDevice(4, moderateScale),
		marginLeft: scaledForDevice(16, horizontalScale),
	},
});

const MenuSkeleton: FC = () => (
	<>
		{[0.7, 0.5, 0.6, 0.4].map((width, index) => (
			<View key={index} style={styles.skeletonItem}>
				<Skeleton style={styles.skeletonIcon} />
				<Skeleton style={[styles.skeletonText, {width: `${width * 100}%`}]} />
			</View>
		))}
	</>
);

const renderMenuItem = ({item: {id, ...menuItemProps}}: {item: MenuItemData}) => (
	<MenuItem key={id} {...menuItemProps} />
);

const Menu: FC<MenuProps> = ({
	userInfo,
	menuItems,
	onLogout,
	logoutLabel,
	logoutIcon = 'arrow_alt_from_left',
	versionLabel,
	client,
	headerExtra = null,
	loading = false,
	testID,
}) => {
	if (!userInfo || !userInfo.name) {
		return null;
	}

	return (
		<View style={styles.container} testID={testID}>
			<View style={styles.header}>
				<View style={styles.userRow}>
					<Avatar
						customSize={validAvatarSize}
						imageUrl={userInfo.avatarUrl}
						placeholder={userInfo.avatarPlaceholder || userInfo.name}
						bgColor={userInfo.avatarBgColor}
					/>
					<View style={styles.userTextColumn}>
						<Typography type="body" size="large" style={styles.userName}>
							{userInfo.name}
						</Typography>
						<Typography type="body" size="medium" color={grey[500]}>
							{userInfo.email}
						</Typography>
					</View>
				</View>
			</View>

			<View style={styles.divider} />

			{!!client?.name && (
				<>
					<ClientSelector
						{...client}
						style={styles.headerExtra}
						testID={composeTestID(testID, 'client-selector')}
					/>
					<View style={styles.divider} />
				</>
			)}

			{headerExtra && (
				<>
					<View style={styles.headerExtra}>{headerExtra}</View>
					<View style={styles.divider} />
				</>
			)}

			<View style={styles.menuItems}>
				{loading ? (
					<MenuSkeleton />
				) : (
					<List data={menuItems} type={TypeList.ScrollView} renderComponent={renderMenuItem} />
				)}
			</View>

			<View style={styles.footer}>
				<MenuItem
					icon={logoutIcon}
					title={logoutLabel}
					onPress={onLogout}
					showIconCircle={false}
					testID={composeTestID(testID, 'logout')}
				/>
				<View style={styles.divider} />
				<View style={styles.brandFooter}>
					<Svg name="janis-iso" size={validJanisLogoSize} />
					<Typography type="body" size="small" color={grey[400]}>
						{versionLabel}
					</Typography>
				</View>
			</View>
		</View>
	);
};

export default Menu;
