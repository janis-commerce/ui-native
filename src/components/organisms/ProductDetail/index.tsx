import React, {forwardRef} from 'react';
import {BaseModalProps, BaseSwipeUpProps} from 'molecules/BaseDetail/types';
import BaseDetail from 'molecules/BaseDetail';
import ProductInfo, {ProductProps} from './components/ProductInfo';
import {ModalMethods} from 'atoms/Modal';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

type ProductDetailProps = (ProductProps & BaseModalProps) | (ProductProps & BaseSwipeUpProps);

type BaseDetailMethods = ModalMethods & BottomSheetMethods;

const ProductDetail = forwardRef<BaseDetailMethods, ProductDetailProps>((props, ref) => {
	const {brand, productName, refId, image, ...rest} = props;

	return (
		<BaseDetail ref={ref} {...rest}>
			<ProductInfo image={image} refId={refId} productName={productName} brand={brand} />
		</BaseDetail>
	);
});

export default ProductDetail;
