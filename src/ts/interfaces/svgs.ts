import type {SvgProps} from 'react-native-svg';
import {ViewProps} from 'react-native';

export const svgsNames = [
	'empty-illustration',
	'empty-list-illustration',
	'janis-logo',
	'janis-logo-color',
	'login-illustration',
	'no-notifications',
	'new-janis-logo',
] as const;

export type Names = (typeof svgsNames)[number];

export interface Isvg extends SvgProps, ViewProps {
	name?: Names;
	width?: number;
	height?: number;
	size?: number;
	xmlns?: string;
}
