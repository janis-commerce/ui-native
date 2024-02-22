import React from 'react';
import {View, Text} from 'react-native';
import {create} from 'react-test-renderer';
import FullsCreenMessage, {animationTypes} from './index';
import {base, primary} from '../../theme/palette';
import Icon from '../Icon';

const validChildren = (
	<View>
		<Text>Children text</Text>
	</View>
);

const validData = {
	isVisible: true,
	backgroundColor: primary.main,
	title: 'Title mock',
	subtitle: 'Subtitle mock',
	iconName: 'logo_janis',
	textsColor: base.white,
	iconColor: base.white,
	animationType: animationTypes.Fade,
	children: validChildren,
};

describe('FullScreenMessasge component', () => {
	describe('it should return null', () => {
		it('when has not backgroundColor prop or is not string', () => {
			const {toJSON} = create(<FullsCreenMessage backgroundColor={''} title={validData.title} />);
			expect(toJSON()).toBeNull();
		});

		it('when has not title prop or is not string', () => {
			const {toJSON} = create(<FullsCreenMessage backgroundColor={validData.title} title={''} />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('it should show', () => {
		it('subtitle when is string type and exist', () => {
			const {root} = create(
				<FullsCreenMessage
					isVisible={validData.isVisible}
					backgroundColor={validData.title}
					title={validData.title}
					subtitle={validData.subtitle}
					iconName={validData.iconName}
				/>
			);
			const [, TextComp] = root.findAllByType(Text);
			const {children} = TextComp.props;

			expect(children).toBe(validData.subtitle);
		});

		it('iconName when is string type and exist', () => {
			const {root} = create(
				<FullsCreenMessage
					isVisible={validData.isVisible}
					backgroundColor={validData.title}
					title={validData.title}
					subtitle={validData.subtitle}
					iconName={validData.iconName}
				/>
			);
			const [IconComp] = root.findAllByType(Icon);
			const {name} = IconComp.props;

			expect(name).toBe(validData.iconName);
		});
	});

	describe('it should render children', () => {
		it('when children prop exist', () => {
			const {root} = create(
				<FullsCreenMessage
					isVisible={validData.isVisible}
					backgroundColor={validData.title}
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
});
