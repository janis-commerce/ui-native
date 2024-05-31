import getButtonStyles from './';

const validParams = {
	type: 'secondary',
	variant: 'outlined',
	color: 'secondary',
	iconPosition: 'top',
	isLoading: true,
	disabled: true,
	hasIconAndText: true,
};

const failedParams = {
	type: undefined,
	variant: undefined,
	color: undefined,
	iconPosition: undefined,
	isLoading: false,
	disabled: false,
	hasIconAndText: false,
};

describe('getMixedButtonStyles util', () => {
	it('return styles when params are passed correclty', () => {
		// @ts-ignore
		const response = getButtonStyles(validParams);
		expect(response).toEqual({
			container: {
				borderWidth: 1,
				borderColor: '#C4C6CC',
				backgroundColor: '#DDDFE2',
				paddingHorizontal: 16.5,
				paddingVertical: 21,
			},
			pressed: {borderColor: '#2979FF', backgroundColor: '#fff'},
			direction: {
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			},
			text: {
				fontWeight: '500',
				textAlign: 'center',
				color: '#C4C6CC',
				fontSize: 29,
			},
			icon: {fontWeight: '500', textAlign: 'center', color: '#C4C6CC'},
			loadingColor: '#2979FF',
		});
	});

	it('returns default styles when params is not correct or no exist', () => {
		// @ts-ignore
		const response = getButtonStyles(failedParams);
		expect(response).toEqual({
			container: {
				borderWidth: 1,
				borderColor: 'transparent',
				backgroundColor: '#2979FF',
				paddingHorizontal: 16.5,
				height: 104,
			},
			pressed: {borderColor: 'transparent', backgroundColor: '#1759FF'},
			direction: {
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'row',
			},
			text: {
				fontWeight: '500',
				textAlign: 'center',
				color: '#fff',
				fontSize: 29,
			},
			icon: {fontWeight: '500', textAlign: 'center', color: '#fff'},
			loadingColor: '#2979FF',
		});
	});
});
