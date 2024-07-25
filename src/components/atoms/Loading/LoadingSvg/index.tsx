import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {Animated, ViewProps} from 'react-native';
import {white} from 'theme/palette';

interface IanimatedView extends Animated.AnimatedProps<ViewProps> {
	size?: number;
	color?: string;
}

const LoadingSvg = ({size, color, ...props}: IanimatedView) => {
	return (
		<Animated.View {...props}>
			<Svg x="0px" y="0px" width={size} height={size} viewBox="0 0 163 163">
				<Path
					d="M134.1,136.4c-30.3,29.1-78.5,28-107.5-2.3c-29.1-30.3-28-78.5,2.3-107.5s78.5-28,107.5,2.3"
					fill="none"
					stroke={white.dark}
					strokeWidth="10.5546"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Path
					id="path-color"
					d="M78.4,5.5c42-1.7,77.4,30.9,79.1,72.9c1.7,42-30.9,77.4-72.9,79.1c-42,1.7-77.4-30.9-79.1-72.9"
					fill="none"
					stroke={color}
					strokeWidth="10.5546"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</Svg>
		</Animated.View>
	);
};

export default LoadingSvg;
