import React from 'react';
import {View} from 'react-native';
import {svgsNames, Isvg} from '../../ts/interfaces/svgs';
import EmptyIllustration from './svgs/EmptyIllustration';
import EmptyListIllustration from './svgs/EmptyListIllustration';
import JanisLogo from './svgs/JanisLogo';
import JanisLogoColor from './svgs/JanisLogoColor';
import LoginIllustration from './svgs/LoginIllustration';
import NoNotifications from './svgs/NoNotifications';
import {horizontalScale, moderateScale} from '../../scale';
import {LOAD_STORYBOOK} from '../../../env.json';

const svgs = {
	'empty-illustration': EmptyIllustration,
	'empty-list-illustration': EmptyListIllustration,
	'janis-logo': JanisLogo,
	'janis-logo-color': JanisLogoColor,
	'login-illustration': LoginIllustration,
	'no-notifications': NoNotifications,
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

	const validateWidth = !LOAD_STORYBOOK ? horizontalScale(parseSelectedWidth) : parseSelectedWidth;
	const validateHeight = !LOAD_STORYBOOK ? moderateScale(parseSelectedHeight) : parseSelectedHeight;

	return (
		<View {...props}>
			<SvgSelected width={validateWidth} height={validateHeight} {...props} />
		</View>
	);
};

export default Svg;
