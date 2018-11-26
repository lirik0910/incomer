import httpfetch from 'httpfetch.js';

export default (self, id = 0) => {
	const { newsListPageLoading, newsListPageErrorMessage } = self.props;

    newsListPageLoading(true);
	return httpfetch('/news/trash/'+ id, 'DELETE')
		.then(() => {
			newsListPageLoading(false);
			self.setState({
                prepareDeleteForeverRowID: 0,
			});
		})
		.catch((err) => {
            newsListPageLoading(false);
            newsListPageErrorMessage(err.message);

			self.setState({
				prepareDeleteForeverRowID: 0
			});
            setTimeout(() => {
                newsListPageErrorMessage(err.message);
            }, 2600);

		});
}