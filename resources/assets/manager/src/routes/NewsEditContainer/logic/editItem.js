import httpfetch from 'httpfetch.js';

export default (self, id, data) => {

    data.tags = data.tags && data.tags.map((i) => i.id);

    return httpfetch('/news/' + id, 'PUT', data)
        .then((data) => {
            self.setState({data})
        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });
}