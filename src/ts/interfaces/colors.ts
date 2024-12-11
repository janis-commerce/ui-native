export interface gamaColor {
	[key: string]: string;
	normal: string;
	pressed: string;
}

export interface statusColor extends gamaColor {
	light: string;
}

export interface Primary {
	blue: gamaColor;
}
export interface Secondary {
	blue: gamaColor;
	grey: gamaColor;
	black: gamaColor;
}

export interface GreyScale {
	[key: string]: string;
	white: string;
	'00': string;
	'01': string;
	'02': string;
	'03': string;
	'04': string;
	'05': string;
	'06': string;
	'07': string;
	'08': string;
}

export interface Status {
	green: statusColor;
	lightGreen: statusColor;
	aqua: statusColor;
	yellow: statusColor;
	orange: statusColor;
	red: statusColor;
	pink: statusColor;
	violet: statusColor;
	lightBlue: statusColor;
}

export type Palette = {
	[key: string]: any;
	primary: Primary;
	secondary: Secondary;
	greyScale: GreyScale;
	status: Status;
};
