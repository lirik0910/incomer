import httpfetch from 'httpfetch.js';

export default (self, id, data) => {


    data.fields = JSON.stringify(data.fields);

    return httpfetch('/person/' + id, 'PUT', data)
        .then((data) => {
            self.setState({data})
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage('Успешно обновлено');
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);
        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });
}