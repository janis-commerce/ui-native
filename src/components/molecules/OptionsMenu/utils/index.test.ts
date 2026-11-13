import {getOptionKey} from './index';

const onPress = () => {};

describe('getOptionKey', () => {
	it('uses key when present', () => {
		expect(getOptionKey({key: 'edit', id: 'e1', title: 'Editar', onPress}, 0)).toBe('edit');
	});

	it('falls back to id when there is no key', () => {
		expect(getOptionKey({id: 'e1', title: 'Editar', onPress}, 0)).toBe('e1');
	});

	it('falls back to the index when there is neither key nor id', () => {
		expect(getOptionKey({title: 'Editar', onPress}, 2)).toBe('2');
	});
});
