import React from 'react';
import {
	Image as ImageComp,
	ImageResizeMode,
	AccessibilityProps,
	StyleProp,
	ImageStyle,
} from 'react-native';

export interface ImageProps extends AccessibilityProps {
	source: string;
	resizeMode?: ImageResizeMode;
	onError?: () => void;
	onLoadStart?: () => void;
	onLoad?: () => void;
	onLoadEnd?: () => void;
	style?: StyleProp<ImageStyle>;
}

const Image = ({
	resizeMode = 'cover',
	source,
	onError,
	onLoadStart,
	onLoad,
	onLoadEnd,
	...props
}: ImageProps) => {
	if (!source || !source.length) {
		return null;
	}

	return (
		<ImageComp
			source={{uri: source}}
			resizeMode={resizeMode}
			onError={onError}
			onLoadStart={onLoadStart}
			onLoad={onLoad}
			onLoadEnd={onLoadEnd}
			{...props}
		/>
	);
};

export default Image;
