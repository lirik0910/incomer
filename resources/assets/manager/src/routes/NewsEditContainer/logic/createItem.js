import httpfetch from 'httpfetch.js';

export default (self, data) => {
    console.log(self.props);

    data.tags = data.tags && data.tags.map((i) => i.id);
    // data.tags = JSON.stringify(data.tags);

    return httpfetch('/news', 'POST', data)
        .then((data) => {
            self.setState({data})
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage('Успешно добавлено');
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);
            self.props.history.push('/news/'+data.id);

        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });
}