import palette from 'theme/palette';

const THRESHOLD = {
	warning: 25,
	alert: 50,
	success: 75,
};

/**
 * @name getPercentage
 * @description return the percentage form a partial value and a total value,
 * rounded to the nearest integer
 * @param {number} value the partial value
 * @param {number} totalValue the total value
 * @returns {number|null} the percentage in the range 0-100, or null if receives an invalid param
 * @example getPercentage(45,100) // 45
 * @example getPercentage(22,150) // 15
 */

export const getPercentage = (value: number, totalValue: number): number => {
	if (typeof totalValue !== 'number' || typeof value !== 'number' || totalValue < 0 || value < 0) {
		return 0;
	}

	if (value >= totalValue) {
		return totalValue;
	}

	return Math.round(100 * (value / totalValue));
};

/**
 * @name getBarColor
 * @description Devuelve una función que recibe un objeto con un campo "percentage" y devuelve el color de la barra correcto
 * considerando los diferentes umbrales (25, 50 y 75).
 * @returns {Function} - Una función que recibe un objeto con un campo "percentage" y devuelve el color de la barra correcto.
 * @example getBarColor(30) // '#FF8D10' (naranja)
 * @example getBarColor(90) // '#1DB779' (verde)
 */

export const getBarColor = (percentage: number): string => {
	if (typeof percentage !== 'number') {
		return palette.secondary.grey.normal;
	}

	let barColor: string = '';

	if (percentage >= THRESHOLD.success) {
		barColor = palette.status.green.normal;
	} else if (percentage >= THRESHOLD.alert) {
		barColor = palette.status.yellow.normal;
	} else if (percentage >= THRESHOLD.warning) {
		barColor = palette.status.orange.normal;
	} else {
		barColor = palette.status.red.normal;
	}

	return barColor;
};
