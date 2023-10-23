import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import useCarouselControls from './utils';

export interface CarouselProps {
	pages: React.ReactNode[];
	isLoop?: boolean;
	autoplay?: boolean;
	autoPlayReverse?: boolean;
	intervalTime?: number;
	customWidth?: number;
	buttonsCallback?: (params: {goPrev: () => void; goNext: () => void}) => void | null;
	pagesCallback?: (params: {activePage: number; pagesLength: number}) => void | null;
}

const Carousel: FC<CarouselProps> = ({
	pages = [],
	isLoop = false,
	autoplay = false,
	autoPlayReverse = false,
	intervalTime = 4000,
	customWidth,
	buttonsCallback,
	pagesCallback,
	...props
}) => {
	const carouselParams = {
		pages,
		isLoop,
		autoplay,
		autoPlayReverse,
		intervalTime,
		customWidth,
		buttonsCallback,
		pagesCallback,
	};
	const {slider, width, onPageChange} = useCarouselControls(carouselParams);

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
