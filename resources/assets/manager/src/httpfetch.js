

export default (resource = '', method = 'GET', body = {}, query = '') => {
	let data,
		index = 0;
	if ((index = Object.keys(body).length) > 0) {
		if (method === 'GET' || method === 'get') {
			for (let i in body) {
				query += i +'='+ body[i] + (index > 1 ? '&' : '');
				index--;
			}
		}
		else {
			data = 	new FormData();
			for (let i in body) {
				data.append(i, body[i]);
			}
		}
	}

	return fetch(resource + (query ? '?'+ query : ''), {
		credentials: 'include',
		method,
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
			'X-Requested-With': 'XMLHttpRequest',
			// 'X-CSRF-Token': document.getElementById('csrf_token').content
		},
		...data ? { body: data } : {}
	})
	.then((r) => r.json());
}