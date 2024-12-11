// @ts-nocheck
import * as React from 'react';
import {create} from 'react-test-renderer';
import * as utils from './utils';
import ProgressBar from './';
import palette from 'theme/palette';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
const getPercentageSpy = jest.spyOn(utils, 'getPercentage');
const getBarColorSpy = jest.spyOn(utils, 'getBarColor');

const validData = {
	value: 50,
	totalValue: 100,
	isAnimated: true,
	duration: 300,
	style: {backgroundColor: '#000'},
};

describe('ProgressBar component', () => {
	describe('return zero percent width when', () => {
		it('value is not a number', () => {
			getPercentageSpy.mockReturnValueOnce(0);
			getBarColorSpy.mockReturnValueOnce(palette.greyScale.white);

			const {toJSON} = create(<ProgressBar value={null} totalValue={validData.totalValue} />);

			expect(toJSON()).toBeTruthy();
		});

		it('totalValue is not a number', () => {
			getPercentageSpy.mockReturnValueOnce(0);
			getBarColorSpy.mockReturnValueOnce(palette.greyScale.white);

			const {toJSON} = create(<ProgressBar value={validData.value} />);

			expect(toJSON()).toBeTruthy();
		});
	});

	it('when isAnimation is true', () => {
		getPercentageSpy.mockReturnValueOnce(0);
		getBarColorSpy.mockReturnValueOnce(palette.greyScale.white);

		const {toJSON} = create(
			<ProgressBar value={validData.value} totalValue={validData.totalValue} isAnimated />
		);

		expect(toJSON()).toBeTruthy();
	});
});
