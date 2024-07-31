import React, {Ref, useState} from 'react';
import SwipeList, {SwipeListProps} from 'molecules/SwipeList';
import ItemSelectionButton from 'molecules/ItemSelectionButton';
import BottomSheet from '@gorhom/bottom-sheet';

interface SwipeItemSelectionListProps extends Partial<SwipeListProps> {
	ref?: Ref<BottomSheet>;
	data: any[];
	radioButton?: boolean;
	multiselect?: boolean;
	leftSelection?: boolean;
	rightSelection?: boolean;
	onSelection?: (id: string) => {};
}

const SwipeItemSelectionList: React.FC<SwipeItemSelectionListProps> = React.forwardRef(
	(
		{
			data,
			radioButton = false,
			multiselect = false,
			leftSelection = false,
			rightSelection = false,
			onSelection = () => {},
			...props
		},
		ref: Ref<BottomSheet>
	) => {
		const [selectedElementId, setSelectedElementId] = useState<string>('');
		const [selectedElementsIds, setSelectedElementsIds] = useState<string[]>([]);

		if (!data || !data.length) {
			return null;
		}

		const checkIfElementIsSelected = (id: string, isElementSelected: boolean) => {
			if (isElementSelected) {
				return multiselect
					? setSelectedElementsIds(
							(prevState) => prevState.filter((includedId) => includedId !== id)
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  )
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
					radioButton={radioButton}
					leftSelection={leftSelection}
					rightSelection={rightSelection}
					selected={isElementSelected}
					onSelection={onSelectElement as () => {}}
					name={name}
				/>
			);
		};

		return (
			<SwipeList ref={ref} {...props}>
				{data.map((element) => renderItem(element))}
			</SwipeList>
		);
	}
);

export default SwipeItemSelectionList;
