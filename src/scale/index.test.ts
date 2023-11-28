import {Dimensions, PixelRatio, Platform} from 'react-native';
import {isIOS, isSmallDevice, horizontalScale, verticalScale, moderateScale} from './'; // Asegúrate de que la ruta sea correcta

describe('Scale Utils', () => {
	const mockDimensions = {
		window: {
			width: 750,
			height: 1334,
			scale: 2,
			fontScale: 1,
		},
	};

	beforeAll(() => {
		jest.spyOn(Dimensions, 'get').mockImplementation(() => mockDimensions.window);
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	describe('horizontalScale', () => {
		it('should scale size horizontally based on the guideline', () => {
			const size = 10;
			const expectedScaledSize = PixelRatio.roundToNearestPixel(
				(mockDimensions.window.width / 360) * size
			);
			expect(horizontalScale(size)).toBe(expectedScaledSize);
		});
	});

	describe('verticalScale', () => {
		it('should scale size vertically based on the guideline', () => {
			const size = 10;
			const expectedScaledSize = PixelRatio.roundToNearestPixel(
				(mockDimensions.window.height / 720) * size
			);
			expect(verticalScale(size)).toBe(expectedScaledSize);
		});
	});

	describe('isIOS', () => {
		it('should return true on iOS', () => {
			Platform.OS = 'ios';
			expect(isIOS).toBe(true);
		});
	});

	describe('isSmallDevice', () => {
		it('should return false for larger devices', () => {
			mockDimensions.window.width = 500;
			expect(isSmallDevice).toBe(false);
		});
	});

	describe('moderateScale', () => {
		it('should scale size moderately based on the guideline and factor', () => {
			const size = 10;
			const factor = 2;
			const expectedModerateSize = size + (horizontalScale(size) - size) * factor;
			expect(moderateScale(size, factor)).toBe(expectedModerateSize);
		});
	});
});
