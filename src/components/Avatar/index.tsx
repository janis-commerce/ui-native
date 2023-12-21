import React, {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Image from '../Image';
import Text from '../Text';
import {formatPlaceholder} from './utils/formatPlaceholder/index';
import {horizontalScale, moderateScale} from '../../scale';
import {LOAD_STORYBOOK} from '../../../env.json';

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
	const validBorderRadius = !LOAD_STORYBOOK
		? moderateScale(getSize(size, customSize) / 2)
		: getSize(size, customSize) / 2;
	const validWidth = !LOAD_STORYBOOK
		? horizontalScale(getSize(size, customSize))
		: getSize(size, customSize);
	const validHeight = !LOAD_STORYBOOK
		? moderateScale(getSize(size, customSize))
		: getSize(size, customSize);
	const validModerateScale = LOAD_STORYBOOK
		? getSize(size, customSize) * 0.4
		: moderateScale(getSize(size, customSize) * 0.4);

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
				<Text style={[styles.text, {color: textColor, fontSize: validModerateScale}]}>
					{initials}
				</Text>
			)}
		</View>
	);
};

export default Avatar;
