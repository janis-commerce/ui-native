import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import useCarouselControls from './';
import Text from 'atoms/Text';

const validPages = [<Text>Page1</Text>, <Text>Page2</Text>, <Text>Page3</Text>];
const validProps = {
	pages: validPages,
	isLoop: true,
	autoplay: true,
	intervalTime: 4000,
	customWidth: 360,
	buttonsCallback: {},
	pagesCallback: {},
};

const scrollTo = jest.fn();
const setActivePage = jest.fn();

const spyUseEffect = jest.spyOn(React, 'useEffect');
const spyUseState = jest.spyOn(React, 'useState');
const spySliderRef = jest.spyOn(React, 'useRef');
const spyInterval = jest.spyOn(React, 'useRef');

const sliderMock = {current: {scrollTo}};
const intervalMock = {current: 37667};

describe('useCarouselControls', () => {
	it('should return correct values when carousel is not at the end or beginning', () => {
		jest.useFakeTimers();
		spyUseState.mockReturnValueOnce([0, setActivePage]);
		spySliderRef.mockReturnValueOnce(sliderMock);
		spyInterval.mockReturnValueOnce(intervalMock);
		spyUseEffect.mockImplementation((f) => f());

		const {result} = renderHook(() =>
			useCarouselControls({
				pages: [],
				isLoop: false,
				autoplay: false,
				intervalTime: 4000,
				customWidth: 400,
				buttonsCallback: () => {},
				pagesCallback: () => {},
			})
		);

		expect(result).toBeTruthy();
	});

	describe('autoplay when', () => {
		afterEach(() => {
			jest.useRealTimers(); // Restaura los temporizadores reales
			clearInterval(intervalMock.current); // Limpia el intervalo
		});

		it('is autoplay', () => {
			jest.useFakeTimers();
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spySliderRef.mockReturnValueOnce(sliderMock);
			spyInterval.mockReturnValueOnce(intervalMock);
			spyUseEffect.mockImplementation((f) => f());

			const {result} = renderHook(() =>
				useCarouselControls({
					pages: validProps.pages,
					isLoop: validProps.isLoop,
					autoplay: validProps.autoplay,
				})
			);
			jest.runOnlyPendingTimers();

			expect(result).toBeTruthy();
		});

		it('is autoplay in reverse', () => {
			jest.useFakeTimers();
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spySliderRef.mockReturnValueOnce(sliderMock);
			spyInterval.mockReturnValueOnce(intervalMock);
			spyUseEffect.mockImplementation((f) => f());

			const {result} = renderHook(() =>
				useCarouselControls({
					pages: validProps.pages,
					isLoop: validProps.isLoop,
					autoPlayReverse: validProps.autoplay,
				})
			);
			jest.runOnlyPendingTimers();

			expect(result).toBeTruthy();
		});
	});
});
