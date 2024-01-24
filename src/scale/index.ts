import {Dimensions, PixelRatio, Platform} from 'react-native';

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 720;

const isIOS = Platform.OS === 'ios';
const isWeb = Platform.OS === 'web';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const isSmallDevice = (minWidth: number = 365) => viewportWidth <= minWidth;

const horizontalScale = (size: number) =>
	PixelRatio.roundToNearestPixel((viewportWidth / guidelineBaseWidth) * size);

const verticalScale = (size: number) =>
	PixelRatio.roundToNearestPixel((viewportHeight / guidelineBaseHeight) * size);

const moderateScale = (size: number, factor: number = 1) =>
	size + (horizontalScale(size) - size) * factor;

/* istanbul ignore next */
const scaledForDevice = (size: number, scaleCallback: (size: number) => number): number =>
	isWeb ? size : scaleCallback(size);

export {
	isIOS,
	viewportWidth,
	viewportHeight,
	isSmallDevice,
	horizontalScale,
	verticalScale,
	moderateScale,
	scaledForDevice,
};
