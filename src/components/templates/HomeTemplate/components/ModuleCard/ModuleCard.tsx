import React, {FC} from 'react';
import {Pressable, View, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'atoms/Icon';
import Typography from 'atoms/Typography';
import Badge from 'atoms/Badge';
import {base, grey, primary, white} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import cardLayout from './styles';

export interface ModuleCardProps {
	icon: string;
	title: string;
	onPress: () => void;
	disabled?: boolean;
	badge?: number;
	subtitle?: string;
	showChevron?: boolean;
	style?: ViewStyle;
	testID?: string;
}

const validIconSize = scaledForDevice(24, moderateScale);
const validChevronSize = scaledForDevice(16, moderateScale);

const styles = StyleSheet.create({
	shadow: {
		shadowColor: base.black,
		shadowOffset: {width: 0, height: 4},
		shadowOpacity: 0.08,
		shadowRadius: 8,
		elevation: 2,
	},
	pressed: {
		backgroundColor: grey[100],
	},
	disabled: {
		opacity: 0.4,
	},
	iconContainer: {
		backgroundColor: white.light,
		justifyContent: 'center',
		alignItems: 'center',
	},
	badge: {
		marginRight: scaledForDevice(8, horizontalScale),
	},
});

const ModuleCard: FC<ModuleCardProps> = ({
	icon,
	title,
	onPress,
	disabled = false,
	badge,
	subtitle,
	showChevron = true,
	style,
	testID,
}) => {
	if (!icon || !title) {
		return null;
	}

	return (
		<Pressable
			testID={testID}
			onPress={onPress}
			disabled={disabled}
			style={({pressed}) => [
				cardLayout.card,
				styles.shadow,
				pressed && styles.pressed,
				disabled && styles.disabled,
				style,
			]}>
			<View style={[cardLayout.iconContainer, styles.iconContainer]}>
				<Icon name={icon} size={validIconSize} color={primary.main} />
			</View>

			<View style={cardLayout.content}>
				<Typography type="title" size="large" color={base.black}>
					{title}
				</Typography>
				{!!subtitle && (
					<Typography type="body" size="small" color={grey[500]}>
						{subtitle}
					</Typography>
				)}
			</View>

			<Badge count={badge} style={styles.badge} />

			{showChevron && <Icon name="chevron_right" size={validChevronSize} color={grey[400]} />}
		</Pressable>
	);
};

export default React.memo(ModuleCard);
