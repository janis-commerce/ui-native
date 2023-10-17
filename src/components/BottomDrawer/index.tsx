import React, { ReactElement } from 'react'
import BottomSheet, {BottomSheetFlatList, BottomSheetProps, BottomSheetScrollView, BottomSheetView} from '@gorhom/bottom-sheet'
import { FlatListProps } from 'react-native'


type typeList = 'none' | 'flatList' | 'scrollView'


export interface BottomDrawerProps extends BottomSheetProps {
    children: ReactElement | null
    typeList?: typeList
    data: any[],
    renderItem: any
}

const BottomDrawer = ({
        children, 
        snapPoints, 
        index = 0,
        style,
        onChange, 
        typeList = 'none',
        containerStyle,
        data,
        renderItem,
        ...props} : BottomDrawerProps) => {

    if(!snapPoints || !snapPoints ) return null;

    const wrapper = {
        flatList: () => <BottomSheetFlatList data={data} renderItem={renderItem}/>,
        scrollView: () => <BottomSheetScrollView>{children}</BottomSheetScrollView>,
        none: () => <BottomSheetView>{children}</BottomSheetView>
    }
    
    const BottomContent = wrapper[typeList]

    return (
        <BottomSheet 
            snapPoints={snapPoints} 
            index={index}
            onChange={onChange}
            style={style}
            containerStyle={containerStyle}
            {...props}>
                {BottomContent}
        </BottomSheet>
    )
}

export default BottomDrawer