import type {keyColor, keyIconPosition, keyType, keyVariant} from '../';

export interface SelectedColor {
	main: string;
	dark: string;
}

export interface Params {
	type: keyType;
	variant: keyVariant;
	color: keyColor;
	iconPosition: keyIconPosition;
	isLoading: Boolean;
	disabled: Boolean;
	hasIconAndText?: Boolean;
}

export interface ReturnStyles {
	container: object;
	direction: object;
	pressed: object;
	icon: object;
	text: object;
	loadingColor: any;
}

export interface ContainerStyle {
	disabled: Boolean;
	isLoading: Boolean;
	color: keyColor;
	variant: keyVariant;
	type: keyType;
	iconPosition: keyIconPosition;
}

export interface TextStyle {
	type: keyType;
	variant: keyVariant;
	color: keyColor;
	disabled: Boolean;
	isLoading: Boolean;

	hasIconAndText?: Boolean;
	iconPosition: keyIconPosition;
}

export interface LoadingStyle {
	color: keyColor;
}

export interface DirectionStyle {
	iconPosition: keyIconPosition;
}
