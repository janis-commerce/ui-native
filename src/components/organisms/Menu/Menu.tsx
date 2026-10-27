import React, {FC, ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';
import Typography from 'atoms/Typography';
import Avatar from 'molecules/Avatar';
import Svg from 'atoms/Svg';
import List, {TypeList} from 'atoms/List';
import Skeleton from 'atoms/Skeleton';
import MenuItem, {MenuItemProps} from 'molecules/MenuItem';
import type {ClientInfo} from 'ts/interfaces/client';
import {base, black, grey, white} from 'theme/palette';
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

const validPaddingHorizontal = scaledForDevice(16, horizontalScale);
const validHeaderPaddingVertical = scaledForDevice(20, moderateScale);
const validAvatarSize = scaledForDevice(36, moderateScale);
const validUserTextMarginLeft = scaledForDevice(8, horizontalScale);
const validNameMarginBottom = scaledForDevice(2, moderateScale);
const validClientPaddingTop = scaledForDevice(24, moderateScale);
const validClientPaddingBottom = scaledForDevice(16, moderateScale);
const validClientNameMarginLeft = scaledForDevice(16, horizontalScale);
const validHeaderExtraPadding = scaledForDevice(8, moderateScale);
const validMenuPaddingTop = scaledForDevice(12, moderateScale);
const validBrandPaddingVertical = scaledForDevice(16, moderateScale);
const validLogoWidth = scaledForDevice(94, horizontalScale);
const validLogoHeight = scaledForDevice(22, moderateScale);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: base.white,
	},
	header: {
		paddingHorizontal: validPaddingHorizontal,
		paddingVertical: validHeaderPaddingVertical,
		backgroundColor: white.light,
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
	clientRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: validPaddingHorizontal,
		paddingTop: validClientPaddingTop,
		paddingBottom: validClientPaddingBottom,
	},
	clientName: {
		flex: 1,
		marginLeft: validClientNameMarginLeft,
	},
	divider: {
		height: 1,
		backgroundColor: white.main,
		marginHorizontal: validPaddingHorizontal,
	},
	footerDivider: {
		height: 1,
		backgroundColor: white.main,
	},
	headerExtra: {
		paddingVertical: validHeaderExtraPadding,
		paddingHorizontal: validPaddingHorizontal,
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
		paddingHorizontal: validPaddingHorizontal,
	},
	skeletonItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: scaledForDevice(12, moderateScale),
		paddingHorizontal: validPaddingHorizontal,
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

const ClientRow: FC<{client: ClientInfo; testID?: string}> = ({client, testID}) => (
	<View style={styles.clientRow} testID={testID}>
		<Avatar
			customSize={validAvatarSize}
			imageUrl={client.logoUrl}
			placeholder={client.name}
			bgColor={white.dark}
		/>
		<Typography
			type="title"
			size="mediumRegular"
			color={black.main}
			numberOfLines={1}
			style={styles.clientName}>
			{client.name}
		</Typography>
	</View>
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

			{!!client?.name && (
				<>
					<ClientRow client={client} testID={composeTestID(testID, 'client')} />
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
				<View style={styles.footerDivider} />
				<View style={styles.brandFooter}>
					<Svg name="janis-commerce-logo" width={validLogoWidth} height={validLogoHeight} />
					<Typography type="body" size="small" color={grey[400]}>
						{versionLabel}
					</Typography>
				</View>
			</View>
		</View>
	);
};

export default Menu;
