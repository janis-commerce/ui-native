import React from 'react'
import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet'
import { ViewStyle } from 'react-native'

export interface SwipeUpProps extends BottomSheetProps {
    onChangeSnap?: () => void
    swipeWrapperStyle?: ViewStyle
    snapPosition?: number
}

const SwipeUp =({
        children, 
        snapPoints = ['100%'], 
        snapPosition = 0,
        style,
        onChangeSnap, 
        backgroundStyle,
        swipeWrapperStyle,
        ...props} : SwipeUpProps) => {

    if(!children) return null;

    return (
        <BottomSheet 
            snapPoints={snapPoints} 
            index={snapPosition}
            onChange={onChangeSnap}
            style={style}
            containerStyle={backgroundStyle}
            backgroundStyle={swipeWrapperStyle}
            {...props}>
                {children}
        </BottomSheet>
    )
}

export default SwipeUp;