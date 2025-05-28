import React, {FC} from 'react';
import {FlatList, ScrollView, FlatListProps, ScrollViewProps} from 'react-native';

type TypeData = any;
type RCProps = {
	item: TypeData;
	index: number;
};
type TypeRenderComponent = ({item, index}: RCProps) => React.ReactElement;

export enum TypeList {
	FlatList = 'flatList',
	ScrollView = 'scrollView',
}

interface BaseProps {
	data: TypeData[] | undefined;
	renderComponent: TypeRenderComponent;
	type?: TypeList;
}

type FlatListOnlyProps = Omit<FlatListProps<TypeData>, 'data' | 'renderItem'> & {
	type?: TypeList.FlatList;
};

type ScrollViewOnlyProps = ScrollViewProps & {
	type: TypeList.ScrollView;
};

type ListProps = BaseProps & (FlatListOnlyProps | ScrollViewOnlyProps);

const List: FC<ListProps> = ({data, renderComponent, type = TypeList.FlatList, ...props}) => {
	if (!data?.length) {
		return null;
	}

	if (type === TypeList.ScrollView) {
		const scrollProps = props as ScrollViewOnlyProps;

		return (
			<ScrollView {...scrollProps}>
				{data.map((item, index) => renderComponent({item, index}))}
			</ScrollView>
		);
	}

	const cleanedFlatProps = props as FlatListOnlyProps;

	return (
		<FlatList
			data={data}
			renderItem={({item, index}) => renderComponent({item, index})}
			keyExtractor={(item, index) => String((item as any).id ?? index)}
			{...cleanedFlatProps}
		/>
	);
};

export default List;
