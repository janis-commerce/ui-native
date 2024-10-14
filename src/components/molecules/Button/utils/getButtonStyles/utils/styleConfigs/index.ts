import {moderateScale, scaledForDevice} from 'scale';
import {base, black, grey, white} from 'theme/palette';
import {SelectedColor} from '../../../../types';

export const colorConfig = (selectedColor: SelectedColor) => {
	return {
		main: {
			background: {
				contained: selectedColor.main,
				outlined: base.white,
				text: 'transparent',
			},
			border: {
				contained: 'transparent',
				outlined: grey[300],
				text: 'transparent',
			},
			text: {
				main: {
					contained: base.white,
					outlined: black.main,
					text: black.main,
				},
				secondary: {
					contained: base.white,
					outlined: selectedColor.main,
					text: selectedColor.main,
				},
			},
		},
		pressed: {
			background: {
				contained: selectedColor.dark,
				outlined: base.white,
				text: white.main,
			},
			border: {
				contained: 'transparent',
				outlined: selectedColor.main,
				text: 'transparent',
			},
			text: {
				main: {
					contained: base.white,
					outlined: black.main,
					text: black.main,
				},
				secondary: {
					contained: base.white,
					outlined: selectedColor.main,
					text: selectedColor.dark,
				},
			},
		},
		disabled: {
			background: {
				contained: grey[200],
				outlined: grey[100],
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
					outlined: grey[300],
					text: 'transparent',
				},
			},
			text: {
				main: {
					contained: grey[400],
					outlined: grey[300],
					text: grey[300],
				},
				secondary: {
					contained: grey[400],
					outlined: grey[300],
					text: grey[300],
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
		lineHeight: scaledForDevice(19, moderateScale),
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
