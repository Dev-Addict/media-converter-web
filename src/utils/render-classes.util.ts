interface Classes {
	[key: string]: boolean | undefined;
}

export const renderClasses = (defaultClass = '', classes = {} as Classes) => {
	let result = defaultClass.trim();

	for (const [className, condition] of Object.entries(classes)) {
		if (condition) result += ` ${className}`;
	}

	return result;
};
