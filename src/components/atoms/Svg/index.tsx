import React from 'react';
import {View} from 'react-native';
import {svgsNames, Isvg} from 'ts/interfaces/svgs';
import EmptyIllustration from './svgs/EmptyIllustration';
import EmptyListIllustration from './svgs/EmptyListIllustration';
import JanisLogo from './svgs/JanisLogo';
import JanisLogoColor from './svgs/JanisLogoColor';
import LoginIllustration from './svgs/LoginIllustration';
import NoNotifications from './svgs/NoNotifications';
import NewJanisLogo from './svgs/NewJanisLogo';
import {horizontalScale, moderateScale, scaledForDevice} from 'scale';

const svgs = {
	'empty-illustration': EmptyIllustration,
	'empty-list-illustration': EmptyListIllustration,
	'janis-logo': JanisLogo,
	'janis-logo-color': JanisLogoColor,
	'login-illustration': LoginIllustration,
	'no-notifications': NoNotifications,
	'new-janis-logo': NewJanisLogo,
};

const Svg = ({name, width, height, size, ...props}: Isvg) => {
	if (!name || !svgsNames.includes(name)) {
		return null;
	}
	const SvgSelected = svgs[name];
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
