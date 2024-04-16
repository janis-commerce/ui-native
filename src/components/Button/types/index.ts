import type { Color, IconPosition, Type, Variant } from "../";

export interface SelectedColor {
    light: string,
    main: string,
    dark: string,
}

export interface Params {
	type: Type,
	variant: Variant,
	color: Color,
	iconPosition: IconPosition,
	isLoading: Boolean,
	isPressed: Boolean,
	disabled: Boolean,
	hasIconAndText?: Boolean,
}

export interface ReturnStyles {
	container: object;
	direction: object;
	icon: object;
	text: object;
	loadingColor: any;
}

export interface ContainerStyle {
	isPressed: Boolean,
	disabled: Boolean,
	isLoading: Boolean,
	color: Color,
	variant: Variant,
	type: Type,
	iconPosition: IconPosition,
}

export interface TextStyle {
	type: Type,
	variant: Variant,
	color: Color,
	disabled: Boolean,
	isLoading: Boolean,
	isPressed: Boolean,
	hasIconAndText?: Boolean,
	iconPosition: IconPosition,
}

export interface LoadingStyle {
	color: Color,
}

export interface DirectionStyle {
	iconPosition: IconPosition,
}