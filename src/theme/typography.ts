export type TypographyItem = {
	weight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
	size: number;
	lineHeight: number;
	spacing?: number;
};

export type Typography = {
	display: TypographyItem;
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
	display: {weight: '400', size: 42, lineHeight: 50},
	heading: {
		large: {weight: '500', size: 34, lineHeight: 40},
		medium: {weight: '500', size: 26, lineHeight: 32},
		small: {weight: '400', size: 24, lineHeight: 28},
	},
	title: {
		large: {weight: '400', size: 20, lineHeight: 24},
		medium: {weight: '700', size: 18, lineHeight: 22},
		small: {weight: '700', size: 14, lineHeight: 16},
	},
	label: {
		large: {weight: '500', size: 16, lineHeight: 18},
		medium: {weight: '500', size: 14, lineHeight: 16},
		small: {weight: '500', size: 12, lineHeight: 14},
	},
	body: {
		large: {weight: '400', size: 16, lineHeight: 20},
		medium: {weight: '400', size: 14, lineHeight: 18},
		small: {weight: '400', size: 12, lineHeight: 16},
	},
	overline: {
		large: {weight: '500', size: 14, lineHeight: 16, spacing: 1},
		small: {weight: '500', size: 12, lineHeight: 14, spacing: 0.7},
	},
};

export default typography;
