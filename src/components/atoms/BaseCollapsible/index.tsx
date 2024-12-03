import React, {useState} from 'react';
import {Pressable} from 'react-native';
import Accordion, {AccordionProps} from 'react-native-collapsible/Accordion';
import {isArray} from 'utils/index';

export interface BaseCollapsibleProps<T> extends AccordionProps<T> {
	onChangeCallback?: (argument?: T) => void;
}

const BaseCollapsible = <T,>({
	activeSections,
	renderHeader,
	renderContent,
	sections,
	onChangeCallback,
	duration = 1000,
	touchableComponent = Pressable,
	...props
}: BaseCollapsibleProps<T>) => {
	const isValidCallback = !!onChangeCallback && typeof onChangeCallback === 'function';
	const isValidSection = isArray(activeSections) && !!activeSections.length;
	const validActiveSections = isValidSection ? activeSections : [];

	const [openSections, setOpenSections] = useState(validActiveSections);

	const handleOnChange = (index: number[]) => {
		if (isValidCallback) {
			onChangeCallback();
		}

		setOpenSections(index);
	};

	return (
		<Accordion
			activeSections={openSections}
			sections={sections}
			renderHeader={renderHeader}
			renderContent={renderContent}
			touchableComponent={touchableComponent}
			duration={duration}
			{...props}
			onChange={handleOnChange}
		/>
	);
};

export default BaseCollapsible;
