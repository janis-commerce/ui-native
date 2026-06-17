import {moderateScale, scaledForDevice} from 'scale';
import type {ButtonProps} from 'molecules/Button';

export type ScreenActionsVariant = 'rounded' | 'flush';

export interface ActionConfig extends ButtonProps {
	flex?: number;
}

type SkippableAction = ActionConfig | null | false | undefined;
export type ActionsRows = Array<SkippableAction | SkippableAction[]>;

export const rowGap = (variant: ScreenActionsVariant) =>
	variant === 'rounded' ? scaledForDevice(8, moderateScale) : 0;

export const chromePadding = (variant: ScreenActionsVariant) =>
	variant === 'rounded' ? scaledForDevice(16, moderateScale) : 0;

export const normalizeActions = (actions?: ActionsRows): ActionConfig[][] => {
	if (!Array.isArray(actions)) {
		return [];
	}

	return actions
		.map((row) => (Array.isArray(row) ? row : [row]))
		.map((row) => row.filter((action): action is ActionConfig => !!action))
		.filter((row) => row.length > 0);
};
