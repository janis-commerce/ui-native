import React, {FC, ReactElement, useCallback, useEffect, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {moderateScale, scaledForDevice} from '../../scale';
import {base, primary} from '../../theme/palette';
import Icon from '../Icon';
import Text from '../Text';

export enum animationTypes {
	Slide = 'slide',
	Fade = 'fade',
	None = 'none',
}

interface Props {
	backgroundColor?: string;
	isVisible?: boolean;
	title?: string;
	subtitle?: string;
	iconName?: string;
	textsColor?: string;
	iconColor?: string;
	animationType?: animationTypes;
	duration?: number;
	onEndDuration?: (data: any) => void | null;
	children?: ReactElement | null;
}

const FullScreenMessage: FC<Props> = ({
	backgroundColor = primary.main,
	title = '',
	isVisible = false,
	subtitle = '',
	iconName = '',
	textsColor = base.white,
	iconColor = base.white,
	animationType = animationTypes.Slide,
	duration = 3000,
	onEndDuration = null,
	children = null,
	...props
}) => {
	const [visible, setVisible] = useState(isVisible);

	const validTitle = !!title && typeof title === 'string';
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

	const updateCallback = useCallback(() => {
		if (onEndDuration && !visible) {
			onEndDuration(visible);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible]);

	useEffect(() => {
		if (isVisible) {
			setTimeout(() => {
				setVisible(false);
			}, duration);
		}
	}, [duration, isVisible]);

	useEffect(() => updateCallback(), [updateCallback]);

	return (
		<Modal visible={visible} animationType={animationType} transparent {...props}>
			<View style={styles.container}>
				{children ?? (
					<>
						{validTitle && <Text style={styles.title}>{title}</Text>}
						{validSubtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
						{validIconName && <Icon color={iconColor} size={130} name={iconName} />}
					</>
				)}
			</View>
		</Modal>
	);
};

export default FullScreenMessage;
