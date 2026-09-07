import React, {FC} from 'react';
import {View, Pressable, StyleSheet, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import Icon from 'atoms/Icon';
import MenuButton from 'atoms/MenuButton';
import Avatar from 'molecules/Avatar';
import {base, primary} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import {composeTestID} from 'utils';

export interface HeaderProps {
	onMenuPress: () => void;
	userName: string;
	userAvatar?: string;
	avatarPlaceholder?: string;
	avatarBgColor?: string;
	topBarLabel?: string;
	topBarLabelOnPress?: () => void;
	showTopBarChevron?: boolean;
	style?: ViewStyle;
	testID?: string;
}

const validPaddingHorizontal = scaledForDevice(24, horizontalScale);
const validPaddingTop = scaledForDevice(16, moderateScale);
const validPaddingBottom = scaledForDevice(20, moderateScale);
const validAvatarSize = scaledForDevice(36, moderateScale);
const validChevronSize = scaledForDevice(16, moderateScale);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: validPaddingHorizontal,
		paddingTop: validPaddingTop,
		paddingBottom: validPaddingBottom,
		backgroundColor: base.white,
	},
	center: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	chevronMargin: {
		marginLeft: scaledForDevice(4, horizontalScale),
	},
});

const Header: FC<HeaderProps> = ({
	onMenuPress,
	userName,
	userAvatar,
	avatarPlaceholder,
	avatarBgColor,
	topBarLabel,
	topBarLabelOnPress,
	showTopBarChevron = false,
	style,
	testID,
}) => (
	<View style={[styles.container, style]} testID={testID}>
		<MenuButton onPress={onMenuPress} testID={composeTestID(testID, 'menu')} />

		{!!topBarLabel && (
			<Pressable
				onPress={topBarLabelOnPress}
				disabled={!topBarLabelOnPress}
				style={styles.center}
				testID={composeTestID(testID, 'topbar-label')}>
				<Typography type="body" size="medium" color={primary.main}>
					{topBarLabel}
				</Typography>
				{showTopBarChevron && (
					<Icon
						name="chevron_down"
						size={validChevronSize}
						color={primary.main}
						style={styles.chevronMargin}
					/>
				)}
			</Pressable>
		)}

		<Avatar
			customSize={validAvatarSize}
			imageUrl={userAvatar}
			placeholder={avatarPlaceholder || userName}
			bgColor={avatarBgColor}
		/>
	</View>
);

export default Header;
