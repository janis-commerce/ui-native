import React from 'react';
import {View, Text, Modal} from 'react-native';
import {create} from 'react-test-renderer';
import FullsCreenMessage, {animationTypes} from './index';
import {base, primary} from '../../theme/palette';
import Icon from '../Icon';

const spyUseEffect = jest.spyOn(React, 'useEffect');
const spyUseState = jest.spyOn(React, 'useState');

const validChildren = (
	<View>
		<Text>Children text</Text>
	</View>
);

const setVisible = jest.fn();
const onEndDurarionMock = jest.fn();

const validData = {
	isVisible: true,
	backgroundColor: primary.main,
	title: 'Title mock',
	subtitle: 'Subtitle mock',
	iconName: 'logo_janis',
	textsColor: base.white,
	iconColor: base.white,
	animationType: animationTypes.Fade,
	duration: 1500,
	onEndDuration: onEndDurarionMock,
	children: validChildren,
};

describe('FullScreenMessasge component', () => {
	afterEach(() => {
		jest.useFakeTimers();
		spyUseEffect.mockImplementation((f) => f());
		spyUseState.mockReturnValueOnce([true, setVisible]);
	});

	beforeEach(() => {
		jest.clearAllMocks();
		jest.clearAllTimers();
	});

	describe('it should hide', () => {
		it('because isVisible is false', () => {
			const {root} = create(<FullsCreenMessage />);
			const ModalComp = root.findByType(Modal);
			const {visible} = ModalComp.props;

			expect(visible).toBeFalsy();
		});
	});

	describe('it should show', () => {
		it('title when is string type and exist', () => {
			const {root} = create(
				<FullsCreenMessage isVisible={validData.isVisible} title={validData.title} />
			);
			const TextComp = root.findByType(Text);
			const {children} = TextComp.props;

			expect(children).toBe(validData.title);
		});

		it('subtitle when is string type and exist', () => {
			const {root} = create(
				<FullsCreenMessage isVisible={validData.isVisible} subtitle={validData.subtitle} />
			);
			const TextComp = root.findByType(Text);
			const {children} = TextComp.props;

			expect(children).toBe(validData.subtitle);
		});

		it('iconName when is string type and exist', () => {
			const {root} = create(
				<FullsCreenMessage isVisible={validData.isVisible} iconName={validData.iconName} />
			);
			const IconComp = root.findByType(Icon);
			const {name} = IconComp.props;

			expect(name).toBe(validData.iconName);
		});
	});

	describe('it should render children', () => {
		it('when children prop exist', () => {
			const {root} = create(
				<FullsCreenMessage
					isVisible={validData.isVisible}
					title={validData.title}
					subtitle={validData.subtitle}
					iconName={validData.iconName}
					textsColor={validData.textsColor}
					iconColor={validData.iconColor}
					animationType={validData.animationType}
					children={validData.children}
				/>
			);
			const [TextComp] = root.findAllByType(Text);
			const {children} = TextComp.props;

			expect(children).toBe('Children text');
		});
	});

	describe('it should show modal', () => {
		it('timeout update visible state and update callback', () => {
			jest.useFakeTimers();
			spyUseState.mockReturnValueOnce([true, setVisible]);
			create(
				<FullsCreenMessage
					isVisible={validData.isVisible}
					title={validData.title}
					subtitle={validData.subtitle}
					iconName={validData.iconName}
					textsColor={validData.textsColor}
					iconColor={validData.iconColor}
					animationType={validData.animationType}
					duration={validData.duration}
					children={validData.children}
				/>
			);
			jest.advanceTimersByTime(validData.duration);

			expect(setVisible).toHaveBeenCalledWith(false);
		});
	});
});
