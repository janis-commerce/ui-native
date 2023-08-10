import type {SvgProps} from 'react-native-svg';
import {ViewProps} from 'react-native';

export const svgsNames = [
	'empty-illustration',
	'empty-list-illustration',
	'janis-logo',
	'janis-logo-color',
	'login-illustration',
	'no-notifications',
] as const;

type names = (typeof svgsNames)[number];

export interface Isvg extends SvgProps, ViewProps {
	name?: names;
	width?: number;
	height?: number;
	size?: number;
	xmlns?: string;
}
