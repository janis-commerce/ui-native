import React, {FC} from 'react';
import type {SvgProps} from 'react-native-svg';
import {View, ViewProps} from 'react-native';
import EmptyIllustration from './svgs/emptyIllustration.svg';
import EmptyListIllustration from './svgs/emptyListIllustration.svg';
import JanisLogoColor from './svgs/janisLogoColor.svg';
import LoginIllustration from './svgs/loginIllustration.svg';
import NoNotifications from './svgs/noNotifications.svg';

const svgsNames = [
	'empty-illustration',
	'empty-list-illustration',
	'janis-logo-color',
	'login-illustration',
	'no-notifications',
] as const;

type names = (typeof svgsNames)[number];

interface Isvg extends SvgProps, ViewProps {
	name?: names;
	width?: number;
	height?: number;
	size?: number;
}

const svgs = {
	'empty-illustration': EmptyIllustration,
	'empty-list-illustration': EmptyListIllustration,
	'janis-logo-color': JanisLogoColor,
	'login-illustration': LoginIllustration,
	'no-notifications': NoNotifications,
};

const Svg = ({name, width, height, size, ...props}: Isvg) => {
	if (!name || !svgsNames.includes(name)) {
		return null;
	}
	const SvgSelected: FC<SvgProps> = svgs[name];
	return (
		<View {...props}>
			<SvgSelected width={size ?? width} height={size ?? height} {...props} />
		</View>
	);
};

export default Svg;
