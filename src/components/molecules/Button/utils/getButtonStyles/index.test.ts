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
				borderColor: '#D5D7DB',
				backgroundColor: '#fff',
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
				color: '#D5D7DB',
				fontFamily: 'Roboto-Medium',
				letterSpacing: 0,
				fontSize: 29,
			},
			icon: {
				fontWeight: '500',
				fontFamily: 'Roboto-Medium',
				letterSpacing: 0,
				textAlign: 'center',
				color: '#D5D7DB',
			},
			loadingColor: '#2979FF',
		});
	});

	it('returns white variant styles: white background with accent border and text', () => {
		const whiteVariantParams = {
			type: 'secondary',
			variant: 'white',
			color: 'primary',
			iconPosition: 'top',
			isLoading: false,
			isDisabled: false,
			hasIconAndText: true,
		};

		// @ts-ignore — TS infiere string en lugar de los literal types de Params (keyType, keyVariant, keyColor)
		const {container, pressed, text, icon} = getButtonStyles(whiteVariantParams);
		expect(container).toEqual(
			expect.objectContaining({backgroundColor: '#fff', borderColor: '#2979FF'})
		);
		expect(pressed).toEqual({backgroundColor: '#DDDFE2', borderColor: '#2979FF'});
		expect(text).toEqual(expect.objectContaining({color: '#2979FF'}));
		expect(icon).toEqual(expect.objectContaining({color: '#2979FF'}));
	});

	it('returns disabled white variant styles in grey', () => {
		const disabledWhiteParams = {
			type: 'main',
			variant: 'white',
			color: 'primary',
			iconPosition: 'left',
			isLoading: false,
			isDisabled: true,
			hasIconAndText: false,
		};

		// @ts-ignore — TS infiere string en lugar de los literal types de Params (keyType, keyVariant, keyColor)
		const {container, text} = getButtonStyles(disabledWhiteParams);
		expect(container).toEqual(
			expect.objectContaining({backgroundColor: '#fff', borderColor: '#D5D7DB'})
		);
		expect(text).toEqual(expect.objectContaining({color: '#D5D7DB'}));
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
				fontFamily: 'Roboto-Medium',
				letterSpacing: 0,
				fontSize: 29,
			},
			icon: {
				fontWeight: '500',
				textAlign: 'center',
				color: '#fff',
				fontFamily: 'Roboto-Medium',
				letterSpacing: 0,
			},
			loadingColor: '#2979FF',
		});
	});
});
