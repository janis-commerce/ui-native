import React, { ReactElement } from 'react'
import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet'
import { ViewStyle, StyleSheet } from 'react-native';
import {BottomDrawerFlatList} from './listComponents'


export interface BottomDrawerProps extends BottomSheetProps {
    children: ReactElement | null
}

const BottomDrawer = ({
        children, 
        snapPoints, 
        index = 0,
        style,
        onChange, 
        containerStyle,
        ...props} : BottomDrawerProps) => {

    if(!children) return null;
    if(!snapPoints || !snapPoints ) return null;

    return (
        <BottomSheet 
            snapPoints={snapPoints} 
            index={index}
            onChange={onChange}
            style={style}
            {...props}>
                {children}
        </BottomSheet>
    )
}

export {
    BottomDrawer,
    BottomDrawerFlatList
};
