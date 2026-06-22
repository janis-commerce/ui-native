import {moderateScale, scaledForDevice} from 'scale';
import type {ActionConfig, ActionsRows} from '../';

export const rowGap = scaledForDevice(8, moderateScale);

// Floor width for icon-only actions so they read as a pill instead of
// collapsing into a circle. From Figma: 72px over the 48px button height.
export const iconButtonMinWidth = scaledForDevice(72, moderateScale);

export const barPadding = scaledForDevice(16, moderateScale);

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
