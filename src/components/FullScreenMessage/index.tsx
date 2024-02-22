import React, {FC, ReactElement} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {moderateScale, scaledForDevice} from '../../scale';
import {base} from '../../theme/palette';
import Icon from '../Icon';
import Text from '../Text';

export enum animationTypes {
	Slide = 'slide',
	Fade = 'fade',
	None = 'none',
}

interface Props {
	backgroundColor: string;
	title: string;
	isVisible?: boolean;
	subtitle?: string;
	iconName?: string;
	textsColor?: string;
	iconColor?: string;
	animationType?: animationTypes;
	children?: ReactElement | null;
}

const FullScreenMessage: FC<Props> = ({
	backgroundColor,
	title,
	isVisible = false,
	subtitle = '',
	iconName = '',
	textsColor = base.white,
	iconColor = base.white,
	animationType = animationTypes.Slide,
	children = null,
	...props
}) => {
	if (!title || typeof title !== 'string') {
		return null;
	}
	if (!backgroundColor || typeof backgroundColor !== 'string') {
		return null;
	}

	const validSubtitle = !!subtitle && typeof subtitle === 'string';
	const validIconName = !!iconName && typeof iconName === 'string';

	const validPaddingHorizontal = scaledForDevice(50, moderateScale);
	const validMarginBottomTitle = scaledForDevice(30, moderateScale);
	const validMarginBottomSubtitle = scaledForDevice(50, moderateScale);
	const validFontTitle = scaledForDevice(32, moderateScale);
	const validFontSubtitle = scaledForDevice(16, moderateScale);
	const validLineHeightTitle = scaledForDevice(40, moderateScale);

	const styles = StyleSheet.create({
		container: {
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: '100%',
			backgroundColor: backgroundColor,
		},
		title: {
			fontWeight: 'bold',
			textAlign: 'center',
			color: textsColor,
			paddingHorizontal: validPaddingHorizontal,
			marginBottom: validMarginBottomTitle,
			fontSize: validFontTitle,
			lineHeight: validLineHeightTitle,
		},
		subtitle: {
			textAlign: 'center',
			color: textsColor,
			paddingHorizontal: validPaddingHorizontal,
			marginBottom: validMarginBottomSubtitle,
			fontSize: validFontSubtitle,
		},
	});

	return (
		<Modal visible={isVisible} animationType={animationType} transparent {...props}>
			<View style={styles.container}>
				{children ?? (
					<>
						<Text style={styles.title}>{title}</Text>
						{validSubtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
						{validIconName && <Icon color={iconColor} size={130} name={iconName} />}
					</>
				)}
			</View>
		</Modal>
	);
};

export default FullScreenMessage;
