import {StyleSheet} from 'react-native';
import getStyleByTypography, {defaultStyles} from './';
import typography, {Typography} from 'theme/typography';

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

	it('as the type exists but size is missing in typography object', () => {
		const originalBody = typography.body;

		typography.body = {
			medium: {
				fontSize: 14,
				fontWeight: '400',
				lineHeight: 18,
			},
		} as unknown as Typography['body'];

		const styles = getStyleByTypography('body', 'small');

		expect(styles).toEqual(defaultStyles);

		typography.body = originalBody;
	});

	describe('returns typography correctly', () => {
		it('as there is display type', () => {
			const styles = getStyleByTypography('display', 'default');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						...typography.display.default,
					},
				})
			);
		});

		it('as there is title type with valid size', () => {
			const styles = getStyleByTypography('title', 'large');

			expect(styles).toEqual(
				StyleSheet.create({
					typography: {
						...typography.title.large,
					},
				})
			);
		});
	});
});
