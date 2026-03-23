import React, {FC, ReactElement, ComponentType} from 'react';
import {View, Pressable, StyleSheet, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import Icon from 'atoms/Icon';
import Avatar from 'molecules/Avatar';
import StatusChip from 'atoms/StatusChip';
import {base, primary, success, alert as alertColor, error as errorColor} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export type EnvironmentType = 'qa' | 'beta' | 'dev';

export interface UserHeaderProps {
	userName: string;
	appName?: string;
	userAvatar?: string;
	avatarPlaceholder?: string;
	avatarBgColor?: string;
	environment?: EnvironmentType;
	onMenuPress: () => void;
	topBarLabel?: string;
	topBarLabelOnPress?: () => void;
	showTopBarChevron?: boolean;
	illustration?: ComponentType | null;
	children?: ReactElement | null;
	style?: ViewStyle;
	testID?: string;
}

const envColors: Record<EnvironmentType, string> = {
	qa: success.main,
	beta: errorColor.main,
	dev: alertColor.main,
};

const validPaddingHorizontal = scaledForDevice(24, horizontalScale);
const validPaddingTop = scaledForDevice(16, moderateScale);
const validPaddingBottom = scaledForDevice(20, moderateScale);
const validTopBarMarginBottom = scaledForDevice(20, moderateScale);
const validIconSize = scaledForDevice(24, moderateScale);
const validAvatarSize = scaledForDevice(36, moderateScale);
const validChevronSize = scaledForDevice(16, moderateScale);
const validChevronMarginLeft = scaledForDevice(4, horizontalScale);

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: validPaddingHorizontal,
		paddingTop: validPaddingTop,
		paddingBottom: validPaddingBottom,
		backgroundColor: base.white,
	},
	topBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: validTopBarMarginBottom,
	},
	topBarCenter: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	greetingZone: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	greetingText: {
		flex: 1,
	},
	illustrationContainer: {
		marginLeft: scaledForDevice(8, horizontalScale),
	},
	chipMargin: {
		marginTop: scaledForDevice(6, moderateScale),
		alignSelf: 'flex-start',
	},
});

const UserHeader: FC<UserHeaderProps> = ({
	userName,
	appName,
	userAvatar,
	avatarPlaceholder,
	avatarBgColor,
	environment,
	onMenuPress,
	topBarLabel,
	topBarLabelOnPress,
	showTopBarChevron = false,
	illustration: Illustration = null,
	children = null,
	style,
	testID,
}) => {
	if (!userName) {
		return null;
	}

	return (
		<View style={[styles.container, style]} testID={testID}>
			<View style={styles.topBar}>
				<Pressable onPress={onMenuPress} testID={`${testID}-menu`}>
					<Icon name="menu" size={validIconSize} color={primary.main} />
				</Pressable>

				{!!topBarLabel && (
					<Pressable
						onPress={topBarLabelOnPress}
						disabled={!topBarLabelOnPress}
						style={styles.topBarCenter}
						testID={`${testID}-topbar-label`}>
						<Typography type="body" size="medium" color={primary.main}>
							{topBarLabel}
						</Typography>
						{showTopBarChevron && (
							<Icon
								name="chevron_down"
								size={validChevronSize}
								color={primary.main}
								style={{marginLeft: validChevronMarginLeft}}
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

			<View style={styles.greetingZone}>
				<View style={styles.greetingText}>
					<Typography type="heading" size="large">
						{`Bienvenido,\n${userName}`}
					</Typography>
					{!!environment && (
						<View style={styles.chipMargin}>
							<StatusChip background={envColors[environment]}>
								{appName ? `${appName} ${environment.toUpperCase()}` : environment.toUpperCase()}
							</StatusChip>
						</View>
					)}
					{children}
				</View>
				{!!Illustration && (
					<View style={styles.illustrationContainer}>
						<Illustration />
					</View>
				)}
			</View>
		</View>
	);
};

export default UserHeader;
