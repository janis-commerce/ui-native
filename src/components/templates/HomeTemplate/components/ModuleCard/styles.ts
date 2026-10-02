import {StyleSheet} from 'react-native';
import {base} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

const validIconContainerSize = scaledForDevice(48, moderateScale);

const cardLayout = StyleSheet.create({
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: base.white,
		borderRadius: scaledForDevice(10, moderateScale),
		paddingVertical: scaledForDevice(16, moderateScale),
		paddingHorizontal: scaledForDevice(14, horizontalScale),
		marginBottom: scaledForDevice(8, moderateScale),
		height: scaledForDevice(80, moderateScale),
	},
	iconContainer: {
		width: validIconContainerSize,
		height: validIconContainerSize,
		borderRadius: validIconContainerSize / 2,
		marginRight: scaledForDevice(14, horizontalScale),
	},
	content: {
		flex: 1,
	},
});

export default cardLayout;
