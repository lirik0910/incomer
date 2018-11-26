import httpfetch from 'httpfetch.js';

export default (self = {}) => {

    return httpfetch('/section', 'GET')
        .then((sections) => {
            self.setState({sections});
        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });

}