import React from 'react';
import {View} from 'react-native';
import {svgsNames, Isvg} from '../../ts/interfaces/svgs';
import EmptyIllustration from './svgs/EmptyIllustration';
import EmptyListIllustration from './svgs/EmptyListIllustration';
import JanisLogo from './svgs/JanisLogo';
import JanisLogoColor from './svgs/JanisLogoColor';
import LoginIllustration from './svgs/LoginIllustration';
import NoNotifications from './svgs/NoNotifications';
import {moderateScale} from '../../scale';

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

	return (
		<View {...props}>
			<SvgSelected
				width={moderateScale(selectedWidth || 0)}
				height={moderateScale(selectedHeight || 0)}
				{...props}
			/>
		</View>
	);
};

export default Svg;
