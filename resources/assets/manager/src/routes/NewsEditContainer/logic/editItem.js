import httpfetch from 'httpfetch.js';

export default (self, id, data) => {

    console.log(data);

    data.tags = data.tags && data.tags.map((i) => i.id);

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