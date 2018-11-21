export default (resource = '', method = 'GET', data = {}) => {
    method = method.toUpperCase();

    const apiUrl = 'http://localhost/api';

    let body,
        content = 'multipart/form-data',
        query = [],
        queryString = '';


    if (Object.keys(data).length > 0) {
        if (method === 'GET' || method === 'DELETE') {
            for (let key in data) {
                query.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
            }
            queryString = query.join('&');
        }
        if (method === 'POST') {
            if (data instanceof FormData) {
                body = data;
            } else {
                body = JSON.stringify(data);
                content = 'application/json';
            }
        }
        if (method === 'PUT') {
            if (data instanceof FormData) {
                method = 'POST';
                data.append('_method', 'put');
                body = data;
            } else {
                body = JSON.stringify(data);
                content = 'application/json';
            }
        }
    }


    return fetch(apiUrl + resource + (queryString ? '?' + queryString : ''),
        {
            body,
            method,
            credentials: 'include',
            withCredentials: true,
            headers: {
                'Content-Type': content,
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),

                // 'X-CSRF-Token': document.getElementById('csrf_token').content,
            },
        })
        .then(async (res) => {
            if (res.ok) {
                return await res.json();
            } else {
                if (res.status === 401) {
                    window.location.href = '/manager/login';
                    return;
                }
                throw await res.json();
            }
        })
}
