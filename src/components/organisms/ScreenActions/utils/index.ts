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

// Floor width for icon-only actions so they read as a pill instead of
// collapsing into a circle. From Figma: 72px over the 48px button height.
export const iconButtonMinWidth = scaledForDevice(72, moderateScale);

export const chromePadding = (variant: ScreenActionsVariant) =>
	variant === 'rounded' ? scaledForDevice(16, moderateScale) : 0;

export const normalizeActions = (actions?: ActionsRows): ActionConfig[][] => {
	if (!Array.isArray(actions)) {
		return [];
	}

	return actions
		.map((row) => {
			const items = Array.isArray(row) ? row : [row];
			return items.filter((action): action is ActionConfig => !!action);
		})
		.filter((row) => row.length > 0);
};
