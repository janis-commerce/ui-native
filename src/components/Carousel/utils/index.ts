import {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView} from 'react-native';
import {CarouselProps} from '..';

const useCarouselControls = ({
	pages,
	isLoop,
	autoplay,
	autoPlayReverse,
	intervalTime,
	customWidth,
	buttonsCallback,
	pagesCallback,
}: CarouselProps) => {
	const [activePage, setActivePage] = useState(0);
	const slider = useRef<ScrollView | null>(null);
	const intervalId = useRef<number | null>(null);

	const {width: screenWidth} = Dimensions.get('screen');
	const width = customWidth ?? screenWidth;

	const pagesLength = pages.length - 1;

	const onPageChange = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
		const slide =
			Math.floor(
				(nativeEvent.contentOffset?.x - nativeEvent.layoutMeasurement?.width / 2) /
					nativeEvent.layoutMeasurement?.width
			) + 1;
		/* istanbul ignore next */
		if (slide !== activePage && slide < (pages.length || 0)) {
			setActivePage(slide);
		}
	};

	// action buttons

	const goPrev = useCallback(() => {
		if (isLoop && activePage === 0) {
			slider.current?.scrollTo({
				x: (activePage + pages.length - 1) * width,
				animated: true,
			});
		} else {
			slider.current?.scrollTo({
				x: (activePage - 1) * width,
				animated: true,
			});
		}

		if (!isLoop) {
			slider.current?.scrollTo({
				x: (activePage - 1) * width,
				animated: true,
			});
		}
	}, [pages.length, activePage, isLoop, slider, width]);

	const goNext = useCallback(() => {
		if (isLoop && activePage === pages.length - 1) {
			slider.current?.scrollTo({
				x: (activePage - pages.length - 1) * width,
				animated: true,
			});
		} else {
			slider.current?.scrollTo({
				x: (activePage + 1) * width,
				animated: true,
			});
		}

		if (!isLoop && activePage !== pages.length - 1) {
			slider.current?.scrollTo({
				x: (activePage + 1) * width,
				animated: true,
			});
		}
	}, [pages.length, activePage, isLoop, slider, width]);

	// auto play

	const initAutoPlay = useCallback(
		() =>
			setInterval(() => {
				goNext();
			}, intervalTime),
		[goNext, intervalTime]
	);

	const initAutoPlayReverse = useCallback(
		() =>
			setInterval(() => {
				goPrev();
			}, intervalTime),
		[goPrev, intervalTime]
	);

	useEffect(() => {
		if (autoplay && !autoPlayReverse) {
			intervalId.current = initAutoPlay();
		}

		if (!autoplay && autoPlayReverse) {
			intervalId.current = initAutoPlayReverse();
		}

		/* istanbul ignore next */
		return () => {
			if (intervalId.current) {
				clearInterval(intervalId.current);
			}
		};
	}, [autoplay, autoPlayReverse, initAutoPlay, initAutoPlayReverse]);

	// callbacks

	useEffect(() => {
		if (buttonsCallback) {
			buttonsCallback({goPrev, goNext});
		}
	}, [buttonsCallback, goNext, goPrev]);

	useEffect(() => {
		if (pagesCallback) {
			pagesCallback({activePage, pagesLength});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activePage]);

	return {
		activePage,
		slider,
		intervalId,
		width,
		goPrev,
		goNext,
		onPageChange,
	};
};

export default useCarouselControls;
