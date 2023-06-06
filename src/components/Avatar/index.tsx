import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../Text';
import {formatPlaceholder} from './utils/formatPlaceholder/index';

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
	...props
}: AvatarProps) => {
	const [showInitials, setShowInitials] = useState(false);

	if (!placeholder) {
		return null;
	}

	const initials = formatPlaceholder(String(placeholder));

	const handleOnErrorImage = () => {
		setShowInitials(true);
		if (onErrorImg) {
			onErrorImg();
		}
	};

	return (
		<View
			style={{
				...styles.container,
				backgroundColor: bgColor,
				borderRadius: getSize(size, customSize) / 2,
				height: getSize(size, customSize),
				width: getSize(size, customSize),
			}}
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
						height: getSize(size, customSize),
						width: getSize(size, customSize),
					}}
				/>
			)}

			{(showInitials || !imageUrl) && !!initials.length && (
				<Text
					style={{
						...styles.text,
						color: textColor,
						fontSize: getSize(size, customSize) * 0.4,
					}}>
					{initials}
				</Text>
			)}
		</View>
	);
};

export default Avatar;
