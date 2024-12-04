import React, {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Image from 'atoms/Image';
import Typography from 'atoms/Typography';
import {formatPlaceholder} from './utils/formatPlaceholder/index';
import {horizontalScale, moderateScale, scaledForDevice} from 'scale';

export const sizeValues = {
	sm: 24,
	md: 36,
	lg: 60,
};

export type sizeType = typeof sizeValues;
export type sizeKeys = keyof sizeType;

export interface AvatarProps {
	placeholder: string;
	textColor?: string;
	bgColor?: string;
	size?: sizeKeys;
	customSize?: number;
	imageUrl?: string;
	onErrorImg?: () => void;
	style?: ViewStyle;
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		overflow: 'hidden',
	},
	text: {
		textAlign: 'center',
		textTransform: 'uppercase',
	},
});

export const getSize = (size: sizeKeys, customSize?: number): number =>
	customSize || sizeValues[size];

const Avatar = ({
	size = 'sm',
	textColor = '#FFFFFF',
	bgColor = '#E8EAF6',
	imageUrl = '',
	placeholder,
	customSize,
	onErrorImg,
	style,
	...props
}: AvatarProps) => {
	const [showInitials, setShowInitials] = useState(false);

	if (!placeholder) {
		return null;
	}

	const initials = formatPlaceholder(String(placeholder));
	const calculateBorderRadius = getSize(size, customSize) / 2;
	const calculateSize = getSize(size, customSize);
	const calculateFontSize = getSize(size, customSize) * 0.4;

	const validBorderRadius = scaledForDevice(calculateBorderRadius, moderateScale);
	const validWidth = scaledForDevice(calculateSize, horizontalScale);
	const validHeight = scaledForDevice(calculateSize, moderateScale);
	const validFontSize = scaledForDevice(calculateFontSize, moderateScale);

	const handleOnErrorImage = () => {
		setShowInitials(true);
		if (onErrorImg) {
			onErrorImg();
		}
	};

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: bgColor,
					borderRadius: validBorderRadius,
					height: validHeight,
					width: validWidth,
				},
				style,
			]}
			{...props}>
			{!!imageUrl && !showInitials && (
				<Image
					accessibilityRole="image"
					onError={handleOnErrorImage}
					onLoad={() => setShowInitials(false)}
					source={{
						uri: imageUrl,
					}}
					style={{
						height: validHeight,
						width: validWidth,
					}}
				/>
			)}

			{(showInitials || !imageUrl) && !!initials.length && (
				<Typography style={[styles.text, {color: textColor, fontSize: validFontSize}]}>
					{initials}
				</Typography>
			)}
		</View>
	);
};

export default Avatar;
