import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
	color?: string;
	size?: number;
}

const CheckedIcon = ({color, size}: IconProps) => (
	<View>
		<Svg width={size} height={size} viewBox="3 3 18 18" fill="none">
			<Path
				d="M19 3ZM10 17L5 12.1923L6.4 10.8462L10 14.3077L17.6 7L19 8.34615L10 17Z"
				fill={color}
			/>
		</Svg>
	</View>
);

CheckedIcon.defaultProps = {
	color: '#FFF',
	size: 18,
};

export default CheckedIcon;
