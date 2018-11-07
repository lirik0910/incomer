

export default (resource = '', method = 'GET') => {
	return fetch(resource, {
		credentials: 'include',
		method,
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
			'X-Requested-With': 'XMLHttpRequest',
			// 'X-CSRF-Token': document.getElementById('csrf_token').content
		}
	})
	.then((r) => r.json());
}