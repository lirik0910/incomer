import httpfetch from 'httpfetch.js';

export default (self = {}) => {

    return httpfetch('/tags', 'GET', {limit: 1000})
        .then(({data}) => {
            self.setState({tags: data});
        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });

}