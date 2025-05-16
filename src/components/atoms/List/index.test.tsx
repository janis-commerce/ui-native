import React from 'react';
import {create} from 'react-test-renderer';
import {Text, View} from 'react-native';
import List, {TypeList} from './';

const data = [
	{id: 1, nombre: 'nombre1'},
	{id: 2, nombre: 'nombre2'},
];

const dataWithoutId = [{nombre: 'nombre1'}, {nombre: 'nombre2'}];

const renderComponent = ({item}: any) => (
	<View key={item.id}>
		<Text>{item.nombre}</Text>
	</View>
);

describe('List component', () => {
	describe('returns null when ', () => {
		it('data is not correct', () => {
			const {toJSON} = create(<List data={undefined} renderComponent={renderComponent} />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correctlt when', () => {
		it('data is array type and type is flatList per default', () => {
			const {toJSON} = create(<List data={dataWithoutId} renderComponent={renderComponent} />);
			expect(toJSON()).toBeTruthy();
		});

		it('data is array type and type is scrollView', () => {
			const {toJSON} = create(
				<List data={data} type={TypeList.ScrollView} renderComponent={renderComponent} />
			);
			expect(toJSON()).toBeTruthy();
		});
	});
});
