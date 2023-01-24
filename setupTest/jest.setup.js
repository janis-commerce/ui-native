/* eslint-disable no-undef */
jest.mock('react', () => {
	const react = jest.requireActual('react');
	return {
		...react,
		useState: jest.fn(react.useState),
		useEffect: jest.fn(react.useEffect),
	};
});
