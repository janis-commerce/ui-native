import {moderateScale, scaledForDevice} from 'scale';
import palette from 'theme/palette';
import {SelectedColor} from '../../../../types';

export const colorConfig = (selectedColor: SelectedColor) => {
	return {
		main: {
			background: {
				contained: selectedColor.normal,
				outlined: palette.greyScale.white,
				text: 'transparent',
			},
			border: {
				contained: 'transparent',
				outlined: palette.greyScale['04'],
				text: 'transparent',
			},
			text: {
				main: {
					contained: palette.greyScale.white,
					outlined: palette.secondary.black.normal,
					text: palette.secondary.black.normal,
				},
				secondary: {
					contained: palette.greyScale.white,
					outlined: selectedColor.normal,
					text: selectedColor.normal,
				},
			},
		},
		pressed: {
			background: {
				contained: selectedColor.pressed,
				outlined: palette.greyScale.white,
				text: palette.secondary.grey.normal,
			},
			border: {
				contained: 'transparent',
				outlined: selectedColor.normal,
				text: 'transparent',
			},
			text: {
				main: {
					contained: palette.greyScale.white,
					outlined: palette.secondary.black.normal,
					text: palette.secondary.black.normal,
				},
				secondary: {
					contained: palette.greyScale.white,
					outlined: selectedColor.normal,
					text: selectedColor.pressed,
				},
			},
		},
		disabled: {
			background: {
				contained: palette.greyScale['03'],
				outlined: palette.greyScale['02'],
				text: 'transparent',
			},
			border: {
				main: {
					contained: 'transparent',
					outlined: 'transparent',
					text: 'transparent',
				},
				secondary: {
					contained: 'transparent',
					outlined: palette.greyScale['04'],
					text: 'transparent',
				},
			},
			text: {
				main: {
					contained: palette.greyScale['05'],
					outlined: palette.greyScale['04'],
					text: palette.greyScale['04'],
				},
				secondary: {
					contained: palette.greyScale['05'],
					outlined: palette.greyScale['04'],
					text: palette.greyScale['04'],
				},
			},
		},
	};
};

export const styleConfig = {
	container: {
		height: {
			main: scaledForDevice(50, moderateScale),
			secondary: scaledForDevice(42, moderateScale),
		},
	},
	directionWrapper: {
		center: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		flexDirection: {
			left: 'row',
			right: 'row-reverse',
			top: 'column',
			bottom: 'column-reverse',
		},
	},
	text: {
		fontWeight: '500',
		textAlign: 'center',
		fontFamily: 'Roboto-Medium',
		letterSpacing: 0,
	},
	icon: {
		margin: {
			top: {},
			bottom: {},
			left: {
				marginRight: scaledForDevice(8, moderateScale),
			},
			right: {
				marginLeft: scaledForDevice(8, moderateScale),
			},
		},
	},
};
