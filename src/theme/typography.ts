import {moderateScale, scaledForDevice} from 'scale';

const scaleSize = (size: number) => scaledForDevice(size, moderateScale);

export type TypographyItem = {
	fontWeight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
	fontSize: number;
	lineHeight: number;
	letterSpacing?: number;
};

export type Typography = {
	display: {default: TypographyItem};
	heading: {
		large: TypographyItem;
		medium: TypographyItem;
		small: TypographyItem;
	};
	title: {
		large: TypographyItem;
		medium: TypographyItem;
		small: TypographyItem;
	};
	label: {
		large: TypographyItem;
		medium: TypographyItem;
		small: TypographyItem;
	};
	body: {
		large: TypographyItem;
		medium: TypographyItem;
		small: TypographyItem;
	};
	overline: {
		large: TypographyItem;
		small: TypographyItem;
	};
};

const typography: Typography = {
	display: {
		default: {
			fontSize: scaleSize(42),
			fontWeight: '400',
			lineHeight: 50,
		},
	},
	heading: {
		large: {
			fontSize: scaleSize(34),
			fontWeight: '500',
			lineHeight: 40,
		},
		medium: {
			fontSize: scaleSize(26),
			fontWeight: '500',
			lineHeight: 32,
		},
		small: {
			fontSize: scaleSize(24),
			fontWeight: '400',
			lineHeight: 28,
		},
	},
	title: {
		large: {
			fontSize: scaleSize(20),
			fontWeight: '400',
			lineHeight: 24,
		},
		medium: {
			fontSize: scaleSize(18),
			fontWeight: '700',
			lineHeight: 22,
		},
		small: {
			fontSize: scaleSize(14),
			fontWeight: '700',
			lineHeight: 16,
		},
	},
	label: {
		large: {
			fontSize: scaleSize(16),
			fontWeight: '500',
			lineHeight: 18,
		},
		medium: {
			fontSize: scaleSize(14),
			fontWeight: '500',
			lineHeight: 16,
		},
		small: {
			fontSize: scaleSize(12),
			fontWeight: '500',
			lineHeight: 14,
		},
	},
	body: {
		large: {
			fontSize: scaleSize(16),
			fontWeight: '400',
			lineHeight: 20,
		},
		medium: {
			fontSize: scaleSize(14),
			fontWeight: '400',
			lineHeight: 18,
		},
		small: {
			fontSize: scaleSize(12),
			fontWeight: '400',
			lineHeight: 16,
		},
	},
	overline: {
		large: {
			fontSize: scaleSize(14),
			fontWeight: '500',
			lineHeight: 16,
			letterSpacing: 1,
		},
		small: {
			fontSize: scaleSize(12),
			fontWeight: '500',
			lineHeight: 14,
			letterSpacing: 0.7,
		},
	},
};

export default typography;
