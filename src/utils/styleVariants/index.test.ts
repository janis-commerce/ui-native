import styleVariants, {VariantProps} from './';

describe('styleVariants', () => {
	const resolver = styleVariants({
		base: {flexDirection: 'row'},
		variants: {
			size: {
				large: {height: 48},
				small: {height: 36},
			},
			tone: {
				dark: {backgroundColor: '#000'},
				light: {backgroundColor: '#FFF'},
			},
		},
	});

	it('merges base with the selected style of each group', () => {
		expect(resolver({size: 'large', tone: 'dark'})).toEqual({
			flexDirection: 'row',
			height: 48,
			backgroundColor: '#000',
		});
	});

	it('merges groups in declaration order so later groups win on conflict', () => {
		const conflicting = styleVariants({
			variants: {
				first: {on: {opacity: 0.2, elevation: 1}},
				second: {on: {opacity: 0.8}},
			},
		});

		expect(conflicting({first: 'on', second: 'on'})).toEqual({opacity: 0.8, elevation: 1});
	});

	it('works without base', () => {
		const withoutBase = styleVariants({
			variants: {size: {small: {height: 36}}},
		});

		expect(withoutBase({size: 'small'})).toEqual({height: 36});
	});

	it('does not leak styles from unselected keys', () => {
		expect(resolver({size: 'small', tone: 'light'})).toEqual({
			flexDirection: 'row',
			height: 36,
			backgroundColor: '#FFF',
		});
	});

	it('infers the selection type from the config', () => {
		const selection: VariantProps<typeof resolver> = {size: 'large', tone: 'light'};

		expect(resolver(selection)).toEqual({
			flexDirection: 'row',
			height: 48,
			backgroundColor: '#FFF',
		});

		// @ts-expect-error una key que no existe en el grupo se rechaza
		expect(() => resolver({size: 'huge', tone: 'dark'})).not.toThrow();

		// @ts-expect-error la selección exige una key por grupo
		expect(() => resolver({size: 'large'})).not.toThrow();
	});
});
