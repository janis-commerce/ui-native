import {
	Alert,
	Base,
	Black,
	Env,
	Error,
	GreyScale,
	Primary,
	Success,
	Warning,
	White,
} from '../ts/interfaces/colors';

const primary: Primary = {
	main: '#2979FF',
	dark: '#1759FF',
	light: '#02BFFB',
};
const black: Black = {
	main: '#2F2F2F',
	dark: '#050505',
};
const white: White = {
	main: '#E8EAF6',
	dark: '#D0D3E3',
	light: '#F4F5FB',
};
const grey: GreyScale = {
	100: '#DDDFE2',
	200: '#D5D7DB',
	300: '#C4C6CC',
	400: '#A8AAAC',
	500: '#939598',
	600: '#747679',
	700: '#585858',
};
const base: Base = {
	white: '#fff',
	black: '#000',
};
const success: Success = {
	main: '#1DB779',
	dark: '#109D59',
};
const error: Error = {
	main: '#FF4343',
	dark: '#FF2A2A',
};
const warning: Warning = {
	main: '#FF8D10',
	dark: '#FF6E08',
};
const alert: Alert = {
	main: '#FFCE17',
	dark: '#FFBA0C',
};
const environment: Env = {
	qa: '#1DB779',
	beta: '#F13B70',
};

export {primary, black, white, grey, base, success, error, warning, alert, environment};
