import { forwardRef } from "react";
import { BaseModalProps, BaseSwipeUpProps } from "./types";
import { BaseDetailModal, BaseDetailSwipe } from "./components";

export type BaseDetailProps = BaseModalProps | BaseSwipeUpProps

const BaseDetail = forwardRef<any, BaseDetailProps>((props, ref) => {
    if (props.componentType === 'swipe') return BaseDetailSwipe(props, ref);
      
    return BaseDetailModal({ ...props, ...{fullScreen:true}, componentType: 'modal' }, ref);
})


export default BaseDetail;