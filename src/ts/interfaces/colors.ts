export interface GreyScale {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
}
export interface Env {
	qa: string;
	beta: string;
}
export interface Base {
	black: string;
	white: string;
}
export interface gamaColor {
	main: string;
	dark: string;
}
export interface Black extends gamaColor {}
export interface Success extends gamaColor {}
export interface Error extends gamaColor {}
export interface Warning extends gamaColor {}
export interface Alert extends gamaColor {}
export interface Primary extends gamaColor {
	light: string;
}
export interface White extends Primary {}
