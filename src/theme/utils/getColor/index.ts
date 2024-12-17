import palette from 'theme/palette';
import {Primary, Secondary, Status} from 'ts/interfaces/colors';

// Define specific paths for auto-completion
type PrimaryKey = keyof Primary;
type SecondaryKey = keyof Secondary;
type StatusKey = keyof Status;

export type GetColorArgs =
	| ['primary', PrimaryKey, 'normal' | 'pressed']
	| ['secondary', SecondaryKey, 'normal' | 'pressed']
	| ['greyScale', 'white' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08']
	| ['status', StatusKey, 'light' | 'normal' | 'pressed'];

const getColor = (...keys: GetColorArgs): string => {
	let current: any = palette;

	for (const key of keys) {
		if (current && typeof current === 'object' && key in current) {
			current = current[key];
		} else {
			return palette.greyScale.white;
		}
	}

	return current;
};

export default getColor;
