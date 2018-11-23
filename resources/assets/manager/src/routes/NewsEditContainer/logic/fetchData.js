import httpfetch from 'httpfetch.js';

export default (id = false, self = {}) => {
    if (id) {

        return httpfetch('/news/' + id, 'GET')
            .then((data) => {
                console.log(data);
                self.setState({data});
            })
            .catch((err) => {
                console.log(err);

            });
    }
}