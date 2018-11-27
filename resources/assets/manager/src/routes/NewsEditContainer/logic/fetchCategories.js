import httpfetch from 'httpfetch.js';

export default (self = {}) => {

    return httpfetch('/category', 'GET')
        .then((categories) => {
            self.setState({categories});
        })
        .catch((err) => {
            console.log(err);

        });

}