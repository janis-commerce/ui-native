import React from 'react';
import {forwardRef} from 'react';
import {BaseModalProps} from '../../types';
import Modal, {ModalMethods} from 'atoms/Modal';
import {ScrollView} from 'react-native';

const BaseDetailModal = forwardRef<ModalMethods, BaseModalProps>((props, ref) => {
	const {children, scrollProps = {}, ...rest} = props;

	return (
		<Modal ref={ref} {...rest}>
			<ScrollView showsVerticalScrollIndicator={false} {...scrollProps}>
				{children}
			</ScrollView>
		</Modal>
	);
});

export default BaseDetailModal;
