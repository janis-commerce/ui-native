export const isObject = (obj: Object) => !!(obj && obj.constructor === Object);

export const isArray = (arr: any[]) => !!(arr instanceof Array);
