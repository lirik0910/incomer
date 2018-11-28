import httpfetch from 'httpfetch.js';

export default (self, id ) => {
     return httpfetch('/person/restore/' + id, 'PUT')
            .then(({ data, total = 0 }) => {
            })
            .catch((err) => {
            });
}