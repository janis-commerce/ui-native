import type {OptionsMenuOption} from '../types';

// Same fallback as FlatList's default keyExtractor, so options keep the convention used across lists.
export const getOptionKey = (option: OptionsMenuOption, index: number): string =>
	option.key ?? option.id ?? String(index);
