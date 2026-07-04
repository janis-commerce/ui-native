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
	Palette,
} from '../ts/interfaces/colors';
import {colors} from './colors';

/** @deprecated Usar `colors.primary.blue` (light es en realidad `colors.status.lightBlue.normal`). */
const primary: Primary = {
	main: colors.primary.blue.normal,
	dark: colors.primary.blue.pressed,
	light: colors.status.lightBlue.normal,
};

/** @deprecated Usar `colors.secondary.black`. */
const black: Black = {
	main: colors.secondary.black.normal,
	dark: colors.secondary.black.pressed,
	shadow: '#00000096',
	semiTransparent: '#0000001a',
};

/** @deprecated Es en realidad `colors.secondary.grey` (no un blanco). */
const white: White = {
	main: colors.secondary.grey.normal,
	dark: colors.secondary.grey.pressed,
	light: colors.secondary.grey.hover,
	semiTransparent: '#ffffffbf',
};

/** @deprecated Usar `colors.greyScale` (100–700 equivalen a 02–08 de la escala nueva). */
const grey: GreyScale = {
	100: colors.greyScale['02'],
	200: colors.greyScale['03'],
	300: colors.greyScale['04'],
	400: colors.greyScale['05'],
	500: colors.greyScale['06'],
	600: colors.greyScale['07'],
	700: colors.greyScale['08'],
};

/** @deprecated Usar `colors.greyScale.white` / un negro puro no existe como token del design system. */
const base: Base = {
	white: '#fff',
	black: '#000',
};

/** @deprecated Usar `colors.status.green`. */
const success: Success = {
	main: colors.status.green.normal,
	dark: colors.status.green.pressed,
};

/** @deprecated Usar `colors.status.red`. */
const error: Error = {
	main: colors.status.red.normal,
	dark: colors.status.red.pressed,
};

/** @deprecated Usar `colors.status.orange`. */
const warning: Warning = {
	main: colors.status.orange.normal,
	dark: colors.status.orange.pressed,
};

/** @deprecated Usar `colors.status.yellow`. */
const alert: Alert = {
	main: colors.status.yellow.normal,
	dark: colors.status.yellow.pressed,
};

/** @deprecated No es un token del design system; definir en la app si hace falta. */
const environment: Env = {
	qa: colors.status.green.normal,
	beta: colors.status.pink.normal,
};

/** @deprecated Usar `colors` (tokens del design system). Mismos valores hex: migrar no cambia lo visual. */
const palette: Palette = {
	primary,
	black,
	white,
	grey,
	base,
	success,
	error,
	warning,
	alert,
	environment,
};

export {primary, black, white, grey, base, success, error, warning, alert, environment, palette};
