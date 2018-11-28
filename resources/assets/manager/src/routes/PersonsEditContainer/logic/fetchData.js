import httpfetch from 'httpfetch.js';

export default (id = false, self = {}) => {
    if (id) {

        return httpfetch('/news/' + id, 'GET')
            .then((data) => {
                console.log(data);
                self.setState({data});
            })
            .catch((err) => {
                const { newsListPageErrorMessage } = self.props;
                newsListPageErrorMessage(err.message);
                setTimeout(() => {
                    newsListPageErrorMessage('');
                }, 2600);

            });
    }
}