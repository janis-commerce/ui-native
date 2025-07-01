import React from 'react';
import {act, create} from 'react-test-renderer';
import Image from './index';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

describe('Image component', () => {
	it('should return placeholder image when source is not defined', () => {
		const {root} = create(<Image />);
		const placeholderIcon = root.findByType(View);

		expect(placeholderIcon).toBeTruthy();
	});

	it('should render correctly when source is passed', () => {
		const {toJSON} = create(<Image source={{uri: 'http://www.janis.in/logo.jpg'}} />);

		expect(toJSON()).toBeTruthy();
	});

	it('should set placeholderIcon when image calls onError props', () => {
		const {root} = create(<Image source={{uri: 'http://www.janis.in/logo.jpg'}} />);
		const FastImageComp = root.findByType(FastImage);

		const {onError} = FastImageComp.props;

		act(() => {
			onError();
		});

		const placeholderIcon = root.findByType(View);

		expect(placeholderIcon).toBeTruthy();
	});

	it('should set placeholderIcon and execute onError callback when image calls onError props', () => {
		const onErrorFn = jest.fn();
		const {root} = create(
			<Image source={{uri: 'http://www.janis.in/logo.jpg'}} onError={onErrorFn} />
		);
		const FastImageComp = root.findByType(FastImage);

		const {onError} = FastImageComp.props;

		act(() => {
			onError();
		});

		const placeholderIcon = root.findByType(View);

		expect(placeholderIcon).toBeTruthy();
		expect(onErrorFn).toHaveBeenCalled();
	});
});
