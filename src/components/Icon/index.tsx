import React, {FC} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './assets/fonts/selection.json';
import {primary} from '../../theme/palette';
import {moderateScale} from '../../scale';
import {LOAD_STORYBOOK} from '../../../env.json';

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

const Icon: FC<Props> = ({name, color = primary.main, size = 16, ...props}) => {
	if (!name) {
		return null;
	}
	const validateSize = !LOAD_STORYBOOK ? moderateScale(size) : size;

	return <IconComponent name={name} color={color} size={validateSize} {...props} />;
};

export default Icon;
