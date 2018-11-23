import httpfetch from 'httpfetch.js';

export default (self = {}) => {

    return httpfetch('/section', 'GET')
        .then((sections) => {
            self.setState({sections});
        })
        .catch((err) => {
            console.log(err);

        });

}