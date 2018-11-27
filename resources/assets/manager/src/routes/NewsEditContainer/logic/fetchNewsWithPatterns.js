import httpfetch from 'httpfetch.js';

export default (self = {}) => {

    return httpfetch('/news', 'GET', {withPatterns: 1})
        .then((withPatterns) => {
            self.setState({
                withPatterns
            })
        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);
        });
}