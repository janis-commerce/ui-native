/**
 * Checks if the placeholder provided is single or compound and returns either the first two letters,
 * or the initials of the two first words.
 * @param {string} placeholder
 * @return {string} An array with the first two leters of the placeholder, or initials of the
 * first two words in uppercase
 * @example formatPlaceholder('Juan') // returns 'JU'
 * @example formatPlaceholder('Juan Perez') // returns 'JP'
 * @example formatPlaceholder('Juan Perez Rodriguez') // returns 'JP'
 * @example formatPlaceholder('') // returns ''
 */
export const formatPlaceholder = (placeholder: string = ''): string => {
	const names: string[] = placeholder.split(' ');
	if (names.length > 1) {
		const firstLetter = names[0].substring(0, 1).toUpperCase();
		const secondLetter = names[1].substring(0, 1).toUpperCase();
		return `${firstLetter}${secondLetter}`;
	}
	return placeholder.substring(0, 2).toUpperCase();
};
