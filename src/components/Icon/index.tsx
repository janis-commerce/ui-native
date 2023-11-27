import React, {FC} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './assets/fonts/selection.json';
import {primary} from '../../theme/palette';
import {moderateScale} from '../../scale';

const IconComponent = createIconSetFromIcoMoon(
	icoMoonConfig,
	'janis-font-icon',
	'janis-font-icon.ttf'
);

interface Props {
	name: string;
	color?: string;
	size?: number;
}

const Icon: FC<Props> = ({name, color = primary.main, size = 16, ...props}) => {
	if (!name) {
		return null;
	}
	return <IconComponent name={name} color={color} size={moderateScale(size)} {...props} />;
};

export default Icon;
