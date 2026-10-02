import React, {FC} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import MenuButton from 'atoms/MenuButton';
import Avatar from 'molecules/Avatar';
import ClientSelector, {ClientInfo} from 'molecules/ClientSelector';
import {base} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import {composeTestID} from 'utils';

export interface HeaderProps {
	onMenuPress: () => void;
	userName: string;
	userAvatar?: string;
	avatarBgColor?: string;
	client?: ClientInfo;
	style?: ViewStyle;
	testID?: string;
}

const validPaddingHorizontal = scaledForDevice(24, horizontalScale);
const validPaddingTop = scaledForDevice(16, moderateScale);
const validPaddingBottom = scaledForDevice(20, moderateScale);
const validAvatarSize = scaledForDevice(36, moderateScale);

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
	clientSelector: {
		flex: 1,
		justifyContent: 'center',
	},
});

const Header: FC<HeaderProps> = ({
	onMenuPress,
	userName,
	userAvatar,
	avatarBgColor,
	client,
	style,
	testID,
}) => (
	<View style={[styles.container, style]} testID={testID}>
		<MenuButton onPress={onMenuPress} testID={composeTestID(testID, 'menu')} />

		{!!client?.name && (
			<ClientSelector
				{...client}
				style={styles.clientSelector}
				testID={composeTestID(testID, 'client-selector')}
			/>
		)}

		<Avatar
			customSize={validAvatarSize}
			imageUrl={userAvatar}
			placeholder={userName}
			bgColor={avatarBgColor}
		/>
	</View>
);

export default React.memo(Header);
