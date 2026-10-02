import React, {FC, ReactElement, ComponentType} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import EnvironmentChip, {EnvironmentType} from '../EnvironmentChip';
import {base} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import {composeTestID} from 'utils';

export interface UserInfoProps {
	greeting: string;
	appName?: string;
	environment?: EnvironmentType;
	illustration?: ComponentType | null;
	children?: ReactElement | null;
	style?: ViewStyle;
	testID?: string;
}

const validPaddingHorizontal = scaledForDevice(24, horizontalScale);
const validPaddingBottom = scaledForDevice(20, moderateScale);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: validPaddingHorizontal,
		paddingBottom: validPaddingBottom,
		backgroundColor: base.white,
	},
	greetingText: {
		flex: 1,
	},
	illustrationContainer: {
		marginLeft: scaledForDevice(8, horizontalScale),
	},
});

const UserInfo: FC<UserInfoProps> = ({
	greeting,
	appName,
	environment,
	illustration: Illustration = null,
	children = null,
	style,
	testID,
}) => (
	<View style={[styles.container, style]} testID={testID}>
		<View style={styles.greetingText}>
			<Typography type="heading" size="large">
				{greeting}
			</Typography>
			<EnvironmentChip
				environment={environment}
				appName={appName}
				testID={composeTestID(testID, 'environment')}
			/>
			{children}
		</View>
		{!!Illustration && (
			<View style={styles.illustrationContainer}>
				<Illustration />
			</View>
		)}
	</View>
);

export default React.memo(UserInfo);
