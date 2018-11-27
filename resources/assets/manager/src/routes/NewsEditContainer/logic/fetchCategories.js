import httpfetch from 'httpfetch.js';

export default (self = {}) => {

    return httpfetch('/category', 'GET')
        .then((categories) => {
            self.setState({categories});
        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });

}