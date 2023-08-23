import Svg, {Circle, Ellipse, G, Path} from 'react-native-svg';
import React from 'react';
import {View} from 'react-native';
import type {Isvg} from '../../../../ts/interfaces/svgs';

const EmptyIllustration = ({...props}: Isvg) => (
	<View {...props}>
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width="110"
			height="114"
			viewBox="0 0 110 114"
			{...props}>
			<G fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
				<G transform="translate(-6 -6)">
					<Ellipse cx="46" cy="109.5" fill="#D0D3E3" rx="34" ry="4.5" />
					<G>
						<Circle
							cx="45.743"
							cy="45.742"
							r="32.387"
							fill="#E8EAF6"
							fillRule="nonzero"
							transform="rotate(-34.722 45.743 45.742)"
						/>
						<G fill="#FFF" fillRule="nonzero" transform="translate(9.3 15.35)">
							<Path d="M13.043 0.277H41.043V10.277H13.043z" />
							<Path d="M3.043 14.676H41.043V28.737000000000002H3.043z" />
							<Path d="M0.59452381 34.4135714L41.0430952 34.4135714 41.0430952 48.4743651 7.08626984 48.4743651z" />
							<Path d="M13.0786508 54.1515873L41.0430952 54.1515873 41.0430952 66.8260317 33.1222222 66.8260317z" />
						</G>
						<Path
							fill="#2979FF"
							d="M45.743 7.857a37.886 37.886 0 0137.886 37.886c0 9.43-3.446 18.057-9.148 24.688l5.264 4.853a7.147 7.147 0 017.194 1.412l17.03 15.297a7.149 7.149 0 01-9.555 10.636l-17.03-15.297a7.151 7.151 0 01-1.962-7.708l-5.238-4.84-.05-.05a37.734 37.734 0 01-24.391 8.895c-20.924 0-37.886-16.962-37.886-37.886 0-20.924 16.962-37.886 37.886-37.886zm0 7.984c-16.514 0-29.902 13.388-29.902 29.902 0 16.514 13.388 29.901 29.902 29.901a29.902 29.902 0 0029.902-29.901c0-16.514-13.388-29.902-29.902-29.902z"
						/>
					</G>
				</G>
			</G>
		</Svg>
	</View>
);

export default EmptyIllustration;
