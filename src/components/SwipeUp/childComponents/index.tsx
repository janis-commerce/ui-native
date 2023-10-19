import React,{EffectCallback, DependencyList, JSX} from 'react';
import { BottomSheetFlatList, BottomSheetScrollView, BottomSheetScrollableProps, BottomSheetView } from '@gorhom/bottom-sheet';
import {FlatListProps, ScrollViewProps, ViewProps} from 'react-native'

interface BottomSheetFocusProps {
    focusHook?: (effect: EffectCallback, deps?: DependencyList) => void
}

type SwipeUpFlatListProps <T,> = FlatListProps<T> & BottomSheetScrollableProps
type SwipeUpScrollViewProps = ScrollViewProps & BottomSheetScrollableProps
type SwipeUpViewProps = ViewProps & BottomSheetFocusProps

export const SwipeUpFlatList = <T,> ({data = [] ,renderItem, ...props} : SwipeUpFlatListProps<T>) : JSX.Element | null => {

    if(!data || !data.length || !renderItem) return null

   return (
    <BottomSheetFlatList data={data} renderItem={renderItem} {...props}/>
   ) 
}

export const SwipeUpScrollView = ({children, ...props} : SwipeUpScrollViewProps) : JSX.Element | null => {

    if(!children) return null

    return (
        <BottomSheetScrollView  {...props}>
        {children}
      </BottomSheetScrollView>
    )
}


export const SwipeUpView = ({children, ...props} :SwipeUpViewProps) : JSX.Element | null => {

    if(!children) return null

    return (
        <BottomSheetView {...props}>
            {children}
        </BottomSheetView>
    )
}