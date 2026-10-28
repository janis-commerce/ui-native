import React, {FC} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import MenuButton from 'atoms/MenuButton';
import Avatar from 'molecules/Avatar';
import type {ClientInfo} from 'ts/interfaces/client';
import {base, black, white} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import {composeTestID} from 'utils';

export interface HeaderProps {
	onMenuPress?: () => void;
	avatarBgColor?: string;
	client?: ClientInfo;
	style?: ViewStyle;
	testID?: string;
}

const validPaddingHorizontal = scaledForDevice(16, horizontalScale);
const validPaddingVertical = scaledForDevice(10, moderateScale);
const validAvatarSize = scaledForDevice(36, moderateScale);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: validPaddingHorizontal,
		paddingVertical: validPaddingVertical,
		backgroundColor: base.white,
		shadowColor: black.main,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.15,
		shadowRadius: 5,
		elevation: 3,
		zIndex: 1,
	},
	avatar: {
		marginLeft: 'auto',
	},
});

const Header: FC<HeaderProps> = ({
	onMenuPress,
	avatarBgColor = white.dark,
	client,
	style,
	testID,
}) => (
	<View style={[styles.container, style]} testID={testID}>
		{!!onMenuPress && <MenuButton onPress={onMenuPress} testID={composeTestID(testID, 'menu')} />}

		{!!client?.name && (
			<Avatar
				customSize={validAvatarSize}
				imageUrl={client.logoUrl}
				placeholder={client.name}
				bgColor={avatarBgColor}
				style={styles.avatar}
			/>
		)}
	</View>
);

export default React.memo(Header);
