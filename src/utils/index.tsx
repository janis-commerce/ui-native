export const isObject = (obj: Object) => !!(obj && obj.constructor === Object);

export const isDevEnv = () => {
	const {env} = process;
	const {NODE_ENV} = env;
	return NODE_ENV !== 'production';
};

export const isArray = (arr: any[]) => !!(arr instanceof Array);
