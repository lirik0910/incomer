import httpfetch from 'httpfetch.js';

export default (self, id, data) => {

    return httpfetch('/news/' + id, 'PUT', data)
        .then((data) => {
            self.setState({data})
        })
        .catch((err) => {
            self.setState({
                displayAlert: data.message,
            });
        });
}