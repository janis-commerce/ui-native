import React, {ReactElement} from 'react';
import {StyleSheet, ViewProps, View} from 'react-native';
import BaseButton from '../BaseButton';
import {palette} from '../../theme/palette';
import {moderateScale, scaledForDevice} from '../../scale';
import {validVariants, parseButtonsStyles, buttonWrapperVariantStyles} from './utils';

interface LayoutWithBottomButtonsProps extends ViewProps {
	children: ReactElement | string;
	buttons: Array<object>;
	variant?: string;
	buttonBackgroundColor?: string;
}

const LayoutWithBottomButtons = ({
	children,
	buttons,
	variant = '',
	buttonBackgroundColor,
	...props
}: LayoutWithBottomButtonsProps) => {
	if (!children) {
		return null;
	}
	if (!(buttons instanceof Array) || !buttons.length) {
		return null;
	}

	const selectedVariant = validVariants[variant] || validVariants.default;
	const parsedButtons = parseButtonsStyles(buttons, selectedVariant);
	const validBtnBgColor = buttonBackgroundColor || palette.base.white;

	if (!(parsedButtons instanceof Array) || !parsedButtons.length) {
		return null;
	}

	const styles = StyleSheet.create({
		Container: {
			flex: 1,
			backgroundColor: 'transparent',
		},
		FullButtonsRoundedWrapper: {
			...buttonWrapperVariantStyles(selectedVariant),
			flexDirection: 'column',
			justifyContent: 'space-between',
			backgroundColor: validBtnBgColor,
			marginTop: 'auto',
		},
		TwoButtonsWrapper: {
			marginTop: scaledForDevice(8, moderateScale),
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		ButtonsWrapper: {
			...buttonWrapperVariantStyles(selectedVariant),
			flexDirection: 'row',
			justifyContent: 'space-between',
			backgroundColor: validBtnBgColor,
			marginTop: 'auto',
			flexWrap: 'wrap',
		},
	});

	const ThreeButtonsLayout = () => {
		const newBtns = [...parsedButtons];
		const fullWidthIdx = newBtns.findIndex((btn) => btn.style?.width === '100%');
		const fullWidthButton = newBtns[fullWidthIdx];
		newBtns.splice(fullWidthIdx, 1);

		return (
			<View style={[styles.Container]} {...props}>
				{children}
				<View style={[styles.FullButtonsRoundedWrapper]}>
					<BaseButton {...fullWidthButton} />
					<View style={[styles.TwoButtonsWrapper]}>
						{newBtns.map(({...buttonData}, index) => (
							<BaseButton key={index.toString()} {...buttonData} />
						))}
					</View>
				</View>
			</View>
		);
	};

	if (parsedButtons.length === 3 && selectedVariant === validVariants.rounded) {
		return ThreeButtonsLayout();
	}

	return (
		<View style={[styles.Container]} {...props}>
			{children}
			<View style={[styles.ButtonsWrapper]}>
				{parsedButtons.map(({...buttonData}, index) => (
					<BaseButton key={index.toString()} {...buttonData} />
				))}
			</View>
		</View>
	);
};

export default LayoutWithBottomButtons;
