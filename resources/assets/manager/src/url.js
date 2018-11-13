
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

const getItemFromQueryProps = (name = '') => {
	const props = defineQueryProps();

	return props['name'] || '';
}

const setItemToQueryString = (title = '', url = '', name, value) => {
	name = encodeURI(name); 
	value = encodeURI(value);

	const object = {};
	let kvp = document.location.search
		.substr(1)
		.split('&');

	let i = kvp.length;
	let x;

	while(i--) {
		x = kvp[i].split('=');
		if (x[0] === name) {
			x[1] = value;
			kvp[i] = x.join('=');

			object[x[0]] = x[1];
			break;
		}
	}

	if (i < 0) {
		object[name] = value;
		kvp[kvp.length] = [name, value].join('=');
	}
	window.history.pushState(
		{ ...window.history.state, [name]: value }, 
		title, 
		url +'?'+ kvp.join('&'));
}

const setObjectToQueryString = (title = '', url = '', object = {}) => {
	let kvp = [];
	for (let name in object) {
		let i = kvp.length;
		let x;

		while(i--) {
			x = kvp[i].split('=');
			if (x[0] === name) {
				x[1] = object[name];
				kvp[i] = x.join('=');
				break;
			}
		}
		if (i < 0) {
			kvp[kvp.length] = [name, object[name]].join('=');
		}
	}
	window.history.pushState({ ...object }, title, url +'?'+ kvp.join('&'));
}

export {
	defineQueryProps,
	getItemFromQueryProps,
	setItemToQueryString,
	setObjectToQueryString
};