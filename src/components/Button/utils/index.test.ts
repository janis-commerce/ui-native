import { getMixedButtonStyles } from ".";
import { Color, IconPosition, Type, Variant } from "..";

const props = {
	type: Type.Secondary,
	variant: Variant.Outlined,
	color: Color.Secondary,
	iconPosition: IconPosition.Top,
	isLoading: true,
	isPressed: true,
	disabled: true,
	hasIconAndText: true,
}

const failedProps = {
	type: undefined,
	variant: undefined,
	color: undefined,
	iconPosition: undefined,
	isLoading: false,
	isPressed: false,
	disabled: false,
	hasIconAndText: false,
}

describe('getMixedButtonStyles util', () => {
    it('return styles when params are passed correclty', () => {
        const response = getMixedButtonStyles(props);
        expect(response).toEqual(
            {
                container: {
                    borderWidth: 1,
                    borderColor: '#C4C6CC',
                    backgroundColor: '#DDDFE2',
                    paddingHorizontal: 16.5,
                    paddingVertical: 21,
                    shadowColor: '#000',
                    elevation: 5,
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    shadowOffset: { width: 0, height: 6.5 }
                },
                direction: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                },
                text: {
                    fontWeight: '500',
                    textAlign: 'center',
                    color: '#C4C6CC',
                    fontSize: 29
                },
                icon: { fontWeight: '500', textAlign: 'center', color: '#C4C6CC' },
                loadingColor: '#2F2F2F'
            }
        )
    });

    it('returns default styles when params is not correct or no exist', () => {
        // @ts-ignore 
        const response = getMixedButtonStyles(failedProps);
        expect(response).toEqual(
            {
                container: {
                borderWidth: 1,
                borderColor: 'transparent',
                backgroundColor: '#2979FF',
                paddingHorizontal: 16.5,
                height: 104
                },
                direction: {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
                },
                text: {
                fontWeight: '500',
                textAlign: 'center',
                color: '#fff',
                fontSize: 29
                },
                icon: { fontWeight: '500', textAlign: 'center', color: '#fff' },
                loadingColor: '#2979FF'
            }
        )
    });
});