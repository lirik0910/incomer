import httpfetch from 'httpfetch.js';

export default (self, id = 0) => {
	const { newsListPageLoading, newsListPageErrorMessage } = self.props;

	return httpfetch('/news/trash/'+ id, 'DELETE')
		.then(() => {
			newsListPageLoading(false);
			self.setState({
                prepareDeleteForeverRowID: 0,
			});
		})
		.catch((err) => {

			self.setState({
				prepareDeleteForeverRowID: 0
			});

		});
}