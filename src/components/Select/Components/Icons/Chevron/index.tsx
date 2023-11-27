import React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {primary} from '../../../../../theme/palette';
import Svg, {Path} from 'react-native-svg';
import {moderateScale} from '../../../../../scale';

interface IconProps {
	color?: string;
	size?: number;
	iconStyles?: {};
	style?: ViewStyle;
	onPress?: () => void;
}

const Chevron = ({style, color, size, onPress, ...props}: IconProps) => {
	return (
		<Pressable onPress={onPress} style={style} {...props}>
			<View>
				<Svg width={size} height={size} viewBox="0 0 16 16">
					<Path
						d="M8.17432 11.1055L3 6.49316L4.33106 5L8.17627 8.42773L12.0132 5.01904L13.3413 6.51416L8.17432 11.1055Z"
						fill={color}
					/>
				</Svg>
			</View>
		</Pressable>
	);
};

Chevron.defaultProps = {
	color: primary.main,
	size: moderateScale(21),
	onPress: () => {},
};

export default Chevron;
