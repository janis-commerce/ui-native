import React from 'react';
import {View} from 'react-native';
import {base} from '../../../theme/palette';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
	color?: string;
	size?: number;
}

const CheckedIcon = ({color, size}: IconProps) => (
	<View>
		<Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
			<Path
				d="M3 0H3ZM4 8.0534L7.05987 11L12 5.28272L10.5916 4L6.93119 8.22932L5.29401 6.64607L4 8.0534Z"
				fill={color}
			/>
		</Svg>
	</View>
);

CheckedIcon.defaultProps = {
	color: base.white,
	size: 16,
};

export default CheckedIcon;
