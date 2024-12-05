import {StyleSheet} from 'react-native';
import getStyleByTypography, {defaultStyles} from './';
import typography from 'theme/typography';

describe('getStyleByType function', () => {
	describe('returns default typography', () => {
		it('as there is no valid type', () => {
			const styles = getStyleByTypography('invalid', 'invalid');

			expect(styles).toEqual(defaultStyles);
		});

		it('as there is no valid size', () => {
			const styles = getStyleByTypography('body', 'invalid');

			expect(styles).toEqual(defaultStyles);
		});

		it('as there is title type with invalid size', () => {
			const styles = getStyleByTypography('title', 'invalid');

			expect(styles).toEqual(defaultStyles);
		});
	});

	describe('returns typography correctly', () => {
		it('as there is display type', () => {
			const styles = getStyleByTypography('display', 'medium');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						fontWeight: typography.display.weight,
						fontSize: typography.display.size,
						lineHeight: typography.display.lineHeight,
					},
				})
			);
		});

		it('as there is overline type with invalid size', () => {
			const styles = getStyleByTypography('overline', 'medium');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						fontWeight: typography.overline.large.weight,
						fontSize: typography.overline.large.size,
						lineHeight: typography.overline.large.lineHeight,
						letterSpacing: typography.overline.large.spacing,
					},
				})
			);
		});

		it('as there is title type with valid size', () => {
			const styles = getStyleByTypography('title', 'large');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						fontWeight: typography.title.large.weight,
						fontSize: typography.title.large.size,
						lineHeight: typography.title.large.lineHeight,
					},
				})
			);
		});
	});
});
