import React from 'react';
import {create} from 'react-test-renderer';
import {horizontalScale, scaledForDevice, verticalScale} from 'scale';
import {colors} from 'theme/colors';
import BaseButton from 'atoms/BaseButton';
import Icon from 'atoms/Icon';
import Typography from 'atoms/Typography';
import Button from './';

const hScale = (size: number) => scaledForDevice(size, horizontalScale);
const vScale = (size: number) => scaledForDevice(size, verticalScale);

describe('Button', () => {
	it('renders null without value and icon', () => {
		expect(create(<Button />).toJSON()).toBeNull();
		expect(create(<Button value="" />).toJSON()).toBeNull();
	});

	it('text button: renders the label with the design system typography and no icon', () => {
		const {root} = create(<Button value="Confirm" />);
		const typography = root.findByType(Typography);

		expect(typography.props.children).toBe('Confirm');
		expect(typography.props.type).toBe('label');
		expect(typography.props.size).toBe('large');
		expect(typography.props.color).toBe(colors.greyScale.white);
		expect(root.findAllByType(Icon)).toHaveLength(0);
		expect(root.findByType(BaseButton).props.borderRadius).toBe(48);
	});

	it('small button: medium label and 36 radius', () => {
		const {root} = create(<Button value="Confirm" size="small" />);

		expect(root.findByType(Typography).props.size).toBe('medium');
		expect(root.findByType(BaseButton).props.borderRadius).toBe(36);
	});

	it('empty value with icon derives an icon-only button', () => {
		const {root} = create(<Button value="" icon="scanner" />);

		expect(root.findAllByType(Typography)).toHaveLength(0);
		expect(root.findByType(Icon).props.name).toBe('scanner');
	});

	it('icon and value: same content color, 24px icon and gap margin before the label', () => {
		const {root} = create(<Button value="Scan" icon="scanner" />);
		const icon = root.findByType(Icon);
		const typography = root.findByType(Typography);
		const children = root.findByType(BaseButton).props.children;

		expect(icon.props.color).toBe(typography.props.color);
		expect(icon.props.size).toBe(24);
		expect(icon.props.style).toEqual({marginRight: hScale(8)});
		expect(children[0].type).toBe(Icon);
		expect(children[2]).toBe(false);
	});

	it('iconPosition right: icon after the label with mirrored gap margin', () => {
		const {root} = create(<Button value="Scan" icon="scanner" iconPosition="right" />);
		const children = root.findByType(BaseButton).props.children;

		expect(root.findByType(Icon).props.style).toEqual({marginLeft: hScale(8)});
		expect(children[0]).toBe(false);
		expect(children[2].type).toBe(Icon);
	});

	it('icon-only circle keeps a 1:1 container', () => {
		const {root} = create(<Button icon="scanner" shape="circle" size="small" />);
		const [container] = root.findByType(BaseButton).props.style;

		expect(container.width).toBe(vScale(36));
		expect(root.findByType(Icon).props.size).toBe(24);
	});

	it('disabled: cuts the press feedback and paints the disabled palette', () => {
		const {root} = create(<Button value="Confirm" disabled />);
		const baseButton = root.findByType(BaseButton);
		const [container] = baseButton.props.style;

		expect(baseButton.props.disabled).toBe(true);
		expect(baseButton.props.pressedStyle).toBe(false);
		expect(container.backgroundColor).toBe(colors.greyScale['03']);
	});

	it('enabled: presses into the family pressed token', () => {
		const {root} = create(<Button value="Confirm" />);

		expect(root.findByType(BaseButton).props.pressedStyle).toEqual({
			backgroundColor: colors.primary.blue.pressed,
		});
	});

	it.each([
		['contained', colors.status.green.normal, undefined],
		['outlined', 'transparent', 1],
		['cleaned', 'transparent', undefined],
	] as const)(
		'variant %s applies its container palette',
		(variant, backgroundColor, borderWidth) => {
			const {root} = create(<Button value="Confirm" variant={variant} color="success" />);
			const [container] = root.findByType(BaseButton).props.style;

			expect(container.backgroundColor).toBe(backgroundColor);
			expect(container.borderWidth).toBe(borderWidth);
		}
	);

	it('merges the consumer style after the container', () => {
		const {root} = create(<Button value="Confirm" style={{flex: 1}} />);
		const style = root.findByType(BaseButton).props.style;

		expect(style[1]).toEqual({flex: 1});
	});

	it('spreads pressable props through to BaseButton', () => {
		const onPress = jest.fn();
		const {root} = create(<Button value="Confirm" onPress={onPress} testID="confirm-button" />);
		const baseButton = root.findByType(BaseButton);

		expect(baseButton.props.onPress).toBe(onPress);
		expect(baseButton.props.testID).toBe('confirm-button');
	});
});
