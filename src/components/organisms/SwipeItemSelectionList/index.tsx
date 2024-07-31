import React, {useState} from 'react';
import SwipeList, {SwipeListProps} from 'molecules/SwipeList';
import ItemSelectionButton from 'molecules/ItemSelectionButton';

interface SwipeItemSelectionListProps extends Partial<SwipeListProps> {
	data: any[];
	multiselect?: boolean;
	leftSelection?: boolean;
	rightSelection?: boolean;
	onSelection?: (id: string) => {};
}

const SwipeItemSelectionList: React.FC<SwipeItemSelectionListProps> = ({
	data,
	multiselect = false,
	leftSelection = false,
	rightSelection = false,
	onSelection = () => {},
	...props
}) => {
	const [selectedElementId, setSelectedElementId] = useState<string>('');
	const [selectedElementsIds, setSelectedElementsIds] = useState<string[]>([]);

	if (!data || !data.length) {
		return null;
	}

	const checkIfElementIsSelected = (id: string, isElementSelected: boolean) => {
		if (isElementSelected) {
			return multiselect
				? setSelectedElementsIds((prevState) => prevState.filter((includedId) => includedId !== id))
				: setSelectedElementId('');
		}

		return multiselect
			? setSelectedElementsIds((prevState) => [...prevState, id])
			: setSelectedElementId(id);
	};

	const renderItem = (element: {id: string; name: string}) => {
		const {id, name} = element;

		const isElementSelected = multiselect
			? selectedElementsIds.includes(id)
			: selectedElementId === id;

		const onSelectElement = () => {
			checkIfElementIsSelected(id, isElementSelected);
			return onSelection(id);
		};

		return (
			<ItemSelectionButton
				radioButton={multiselect}
				leftSelection={leftSelection}
				rightSelection={rightSelection}
				selected={isElementSelected}
				onSelection={onSelectElement as () => {}}
				name={name}
			/>
		);
	};

	return <SwipeList {...props}>{data.map((element) => renderItem(element))}</SwipeList>;
};

export default SwipeItemSelectionList;
