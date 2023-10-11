import React, {useCallback, useEffect, useRef, useState} from 'react';
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
	callback?: (params: {
		activePage: number;
		pagesLength: number;
		goToPage: (pageNumber: number) => void;
		goPrev: () => void;
		goNext: () => void;
	}) => void | null;
}

const Carousel = ({
	pages = [],
	isLoop = true,
	autoplay = false,
	autoPlayReverse = false,
	intervalTime = 300,
	callback,
	...props
}: CarouselProps) => {
	const [activePage, setActivePage] = useState(0);
	const slider = useRef<ScrollView | null>(null);
	const {width} = Dimensions.get('window');

	const onPageChange = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
		const slide =
			Math.floor(
				(nativeEvent.contentOffset.x - nativeEvent.layoutMeasurement.width / 2) /
					nativeEvent.layoutMeasurement.width
			) + 1;
		if (slide !== activePage && slide < (pages?.length || 0)) {
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

	const initAutoPlay = useCallback(
		() =>
			setInterval(() => {
				if (autoplay && !autoPlayReverse) {
					goNext();
				}
				if (!autoplay && autoPlayReverse) {
					goPrev();
				}
			}, intervalTime),
		[autoplay, autoPlayReverse, intervalTime, goPrev, goNext]
	);

	const setCallback = useCallback(() => {
		if (callback) {
			callback({
				activePage,
				pagesLength: pages.length,
				goToPage: (pageNumber) => setActivePage(pageNumber),
				goPrev,
				goNext,
			});
		}
	}, [pages, activePage, setActivePage, goPrev, goNext, callback]);

	useEffect(() => {
		const intervalId = initAutoPlay();
		return () => clearInterval(intervalId);
	}, [initAutoPlay]);

	useEffect(() => {
		if (callback) {
			setCallback();
		}
	}, [callback, setCallback]);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			width: '100%',
		},
		item: {
			width,
			alignItems: 'center',
		},
	});

	return (
		<View style={styles.container} {...props}>
			<ScrollView
				ref={slider}
				snapToInterval={width}
				decelerationRate="fast"
				pagingEnabled
				onScroll={onPageChange}
				scrollEventThrottle={16}
				horizontal
				showsHorizontalScrollIndicator={false}>
				{pages.map((page, index) => (
					<View key={`${index}`} style={styles.item}>
						{page}
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default Carousel;
