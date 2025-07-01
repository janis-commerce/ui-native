import React from 'react';
import {View} from 'react-native';
import svgIcons from './svgs';
import {horizontalScale, moderateScale, scaledForDevice} from 'scale';

import type {SvgProps} from 'react-native-svg';
import {ViewProps} from 'react-native';

const svgsMapping = {
	'empty-illustration': svgIcons.EmptyIllustration,
	'empty-list-illustration': svgIcons.EmptyListIllustration,
	'janis-iso': svgIcons.JanisIso,
	'janis-commerce-logo': svgIcons.JanisCommerceLogo,
	'janis-commerce-logo-qa': svgIcons.JanisCommerceLogoQa,
	'janis-commerce-logo-beta': svgIcons.JanisCommerceLogoBeta,
	'login-illustration': svgIcons.LoginIllustration,
	'no-notifications': svgIcons.EmptyNotifications,
};

export type Names = keyof typeof svgsMapping;

export const svgsNames = Object.keys(svgsMapping) as Names[];

export interface Isvg extends SvgProps, ViewProps {
	name?: Names;
	width?: number;
	height?: number;
	size?: number;
	xmlns?: string;
}

const Svg = ({name, width, height, size, ...props}: Isvg) => {
	if (!name || !svgsNames.includes(name)) {
		return null;
	}
	const SvgSelected = svgsMapping[name];
	const selectedWidth = size ?? width;
	const selectedHeight = size ?? height;
	const parseSelectedWidth = selectedWidth || 0;
	const parseSelectedHeight = selectedHeight || 0;

	const validateWidth = scaledForDevice(parseSelectedWidth, horizontalScale);
	const validateHeight = scaledForDevice(parseSelectedHeight, moderateScale);

	return (
		<View {...props}>
			<SvgSelected width={validateWidth} height={validateHeight} {...props} />
		</View>
	);
};

export default Svg;
