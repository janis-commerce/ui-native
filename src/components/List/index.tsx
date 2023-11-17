import React, {FC} from 'react';
import {FlatList, ScrollView, FlatListProps, ScrollViewProps} from 'react-native';

type TypeData = string | number | object | [] | React.ReactElement;
type RCProps = {
	item: TypeData;
	index: number;
};
type TypeRenderComponent = ({item, index}: RCProps) => React.ReactElement;
export enum TypeList {
	FlatList = 'flatList',
	ScrollView = 'scrollView',
}
interface ListProps {
	data: TypeData[] | undefined;
	renderComponent: TypeRenderComponent;
	type?: TypeList;
}
type MergedProps = ListProps & (FlatListProps<TypeData> | ScrollViewProps);

const List: FC<MergedProps> = ({data, renderComponent, type = TypeList.FlatList, ...props}) => {
	if (!data?.length) {
		return null;
	}

	const FlatListComponent = () => <FlatList data={data} renderItem={renderComponent} {...props} />;
	const ScrollViewComponent = () => (
		<ScrollView {...props}>{data.map((item, index) => renderComponent({item, index}))}</ScrollView>
	);

	return type === TypeList.FlatList ? <FlatListComponent /> : <ScrollViewComponent />;
};

export default List;
