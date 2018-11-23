import httpfetch from 'httpfetch.js';

export default (self, id = 0) => {
	const { newsListPageLoading, newsListPageErrorMessage } = self.props;

	return httpfetch('/news/'+ id, 'DELETE')
		.then(() => {
			newsListPageLoading(false);
			self.setState({
                prepareDeleteRowID: 0,
			});
		})
		.catch((err) => {

			self.setState({
				prepareDeleteRowID: 0
			});

		});
}