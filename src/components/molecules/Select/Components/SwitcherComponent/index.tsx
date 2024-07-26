import React, {FC} from 'react';
import {DropdownMeasures, VariantOptions} from '../../';
import Dropdown from '../Dropdown';
import Modal from '../Modal';

interface SwitcherProps {
	show: boolean;
	isMulti: boolean;
	variant: VariantOptions;
	measures: DropdownMeasures;
	children: React.Component | React.ReactNode;
	modalAcceptText: string;
	setShow: (isShowed: boolean) => void;
}

const components = {
	Dropdown,
	Modal,
};

const SwitcherComponent: FC<SwitcherProps> = (props) => components[props?.variant](props);

export default SwitcherComponent;
