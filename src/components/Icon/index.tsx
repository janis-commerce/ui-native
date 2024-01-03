import React, {FC} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './assets/fonts/selection.json';
import {primary} from '../../theme/palette';

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
	onPress?: () => void;
}

const Icon: FC<Props> = ({name, color = primary.main, size = 16, onPress, ...props}) => {
	if (!name) {
		return null;
	}
	return <IconComponent name={name} color={color} size={size} onPress={onPress} {...props} />;
};

export default Icon;
