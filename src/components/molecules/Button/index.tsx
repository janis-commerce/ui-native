import React, {FC} from 'react';
import BaseButton from 'atoms/BaseButton';
import Icon from 'atoms/Icon';
import Typography from 'atoms/Typography';
import getButtonStyles, {labelSize, resolveAppearance} from './utils';
import {ButtonProps, ButtonType} from './types';

const deriveType = (value?: string, icon?: string): ButtonType => {
	if (icon && value) {
		return 'iconText';
	}

	return icon ? 'icon' : 'text';
};

/**
 * Botón del design system. El tipo (text / icon / icon-text) se deriva de qué
 * props llegan con contenido (`value` vacío cuenta como sin texto); `shape`
 * solo aplica a los botones icon-only. Un valor fuera de la API en las props
 * de apariencia cae en su default.
 */
const Button: FC<ButtonProps> = ({
	value,
	icon,
	iconPosition,
	size,
	variant,
	color,
	shape,
	disabled = false,
	style,
	...props
}) => {
	if (!value && !icon) {
		return null;
	}

	const type = deriveType(value, icon);
	const appearance = resolveAppearance({size, variant, color, shape, iconPosition});
	const {container, pressed, contentColor, iconMargin, borderRadius} = getButtonStyles({
		...appearance,
		type,
		disabled,
	});

	const iconElement = !!icon && (
		<Icon name={icon} color={contentColor} size={24} style={iconMargin} />
	);

	return (
		<BaseButton
			{...props}
			style={[container, style]}
			pressedStyle={!disabled && pressed}
			borderRadius={borderRadius}
			disabled={disabled}>
			{appearance.iconPosition === 'left' && iconElement}
			{!!value && (
				<Typography type="label" size={labelSize[appearance.size]} color={contentColor}>
					{value}
				</Typography>
			)}
			{appearance.iconPosition === 'right' && iconElement}
		</BaseButton>
	);
};

export type {
	ButtonProps,
	ButtonSize,
	ButtonVariant,
	ButtonColor,
	ButtonShape,
	ButtonIconPosition,
} from './types';
export default Button;
