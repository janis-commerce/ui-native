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
				white: base.white,
			},
			border: {
				contained: 'transparent',
				outlined: grey[300],
				text: 'transparent',
				white: grey[200],
			},
			text: {
				main: {
					contained: base.white,
					outlined: black.main,
					text: black.main,
					white: selectedColor.main,
				},
				secondary: {
					contained: base.white,
					outlined: selectedColor.main,
					text: selectedColor.main,
					white: selectedColor.main,
				},
			},
		},
		pressed: {
			background: {
				contained: selectedColor.dark,
				outlined: base.white,
				text: white.main,
				white: grey[100],
			},
			border: {
				contained: 'transparent',
				outlined: selectedColor.main,
				text: 'transparent',
				white: grey[200],
			},
			text: {
				main: {
					contained: base.white,
					outlined: black.main,
					text: black.main,
					white: selectedColor.main,
				},
				secondary: {
					contained: base.white,
					outlined: selectedColor.main,
					text: selectedColor.dark,
					white: selectedColor.main,
				},
			},
		},
		disabled: {
			background: {
				contained: grey[200],
				outlined: base.white,
				text: 'transparent',
				white: base.white,
			},
			border: {
				main: {
					contained: 'transparent',
					outlined: grey[200],
					text: 'transparent',
					white: grey[200],
				},
				secondary: {
					contained: 'transparent',
					outlined: grey[200],
					text: 'transparent',
					white: grey[200],
				},
			},
			text: {
				main: {
					contained: base.white,
					outlined: grey[200],
					text: grey[200],
					white: grey[200],
				},
				secondary: {
					contained: base.white,
					outlined: grey[200],
					text: grey[200],
					white: grey[200],
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
