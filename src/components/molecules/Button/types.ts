import {BaseButtonProps} from 'atoms/BaseButton';

export type ButtonSize = 'large' | 'small';
export type ButtonVariant = 'contained' | 'outlined' | 'cleaned';
export type ButtonColor = 'primary' | 'black' | 'success' | 'error';
export type ButtonShape = 'oval' | 'circle';
export type ButtonIconPosition = 'left' | 'right';

/** Derivado de value/icon presentes (el "Type" de Figma: Text / Icn / Icn-text); no es prop pública. */
export type ButtonType = 'text' | 'icon' | 'iconText';

export interface ButtonProps
	extends Omit<BaseButtonProps, 'children' | 'pressedStyle' | 'borderRadius'> {
	/** Texto del botón; vacío u omitido con `icon` presente deriva icon-only. */
	value?: string;
	icon?: string;
	iconPosition?: ButtonIconPosition;
	size?: ButtonSize;
	variant?: ButtonVariant;
	color?: ButtonColor;
	/** Solo aplica a botones icon-only: `oval` (pill ancha) o `circle` (compacta). */
	shape?: ButtonShape;
	disabled?: boolean;
}
