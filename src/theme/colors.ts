/**
 * Tokens de color del design system, espejo 1:1 de los published styles de Figma
 * (grupo → familia → estado). La semántica (success, error, etc.) la define cada
 * componente mapeando sobre estos tokens, no la paleta.
 */
const colors = {
	primary: {
		blue: {
			normal: '#2979FF',
			hover: '#5393FF',
			pressed: '#1759FF',
		},
		midnightBlue: {
			normal: '#001233',
			hover: '#33415C',
			pressed: '#000713',
		},
	},
	secondary: {
		black: {
			normal: '#2F2F2F',
			hover: '#585858',
			pressed: '#050505',
		},
		grey: {
			normal: '#E8EAF6',
			hover: '#F4F5FB',
			pressed: '#D0D3E3',
		},
		blue: {
			normal: '#E4ECFA',
			hover: '#F1F5FD',
			pressed: '#D2DFF5',
		},
	},
	status: {
		green: {
			normal: '#1DB779',
			hover: '#4AC593',
			pressed: '#109D59',
			light: '#BBE9D6',
		},
		lightGreen: {
			normal: '#74C655',
			hover: '#8FD177',
			pressed: '#54B039',
			light: '#DEFFD1',
		},
		red: {
			normal: '#FF4343',
			hover: '#FF6868',
			pressed: '#FF2A2A',
			light: '#FFD9D9',
		},
		orange: {
			normal: '#FF8D10',
			hover: '#FFA33F',
			pressed: '#FF6E08',
			light: '#FFEAD3',
		},
		yellow: {
			normal: '#FFCE17',
			hover: '#FFD745',
			pressed: '#FFBA0C',
			light: '#FFF3C6',
		},
		aqua: {
			normal: '#08C4C4',
			hover: '#39CFCF',
			pressed: '#04ADAD',
			light: '#CFFFFF',
		},
		lightBlue: {
			normal: '#02BFFB',
			hover: '#6ED2FC',
			pressed: '#00A6FA',
			light: '#DEF5FE',
		},
		violet: {
			normal: '#A06CEC',
			hover: '#BB98F1',
			pressed: '#8848E7',
			light: '#F0E6FB',
		},
		pink: {
			normal: '#F13B70',
			hover: '#F3628C',
			pressed: '#EB2450',
			light: '#EFDEE3',
		},
	},
	greyScale: {
		'00': '#F7F7F8',
		'01': '#EAEBED',
		'02': '#DDDFE2',
		'03': '#D5D7DB',
		'04': '#C4C6CC',
		'05': '#A8AAAC',
		'06': '#939598',
		'07': '#747679',
		'08': '#585858',
		white: '#FFFFFF',
	},
} as const;

export type Colors = typeof colors;

export {colors};
