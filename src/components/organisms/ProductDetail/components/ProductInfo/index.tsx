import React from 'react'
import Image from "atoms/Image";
import Typography from "atoms/Typography";
import { View, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale } from 'scale';
import { verticalScale } from 'scale';
import { palette } from 'theme/palette';
import FastImage from 'react-native-fast-image';

export interface ProductProps {
    brand?: string,
    productName?: string,
    refId?: string,
    image?: string,
}

const ProductInfo = ({brand, productName, refId, image}: ProductProps) => {

    const styles = StyleSheet.create({
        Wrapper: {
            flex:1,
            alignItems: 'center',
            paddingVertical: verticalScale(12),
            marginHorizontal: horizontalScale(24),
        },
        productImage: {
            height: moderateScale(312),
            width: moderateScale(312),
            marginTop: verticalScale(16)
        },
        productInfo: {
            height: 'auto',
            marginTop: verticalScale(24),
        },
        productName: {
            marginTop: verticalScale(16),
        },
        referenceId: {
            marginTop: verticalScale(16),
        }
    })

    if(image && !image.length) {
        FastImage.preload([{
            uri: String(image)
        }]);
    }

    return (
            <View style={styles.Wrapper}>
            {!!image && <Image source={{uri:String(image)}} style={styles.productImage}/>}
            <View style={styles.productInfo}>
                {!!brand && <Typography color={palette.primary.main} type="overline" size="large">{String(brand)}</Typography>}
                {!!productName && <Typography color={palette.black.main} type='heading' size='medium' style={styles.productName}>{String(productName)}</Typography>}
                {!!refId && <Typography color={palette.black.main} type='heading' size='small' style={styles.referenceId}>{String(refId)}</Typography>}   
            </View>
            </View>
    )
}

export default ProductInfo;