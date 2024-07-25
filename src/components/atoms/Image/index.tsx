import React from 'react';
import {Image as ImageComp, ImageProps as ImageRNProps, ImageSourcePropType} from 'react-native';

interface ImageProps extends ImageRNProps {
	source: ImageSourcePropType;
}

const Image = ({source, ...props}: ImageProps) => {
	if (!source || typeof source !== 'object' || !Object.keys(source).length) {
		return null;
	}

	const sourceKeys = Object.keys(source);
	if (!sourceKeys.includes('uri')) {
		return null;
	}

	return <ImageComp source={source} {...props} />;
};

export default Image;
