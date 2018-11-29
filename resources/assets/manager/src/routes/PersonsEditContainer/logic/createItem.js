import httpfetch from 'httpfetch.js';

export default (self, data) => {

    data.fields = JSON.stringify(data.fields);


    return httpfetch('/person', 'POST', data)
        .then((data) => {
            self.setState({data})
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage('Успешно добавлено');
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);
            self.props.history.push('/persons/'+ data.type_id +'/'+data.id);

        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });
}