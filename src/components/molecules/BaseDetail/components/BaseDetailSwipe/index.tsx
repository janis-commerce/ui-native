import SwipeUp from "atoms/SwipeUp";
import { BaseSwipeUpProps } from "molecules/BaseDetail/types"
import { Ref } from "react"
import { SwipeUpScrollView } from "atoms/SwipeUp/childComponents";

const BaseDetailSwipe = (props: BaseSwipeUpProps, ref: Ref<any>) => {
    const {children, scrollProps = {}, ...swipeProps} = props;

    return (
        <SwipeUp ref={ref} {...swipeProps}>
            <SwipeUpScrollView showsVerticalScrollIndicator={false} {...scrollProps}>
                {children}
            </SwipeUpScrollView>
        </SwipeUp>
    )
}

export default BaseDetailSwipe