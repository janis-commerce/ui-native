import React from 'react';
import Image from 'atoms/Image';
import Typography from 'atoms/Typography';
import {View, StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from 'scale';
import {palette} from 'theme/palette';

export interface ProductProps {
	brand?: string;
	productName?: string;
	refId?: string;
	image?: string;
}

const styles = StyleSheet.create({
	Wrapper: {
		flex: 1,
		alignItems: 'center',
		marginBottom: verticalScale(12),
		marginHorizontal: horizontalScale(24),
	},
	productImage: {
		width: moderateScale(280),
		aspectRatio: 1,
	},
	productInfo: {
		width: '100%',
		maxWidth: moderateScale(312),
		marginTop: verticalScale(16),
	},
	productName: {
		marginTop: verticalScale(16),
	},
	referenceId: {
		marginTop: verticalScale(16),
	},
});

const ProductInfo = ({brand, productName, refId, image}: ProductProps) => {
	return (
		<View style={styles.Wrapper}>
			{!!image && (
				<Image source={{uri: String(image)}} style={styles.productImage} resizeMode="contain" />
			)}
			<View style={styles.productInfo}>
				{!!brand && (
					<Typography color={palette.primary.main} type="overline" size="large">
						{String(brand)}
					</Typography>
				)}
				{!!productName && (
					<Typography
						color={palette.black.main}
						type="heading"
						size="medium"
						style={styles.productName}>
						{String(productName)}
					</Typography>
				)}
				{!!refId && (
					<Typography
						color={palette.black.main}
						type="heading"
						size="small"
						style={styles.referenceId}>{`# ${String(refId)}`}</Typography>
				)}
			</View>
		</View>
	);
};

export default ProductInfo;
