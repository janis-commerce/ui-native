import React from 'react';
import {create} from 'react-test-renderer';
import {Stop} from 'react-native-svg';
import {secondaryBlue} from 'theme/palette';
import GradientBackground from './index';

describe('GradientBackground component', () => {
	it('fades vertically from the secondary blue to its light shade', () => {
		const {root} = create(<GradientBackground />);
		const stops = root.findAllByType(Stop).map(({props}) => [props.offset, props.stopColor]);
		expect(stops).toEqual([
			['0', secondaryBlue.main],
			['0.8', secondaryBlue.light],
		]);
	});
});
