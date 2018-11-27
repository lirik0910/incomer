import httpfetch from 'httpfetch.js';

export default (data = {}, self = {}) => {


    httpfetch('/login', 'POST', data)
        .then((data) => {
            localStorage.setItem('access_token', data.access_token);
            self.props.history.push('/news');
        })
        .catch((err) => {
            console.log(err);

        });
}