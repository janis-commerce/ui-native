import React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {black} from '../../../../../theme/palette';
import Svg, {Path} from 'react-native-svg';
import {moderateScale, scaledForDevice} from '../../../../../scale';

interface IconProps {
	color?: string;
	size?: number;
	iconStyles?: {};
	style?: ViewStyle;
	onPress?: () => void;
}

const Delete = ({style, color, size = 21, onPress, ...props}: IconProps) => {
	const validSize = scaledForDevice(size, moderateScale);

	return (
		<Pressable onPress={onPress} style={style} {...props}>
			<View>
				<Svg width={validSize} height={validSize} viewBox="0 0 16 16">
					<Path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1 8C1 4.13403 4.13397 1 8 1C11.866 1 15 4.13403 15 8C15 11.866 11.866 15 8 15C4.13397 15 1 11.866 1 8ZM10.03 11.4441L11.4441 10.03L9.41406 8L11.4441 5.96997L10.03 4.55591L8 6.58594L5.96997 4.55591L4.55591 5.96997L6.58594 8L4.55591 10.03L5.96997 11.4441L8 9.41406L10.03 11.4441Z"
						fill={color}
					/>
				</Svg>
			</View>
		</Pressable>
	);
};

Delete.defaultProps = {
	color: black.main,
	onPress: () => {},
};

export default Delete;
