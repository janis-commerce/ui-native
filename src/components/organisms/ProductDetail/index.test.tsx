import React from 'react';
import ProductDetail from './index';
import {create} from 'react-test-renderer';
import BaseDetail from 'molecules/BaseDetail';
import Modal from 'atoms/Modal';
import SwipeUp from 'atoms/SwipeUp';

describe('ProductDetail component', () => {
	it('should render modal BaseDetail components', () => {
		const ProductDetailComponent = create(
			<ProductDetail
				componentType="modal"
				image="https://avatars.githubusercontent.com/u/49998302?s=200&v=4"
				refId="4AR6353-010"
				productName="Campera de Hombre H&G Softshell Estampado PRINT Gris Melange Talle XXL"
				brand="H&G"
			/>
		).root;

		const BaseDetailComp = ProductDetailComponent.findByType(BaseDetail);
		const ModalComp = ProductDetailComponent.findByType(Modal);

		expect(ModalComp).toBeTruthy();
		expect(BaseDetailComp).toBeTruthy();
	});

	it('should render swipe BaseDetail components', () => {
		const ProductDetailComponent = create(
			<ProductDetail
				componentType="swipe"
				image="https://avatars.githubusercontent.com/u/49998302?s=200&v=4"
				refId="4AR6353-010"
				productName="Campera de Hombre H&G Softshell Estampado PRINT Gris Melange Talle XXL"
				brand="H&G">
				<></>
			</ProductDetail>
		).root;

		const BaseDetailComp = ProductDetailComponent.findByType(BaseDetail);
		const SwipeUpComp = ProductDetailComponent.findByType(SwipeUp);

		expect(SwipeUpComp).toBeTruthy();
		expect(BaseDetailComp).toBeTruthy();
	});
});
