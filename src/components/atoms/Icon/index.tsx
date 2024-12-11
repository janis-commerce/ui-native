import React, {FC} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './assets/fonts/selection.json';
import palette from 'theme/palette';
import {moderateScale, scaledForDevice} from 'scale';

const IconComponent = createIconSetFromIcoMoon(
	icoMoonConfig,
	'janis-font-icon',
	'janis-font-icon.ttf'
);

interface Props {
	name: string;
	color?: string;
	size?: number;
	style?: any;
}

const Icon: FC<Props> = ({name, color = palette.primary.blue.normal, size = 16, ...props}) => {
	if (!name) {
		return null;
	}
	const validateSize = scaledForDevice(size, moderateScale);

	return <IconComponent name={name} color={color} size={validateSize} {...props} />;
};

export default Icon;
