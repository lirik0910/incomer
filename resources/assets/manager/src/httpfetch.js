export default (resource = '', method = 'GET', body = {}, query = '') => {
    let data,
        index = 0;
    if ((index = Object.keys(body).length) > 0) {
        if (method.toUpperCase() !== 'POST' ) {
            for (let i in body) {
                query += i + '=' + body[i] + (index > 1 ? '&' : '');
                index--;
            }
        }
        else {
            data = new FormData();
            for (let i in body) {
                data.append(i, body[i]);
                console.log(data);
            }
        }
    }


    return fetch('http://localhost/api' + resource + (query ? '?' + query : ''),
        {
            method,
            credentials: 'include',
            withCredentials: true,
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                // 'X-CSRF-Token': document.getElementById('csrf_token').content,
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
            ...data ? {body: data} : {}
        })
        .then(async (res) => {
            if (res.ok) {
                return res.json();
            } else {
                if(res.status === 401) window.location.href = '/manager/login';
                const error = await res.json();
                throw new Error(JSON.stringify(error));
                // return res.json();
            }
        })
}

