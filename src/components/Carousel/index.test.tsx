import * as React from 'react';
import {create} from 'react-test-renderer';
import Text from '../Text';
import Carousel from './';

const validPages = [<Text>Page</Text>, <Text>Page</Text>];
const validProps = {
	pages: validPages,
	isLoop: true,
	autoplay: true,
	intervalTime: 4000,
	customWidth: 360,
	callback: {},
};

const setActivePage = jest.fn();
const spyUseEffect = jest.spyOn(React, 'useEffect');
const spyUseState = jest.spyOn(React, 'useState');
const spyUseRef = jest.spyOn(React, 'useRef');

describe('Carousel component', () => {
	it('it is rendered correctly', async () => {
		spyUseState.mockReturnValueOnce([0, setActivePage]);
		spyUseRef.mockReturnValueOnce({
			current: {
				scrollTo: jest.fn((f) => f()),
			},
		});
		spyUseEffect.mockImplementation((f) => f());

		const CarouselComp = create(<Carousel pages={validProps.pages} />).toJSON();
		await expect(CarouselComp).toBeTruthy();
	});

	// describe('ScrollTo', () => {
	// 	it('left', () => {
	// 		spyUseEffect.mockImplementation((f) => f());
	// 		spyUseRef.mockReturnValueOnce({
	// 			current: {
	// 				scrollTo: {
	// 					x: 360,
	// 					animated: true,
	// 				},
	// 			},
	// 		});
	// 		const {root} = create(<Carousel pages={validProps.pages} />);

	// 		const ScrollComp = root.findAllByType(ScrollView);
	// 		ScrollComp[0].props.onScroll();
	// 		console.log(ScrollComp[0].props);

	// 		expect(root).toBeTruthy();
	// 	});
	// });

	describe('go preview page', () => {
		it('using goPrev option on callback without isLoop', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseRef.mockReturnValueOnce({
				current: {
					scrollTo: jest.fn((f) => f()),
				},
			});
			spyUseEffect.mockImplementation((f) => f());

			const CarouselComp = create(
				<Carousel
					pages={validProps.pages}
					callback={(params) => {
						params.goNext();
						params.goNext();
						params.goNext();
					}}
				/>
			).toJSON();
			expect(CarouselComp).toBeTruthy();
		});

		it('using goPrev option on callback with isLoop', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseEffect.mockImplementation((f) => f());
			spyUseRef.mockReturnValueOnce({
				current: {
					scrollTo: {
						x: 360,
						animated: true,
					},
				},
			});
			const {root} = create(
				<Carousel
					pages={validProps.pages}
					isLoop={validProps.isLoop}
					callback={(params) => {
						params.goPrev();
						params.goPrev();
						params.goPrev();
					}}
				/>
			);
			expect(root).toBeTruthy();
		});
	});

	describe('go next page', () => {
		it('using goPrev option on callback without isLoop', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseEffect.mockImplementation((f) => f());
			spyUseRef.mockReturnValueOnce({
				current: {
					scrollTo: {
						x: 360,
						animated: true,
					},
				},
			});
			const {root} = create(
				<Carousel
					pages={validProps.pages}
					callback={(params) => {
						params.goNext();
						params.goNext();
						params.goNext();
					}}
				/>
			);
			expect(root).toBeTruthy();
		});

		it('using goPrev option on callback with isLoop', () => {
			spyUseState.mockReturnValueOnce([0, setActivePage]);
			spyUseEffect.mockImplementation((f) => f());
			spyUseRef.mockReturnValueOnce({
				current: {
					scrollTo: {
						x: 360,
						animated: true,
					},
				},
			});
			const {root} = create(
				<Carousel
					pages={validProps.pages}
					isLoop={validProps.isLoop}
					callback={(params) => {
						params.goNext();
						params.goNext();
						params.goNext();
					}}
				/>
			);
			expect(root).toBeTruthy();
		});
	});

	it('autoplay', () => {
		spyUseState.mockReturnValueOnce([0, setActivePage]);
		spyUseEffect.mockImplementation((f) => f());
		spyUseRef.mockReturnValueOnce({
			current: {
				scrollTo: {
					x: 360,
					animated: true,
				},
			},
		});
		const {root} = create(
			<Carousel
				pages={validProps.pages}
				isLoop={validProps.isLoop}
				autoplay={validProps.autoplay}
				callback={(params) => {
					params.goNext();
					params.goNext();
					params.goNext();
				}}
			/>
		);
		expect(root).toBeTruthy();
	});

	it('autoplay in reverse', () => {
		spyUseState.mockReturnValueOnce([0, setActivePage]);
		spyUseEffect.mockImplementation((f) => f());
		spyUseRef.mockReturnValueOnce({
			current: {
				scrollTo: {
					x: 360,
					animated: true,
				},
			},
		});
		const {root} = create(
			<Carousel
				pages={validProps.pages}
				isLoop={validProps.isLoop}
				autoPlayReverse={validProps.autoplay}
				callback={(params) => {
					params.goNext();
					params.goNext();
					params.goNext();
				}}
				customWidth={200}
			/>
		);
		expect(root).toBeTruthy();
	});
});
