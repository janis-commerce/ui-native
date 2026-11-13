import React, {FC} from 'react';
import BaseButton from 'atoms/BaseButton';
import Icon from 'atoms/Icon';
import Typography from 'atoms/Typography';
import getButtonStyles, {labelSize} from './utils';
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
 * solo aplica a los botones icon-only.
 */
const Button: FC<ButtonProps> = ({
	value,
	icon,
	iconPosition = 'left',
	size = 'large',
	variant = 'contained',
	color = 'primary',
	shape = 'oval',
	disabled = false,
	style,
	...props
}) => {
	if (!value && !icon) {
		return null;
	}

	const type = deriveType(value, icon);
	const {container, pressed, contentColor, iconMargin, borderRadius} = getButtonStyles({
		type,
		size,
		variant,
		color,
		shape,
		iconPosition,
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
			{iconPosition === 'left' && iconElement}
			{!!value && (
				<Typography type="label" size={labelSize[size]} color={contentColor}>
					{value}
				</Typography>
			)}
			{iconPosition === 'right' && iconElement}
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
