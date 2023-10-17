import {BottomSheetFlatList, BottomSheetProps} from '@gorhom/bottom-sheet'
import React,{ JSX } from 'react'
import { FlatListProps } from 'react-native'

interface basicFlatList {
    renderItem: JSX.Element,
    data: any[]
}

interface BottomDrawerFlatListProps extends FlatListProps<basicFlatList> {
}


const BottomDrawerFlatList = ({data,renderItem, ...props}: BottomDrawerFlatListProps) => {

    if(!renderItem || !data) return null

    return (
        <BottomSheetFlatList
            data={data}
            renderItem={renderItem}
            {...props}/>
    )
}

export default BottomDrawerFlatList;