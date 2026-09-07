import React, {FC} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import StatusChip from 'atoms/StatusChip';
import {environment as environmentColors} from 'theme/palette';
import {moderateScale, scaledForDevice} from 'scale';

export type EnvironmentType = 'qa' | 'beta' | 'dev';

export interface EnvironmentChipProps {
	environment?: EnvironmentType;
	appName?: string;
	style?: ViewStyle;
	testID?: string;
}

const styles = StyleSheet.create({
	container: {
		marginTop: scaledForDevice(6, moderateScale),
		alignSelf: 'flex-start',
	},
});

const EnvironmentChip: FC<EnvironmentChipProps> = ({environment, appName, style, testID}) => {
	if (!environment) {
		return null;
	}

	const environmentLabel = environment.toUpperCase();

	return (
		<View style={[styles.container, style]} testID={testID}>
			<StatusChip background={environmentColors[environment]}>
				{appName ? `${appName} ${environmentLabel}` : environmentLabel}
			</StatusChip>
		</View>
	);
};

export default EnvironmentChip;
