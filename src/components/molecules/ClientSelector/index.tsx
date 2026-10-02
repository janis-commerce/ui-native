import React, {FC} from 'react';
import {Pressable, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import Icon from 'atoms/Icon';
import {primary} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface ClientInfo {
	name: string;
	onPress?: () => void;
}

export interface ClientSelectorProps extends ClientInfo {
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

const validChevronSize = scaledForDevice(16, moderateScale);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	chevron: {
		marginLeft: scaledForDevice(4, horizontalScale),
	},
});

const ClientSelector: FC<ClientSelectorProps> = ({name, onPress, style, testID}) => (
	<Pressable
		onPress={onPress}
		disabled={!onPress}
		style={[styles.container, style]}
		testID={testID}>
		<Typography type="body" size="medium" color={primary.main}>
			{name}
		</Typography>
		{!!onPress && (
			<Icon
				name="chevron_down"
				size={validChevronSize}
				color={primary.main}
				style={styles.chevron}
			/>
		)}
	</Pressable>
);

export default ClientSelector;
