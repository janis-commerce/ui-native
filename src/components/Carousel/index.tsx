import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
	Dimensions,
	NativeScrollEvent,
	NativeSyntheticEvent,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';

interface CarouselProps {
	pages: React.ReactNode[];
	isLoop?: boolean;
	autoplay?: boolean;
	autoPlayReverse?: boolean;
	intervalTime?: number;
	customWidth?: number;
	callback?: (params: {
		activePage: number;
		pagesLength: number;
		goPrev: () => void;
		goNext: () => void;
	}) => void | null;
}

const Carousel: FC<CarouselProps> = ({
	pages,
	isLoop = false,
	autoplay = false,
	autoPlayReverse = false,
	intervalTime = 4000,
	customWidth,
	callback,
	...props
}) => {
	const [activePage, setActivePage] = useState(0);
	const slider = useRef<ScrollView | null>(null);

	const {width: screenWidth} = Dimensions.get('screen');
	const width = customWidth ?? screenWidth;

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
	}, [activePage, isLoop, width, pages.length]);

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
	}, [activePage, isLoop, width, pages.length]);

	const initAutoPlay = useCallback(() => {
		/* istanbul ignore next */
		return setInterval(() => {
			if (autoplay && !autoPlayReverse) {
				goNext();
			}
			if (!autoplay && autoPlayReverse) {
				goPrev();
			}
		}, intervalTime);
	}, [autoplay, autoPlayReverse, intervalTime, goPrev, goNext]);

	const setCallback = useCallback(() => {
		callback &&
			callback({
				activePage,
				pagesLength: pages.length,
				goPrev,
				goNext,
			});
	}, [pages, activePage, goPrev, goNext, callback]);

	useEffect(() => {
		const intervalId = initAutoPlay();
		/* istanbul ignore next */
		return () => clearInterval(intervalId);
	}, [initAutoPlay]);

	useEffect(() => {
		if (callback) {
			setCallback();
		}
	}, [callback, setCallback]);

	const styles = StyleSheet.create({
		page: {
			width,
			alignItems: 'center',
		},
	});

	return (
		<View>
			<ScrollView
				ref={slider}
				snapToInterval={width}
				decelerationRate="fast"
				pagingEnabled
				onScroll={onPageChange}
				scrollEventThrottle={16}
				horizontal
				showsHorizontalScrollIndicator={false}
				{...props}>
				{pages.length &&
					pages.map((page, index) => (
						<View key={`${index}`} style={styles.page}>
							{page}
						</View>
					))}
			</ScrollView>
		</View>
	);
};

export default Carousel;
