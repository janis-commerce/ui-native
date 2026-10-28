import React, {FC, ReactElement} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import EnvironmentChip, {EnvironmentType} from '../EnvironmentChip';
import {base, midnightBlue} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import {composeTestID} from 'utils';

export interface UserInfoProps {
	greeting: string;
	userName: string;
	appName?: string;
	environment?: EnvironmentType;
	children?: ReactElement | null;
	style?: ViewStyle;
	testID?: string;
}

const validPaddingHorizontal = scaledForDevice(24, horizontalScale);
const validPaddingVertical = scaledForDevice(24, moderateScale);
const validGreetingMarginBottom = scaledForDevice(2, moderateScale);

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: validPaddingHorizontal,
		paddingVertical: validPaddingVertical,
		backgroundColor: base.white,
	},
	greeting: {
		marginBottom: validGreetingMarginBottom,
	},
});

const UserInfo: FC<UserInfoProps> = ({
	greeting,
	userName,
	appName,
	environment,
	children = null,
	style,
	testID,
}) => (
	<View style={[styles.container, style]} testID={testID}>
		<Typography type="heading" size="small" color={midnightBlue.main} style={styles.greeting}>
			{greeting}
		</Typography>
		<Typography type="heading" size="medium" color={midnightBlue.main}>
			{userName}
		</Typography>
		<EnvironmentChip
			environment={environment}
			appName={appName}
			testID={composeTestID(testID, 'environment')}
		/>
		{children}
	</View>
);

export default React.memo(UserInfo);
