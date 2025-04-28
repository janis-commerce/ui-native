import React from 'react';
import {create} from 'react-test-renderer';
import ProductInfo from './index';
import Image from 'atoms/Image';
import Typography from 'atoms/Typography';

describe('ProductInfo', () => {
	it('should render Image component when receive image argument', () => {
		const ProductInfoComp = create(
			<ProductInfo image="https://avatars.githubusercontent.com/u/49998302?s=200&v=4" />
		).root;

		const ImageComp = ProductInfoComp.findByType(Image);

		expect(ImageComp).toBeTruthy();
		expect(ProductInfoComp).toBeTruthy();
	});

	it('should render Typography component when receive productName argument', () => {
		const ProductInfoComp = create(
			<ProductInfo productName="Campera de Hombre H&G Softshell Estampado PRINT Gris Melange Talle XXL" />
		).root;

		const TypographyComp = ProductInfoComp.findByType(Typography);

		expect(TypographyComp).toBeTruthy();
		expect(ProductInfoComp).toBeTruthy();
	});

	it('should render Typography component when receive refId argument', () => {
		const ProductInfoComp = create(<ProductInfo refId="4AR6353-010" />).root;

		const TypographyComp = ProductInfoComp.findByType(Typography);

		expect(TypographyComp).toBeTruthy();
		expect(ProductInfoComp).toBeTruthy();
	});

	it('should render Typography component when receive brand argument', () => {
		const ProductInfoComp = create(<ProductInfo brand="Janis" />).root;

		const TypographyComp = ProductInfoComp.findByType(Typography);

		expect(TypographyComp).toBeTruthy();
		expect(ProductInfoComp).toBeTruthy();
	});
});
