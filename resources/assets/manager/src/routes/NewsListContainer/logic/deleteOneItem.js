import httpfetch from 'httpfetch.js';

export default (self, id = 0) => {
	const { newsListPageLoading, newsListPageErrorMessage } = self.props;

    newsListPageLoading(true);
	return httpfetch('/news/'+ id, 'DELETE')
		.then(() => {
			newsListPageLoading(false);
			self.setState({
                prepareDeleteRowID: 0,
			});
		})
		.catch((err) => {
            newsListPageLoading(false);
            newsListPageErrorMessage(err.message);

            self.setState({
				prepareDeleteRowID: 0
			});
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

		});
}