import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import {secondaryBlue} from 'theme/palette';

const GRADIENT_ID = 'home-modules-gradient';

// An absolute Svg resolves "100%" against its parent's size minus padding, so it fills this wrapper instead.
const GradientBackground: FC = () => (
	<View style={StyleSheet.absoluteFill}>
		<Svg width="100%" height="100%">
			<Defs>
				<LinearGradient id={GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
					<Stop offset="0" stopColor={secondaryBlue.main} />
					<Stop offset="0.8" stopColor={secondaryBlue.light} />
				</LinearGradient>
			</Defs>
			<Rect width="100%" height="100%" fill={`url(#${GRADIENT_ID})`} />
		</Svg>
	</View>
);

export default GradientBackground;
