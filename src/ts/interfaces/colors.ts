export interface GreyScale {
	[key: string]: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
}
export interface Env {
	[key: string]: string;
	qa: string;
	beta: string;
}
export interface Base {
	[key: string]: string;
	black: string;
	white: string;
}
export interface gamaColor {
	[key: string]: string;
	main: string;
	dark: string;
}

export interface Success extends gamaColor {}
export interface Error extends gamaColor {}
export interface Warning extends gamaColor {}
export interface Alert extends gamaColor {}
export interface Primary extends gamaColor {
	light: string;
}
export interface White extends Primary {
	semiTransparent: string;
}
export interface Black extends gamaColor {
	semiTransparent: string;
}

export interface Palette {
	[key: string]: any;
	primary: Primary;
	black: Black;
	white: White;
	grey: GreyScale;
	base: Base;
	success: Success;
	error: Error;
	warning: Warning;
	alert: Alert;
	environment: Env;
}
