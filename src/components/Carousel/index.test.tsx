import * as React from 'react';
import {create} from 'react-test-renderer';
import {ScrollView} from 'react-native';
import Text from '../Text';
import Carousel from './';

const validPages = [<Text>Page</Text>, <Text>Page</Text>, <Text>Page</Text>];
const validProps = {
	pages: validPages,
	isLoop: true,
	autoplay: true,
	intervalTime: 4000,
	customWidth: 360,
	callback: {},
};

const scrollTo = jest.fn();
const setActivePage = jest.fn();
const spyUseEffect = jest.spyOn(React, 'useEffect');
const spyUseState = jest.spyOn(React, 'useState');
const spyUseRef = jest.spyOn(React, 'useRef');

describe('Carousel component', () => {
	it('it is rendered correctly', async () => {
		spyUseState.mockReturnValueOnce([0, setActivePage]);
		spyUseRef.mockReturnValueOnce({current: {scrollTo}});
		spyUseEffect.mockImplementation((f) => f());

		const CarouselComp = create(<Carousel pages={validProps.pages} />).toJSON();
		await expect(CarouselComp).toBeTruthy();
	});

	describe('chage page when', () => {
		it('scroll it', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const {root} = create(<Carousel pages={validProps.pages} />);

			const [ScrollComp] = root.findAllByType(ScrollView);
			ScrollComp.props.onScroll({
				nativeEvent: {contentOffset: {x: 360, layoutMeasurement: {width: 360}}},
			});

			expect(root).toBeTruthy();
		});
	});

	describe('go preview page', () => {
		it('using goPrev option on callback without isLoop', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const CarouselComp = create(
				<Carousel
					pages={validProps.pages}
					callback={(params) => {
						params.goPrev();
						params.goPrev();
					}}
				/>
			).toJSON();
			expect(CarouselComp).toBeTruthy();
		});

		it('using goPrev option on callback with isLoop', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const {root} = create(
				<Carousel
					pages={validProps.pages}
					isLoop={validProps.isLoop}
					callback={(params) => {
						params.goPrev();
						params.goPrev();
					}}
				/>
			);
			expect(root).toBeTruthy();
		});

		it('using goPrev option on callback with isLoop & active page is not zero', () => {
			spyUseState.mockReturnValueOnce([1, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const {root} = create(
				<Carousel
					pages={validProps.pages}
					isLoop={validProps.isLoop}
					callback={(params) => {
						params.goPrev();
						params.goPrev();
					}}
				/>
			);
			expect(root).toBeTruthy();
		});
	});

	describe('go next page', () => {
		it('using goNext option on callback without isLoop  & active page is not last page', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const {root} = create(
				<Carousel
					pages={validProps.pages}
					callback={(params) => {
						params.goNext();
					}}
				/>
			);
			expect(root).toBeTruthy();
		});

		it('using goNext option on callback with isLoop & active page is last page', () => {
			spyUseState.mockReturnValueOnce([2, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const {root} = create(
				<Carousel
					pages={validProps.pages}
					isLoop={validProps.isLoop}
					callback={(params) => {
						params.goNext();
					}}
				/>
			);
			expect(root).toBeTruthy();
		});

		it('using goNext option on callback with isLoop & active page is not last page', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const {root} = create(
				<Carousel
					pages={validProps.pages}
					isLoop={validProps.isLoop}
					callback={(params) => {
						params.goNext();
					}}
				/>
			);
			expect(root).toBeTruthy();
		});
	});

	describe('autoplay when', () => {
		it('is autoplay', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const {root} = create(
				<Carousel
					pages={validProps.pages}
					isLoop={validProps.isLoop}
					autoplay={validProps.autoplay}
					autoPlayReverse={false}
				/>
			);
			// jest.advanceTimersByTime(4000);

			expect(root).toBeTruthy();
		});

		it('is autoplay in reverse', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseRef.mockReturnValueOnce({current: {scrollTo}});
			spyUseEffect.mockImplementation((f) => f());

			const {root} = create(
				<Carousel
					pages={validProps.pages}
					isLoop={validProps.isLoop}
					autoplay={false}
					autoPlayReverse={validProps.autoplay}
					customWidth={200}
				/>
			);
			// jest.advanceTimersByTime(4000);

			expect(root).toBeTruthy();
		});
	});
});
