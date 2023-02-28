import React from 'react';
import {Image as ImageComp, ImageProps} from 'react-native';

const Image = ({source, ...props}: ImageProps) => {
	if (!source || !Object.keys(source).length) {
		return null;
	}

	return <ImageComp source={source} {...props} />;
};

export default Image;
