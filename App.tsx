import React from 'react';
import {View} from 'react-native';
import Select from './src/components/Select';

const App = () => {
	const listaPaises = [
		{label: 'Argentina', value: 'ar'},
		{label: 'Chile', value: 'cl'},
		{label: 'Mexico', value: 'mx'},
		{label: 'Brasil', value: 'br'},
		{label: 'Colombia', value: 'co'},
		{label: 'Panamá', value: 'pm'},
		{label: 'Paraguay', value: 'pr'},
		{label: 'Bolivia', value: 'bo'},
		{label: 'Venezuela', value: 've'},
		{label: 'USA', value: 'us'},
		{label: 'España', value: 'es'},
		{label: 'India', value: 'in'},
	];

	const style = {
		display: 'flex',
		backgroundColor: 'whitesmoke',
		padding: 20,
	};

	return (
		<View style={style}>
			<Select
				style={{marginBottom: 20}}
				value={[listaPaises[9]]}
				options={listaPaises}
				label={'Paises'}
				optionStyles={() => {}}
				multiOptionsText={'others'}
				placeholder={'seleccione un pais'}
				isDisabled={false}
				isMulti={false}
				isSearchable={false}
				// eslint-disable-next-line no-console
				onSelectOption={(option) => console.log(option)}
			/>
			<Select
				value={[listaPaises[1]]}
				options={listaPaises}
				label={'Paises'}
				optionStyles={() => {}}
				multiOptionsText={'others'}
				placeholder={'seleccione un pais'}
				isDisabled={true}
				isMulti={false}
				isSearchable={false}
				// eslint-disable-next-line no-console
				onSelectOption={(option) => console.log(option)}
			/>
			<Select
				value={[listaPaises[5], listaPaises[8]]}
				options={listaPaises}
				label={'Paises'}
				optionStyles={() => {}}
				// multiOptionsText={'others'}
				placeholder={'seleccione un pais'}
				isDisabled={false}
				isMulti={true}
				isSearchable={false}
				// eslint-disable-next-line no-console
				onSelectOption={(option) => console.log(option)}
			/>
			<Select
				options={listaPaises}
				label={'Paises'}
				optionStyles={() => {}}
				multiOptionsText={'others'}
				placeholder={'seleccione un pais'}
				isDisabled={false}
				isMulti={false}
				isSearchable={false}
				// eslint-disable-next-line no-console
				onSelectOption={(option) => console.log(option)}
			/>
		</View>
	);
};

export default App;
