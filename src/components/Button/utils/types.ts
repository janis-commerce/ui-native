import type { Color, IconPosition, Type, Variant } from "../";

export interface Params {
	type: Type,
	variant: Variant,
	color: Color,
	iconPosition: IconPosition,
	isLoading: Boolean,
	isPressed: Boolean,
	disabled: Boolean,
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
}