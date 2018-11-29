import httpfetch from 'httpfetch.js';

export default (self, id, data) => {


    return httpfetch('/rss/' + id, 'PUT', data)
        .then(() => {

        })
        .catch((err) => {

        });
}