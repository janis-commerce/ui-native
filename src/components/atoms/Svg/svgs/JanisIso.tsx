import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import React from 'react';
import {View} from 'react-native';
import type {Isvg} from 'atoms/Svg';

const JanisIso = ({...props}: Isvg) => (
	<View {...props}>
		<Svg
			width="60"
			height="56"
			viewBox="0 0 60 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<Path
				d="M34.58 37.8333L31.0014 41.3821C26.0518 46.2905 18.0148 46.2905 13.0652 41.3821L3.02961 31.4301C-0.403882 28.0252 -0.403884 22.4966 3.02961 19.0917L3.23893 18.8841C6.67242 15.4792 12.2475 15.4792 15.681 18.8841L34.58 37.6257C34.6378 37.6829 34.6378 37.776 34.58 37.8333Z"
				fill="url(#paint0_linear_27636_2339)"
			/>
			<Path
				d="M31.9219 40.6336L44.2018 52.8112C47.6319 56.2127 53.2204 56.4646 56.7701 53.1861C60.4966 49.7441 60.5749 43.9559 57.0047 40.4155L45.1625 28.672C44.9262 28.3668 44.6756 28.0691 44.3938 27.7896L37.6527 21.1046C34.8015 17.6154 35.0114 12.4834 38.2845 9.2373L32.008 15.4616L31.9624 15.4618L31.9518 15.4722L31.9413 15.4618L25.4554 21.8937C22.0485 25.2722 22.0435 30.7483 25.4443 34.1329L31.9219 40.6336Z"
				fill="url(#paint1_linear_27636_2339)"
			/>
			<Path
				d="M37.5668 46.2315C34.324 43.0157 35.0581 37.533 38.3224 34.2864L56.9837 15.7806C60.4773 12.3161 60.4773 6.69912 56.9837 3.23461C53.4901 -0.229897 47.8259 -0.229897 44.3323 3.23461L28.3167 19.0563L25.3305 22.0175C21.9914 25.3288 21.9844 30.7101 25.3291 34.0159L31.9099 40.6262"
				fill="url(#paint2_linear_27636_2339)"
			/>
			<Defs>
				<LinearGradient
					id="paint0_linear_27636_2339"
					x1="7.89316"
					y1="23.8231"
					x2="32.0739"
					y2="47.7674"
					gradientUnits="userSpaceOnUse">
					<Stop stopColor="#FF8D10" />
					<Stop offset="0.2371" stopColor="#FF7D0C" />
					<Stop offset="0.5375" stopColor="#FF7109" />
					<Stop offset="0.8395" stopColor="#FF6E08" />
				</LinearGradient>
				<LinearGradient
					id="paint1_linear_27636_2339"
					x1="32.8934"
					y1="22.735"
					x2="73.1246"
					y2="64.4611"
					gradientUnits="userSpaceOnUse">
					<Stop offset="0.0004" stopColor="#1716FF" />
					<Stop offset="0.2994" stopColor="#1D3CFF" />
					<Stop offset="0.806" stopColor="#2979FF" />
				</LinearGradient>
				<LinearGradient
					id="paint2_linear_27636_2339"
					x1="31.5096"
					y1="34.0179"
					x2="57.4251"
					y2="8.09813"
					gradientUnits="userSpaceOnUse">
					<Stop stopColor="#5392FF" />
					<Stop offset="0.4865" stopColor="#3C84FF" />
					<Stop offset="0.9991" stopColor="#2979FF" />
				</LinearGradient>
			</Defs>
		</Svg>
	</View>
);

export default JanisIso;
