import { BaseModalProps, BaseSwipeUpProps } from "molecules/BaseDetail/types";
import BaseDetail from "molecules/BaseDetail";
import ProductInfo,{ProductProps} from "./components/ProductInfo";
import { forwardRef } from "react";

type ProductDetailProps =   
    | (ProductProps & BaseModalProps)
    | (ProductProps & BaseSwipeUpProps);

const ProductDetail = forwardRef((props: ProductDetailProps, ref) => {
    const { brand, productName, refId, image, ...rest } = props; 

    return (
        <BaseDetail ref={ref} {...rest}>
            <ProductInfo image={image} refId={refId} productName={productName} brand={brand}/>
        </BaseDetail>
    )}
);
      
export default ProductDetail;
