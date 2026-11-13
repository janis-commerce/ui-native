import {moderateScale, scaledForDevice} from 'scale';
import type {ActionConfig, ActionsRows} from '../';

export const rowGap = scaledForDevice(8, moderateScale);

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
