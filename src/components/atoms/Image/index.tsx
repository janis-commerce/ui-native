import React, {useState} from 'react';
import Icon, {Props as NativeIconProps} from 'atoms/Icon';
import {palette} from 'theme/palette';
import {View, StyleSheet, ViewStyle} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';

interface ImageProps extends FastImageProps {
	iconProps?: NativeIconProps;
	iconBackgroundStyle?: ViewStyle;
}

const Image = ({source, iconProps, iconBackgroundStyle = {}, onError, ...props}: ImageProps) => {
	const [showPlaceholderImage, setShowPlaceholderImage] = useState(false);
	const styles = StyleSheet.create({
		iconBackground: {
			backgroundColor: palette.white.light,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	});

	const placeholderStyle = [styles.iconBackground, iconBackgroundStyle, props.style].filter(
		Boolean
	);
	const handleError = () => {
		if (onError) {
			onError();
		}

		setShowPlaceholderImage(true);
	};

	if (showPlaceholderImage || !source) {
		return (
			<View style={placeholderStyle}>
				<Icon name="exclamation_circle" color={palette.white.dark} size={36} {...iconProps} />
			</View>
		);
	}

	return <FastImage onError={handleError} source={source} {...props} />;
};

export default Image;
