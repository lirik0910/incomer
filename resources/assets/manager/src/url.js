
const defineQueryProps = () => {
	const outputData = {};

	window.location.search
		.substr(1)
		.split('&')
		.forEach((item) => {
			const prop = item.split('=');
			outputData[prop[0]] = prop[1];
		});

	return outputData;
}

export {
	defineQueryProps
};