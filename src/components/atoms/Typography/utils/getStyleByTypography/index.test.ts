import {StyleSheet} from 'react-native';
import getStyleByTypography from './';
import typography from 'theme/typography';

const defaultTypography = {typography: {...typography.body.medium}};

describe('getStyleByType function', () => {
	beforeEach(() => {
		Object.assign(typography, {
			mockType: {small: typography.body.small},
			emptyType: {},
		});
	});

	describe('returns default typography', () => {
		it('as there is no valid type', () => {
			const styles = getStyleByTypography('invalid', 'invalid');

			expect(styles).toEqual(defaultTypography);
		});

		it('as there is no valid size', () => {
			const styles = getStyleByTypography('body', 'invalid');

			expect(styles).toEqual(defaultTypography);
		});

		it('as there is title type with invalid size', () => {
			const styles = getStyleByTypography('title', 'invalid');

			expect(styles).toEqual(defaultTypography);
		});

		it('triggers hasSizes by using small in category', () => {
			const styles = getStyleByTypography('mockType', 'small');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						...typography.body.small,
					},
				})
			);
		});

		it('falls back to defaultCategory.medium when category has no valid sizes', () => {
			const styles = getStyleByTypography('emptyType', 'medium');

			expect(styles).toEqual(defaultTypography);
		});
	});

	describe('returns typography correctly', () => {
		it('as there is display type', () => {
			const styles = getStyleByTypography('display');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						...typography.display.medium,
					},
				})
			);
		});

		it('as there is title type with valid large size', () => {
			const styles = getStyleByTypography('title', 'large');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						...typography.title.large,
					},
				})
			);
		});

		it('as there is title type with valid small size', () => {
			const styles = getStyleByTypography('body', 'small');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						...typography.body.small,
					},
				})
			);
		});
	});
});
