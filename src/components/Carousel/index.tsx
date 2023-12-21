import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import useCarouselControls from './utils';
import {horizontalScale} from '../../scale';
import {LOAD_STORYBOOK} from '../../../env.json';

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
	pages,
	isLoop = false,
	autoplay = false,
	autoPlayReverse = false,
	intervalTime = 4000,
	customWidth,
	buttonsCallback,
	pagesCallback,
	...props
}) => {
	if (!pages || !pages?.length) {
		return null;
	}

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
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const {slider, width, onPageChange} = useCarouselControls(carouselParams);

	const validateWidth = !LOAD_STORYBOOK ? horizontalScale(width) : width;

	const styles = StyleSheet.create({
		page: {
			width: validateWidth,
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
