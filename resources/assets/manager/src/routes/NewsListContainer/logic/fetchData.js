import httpfetch from 'httpfetch.js';

export default (dataForFetch = {}, query = '', self = {}) => {
	const { newsListPageLoading, newsListPageSelectedRowsIDsArray } = self.props;
	
	// newsListPageLoading(true);
	httpfetch('/news', 'GET', dataForFetch, query)
		.then(({ data, total = 0 }) => {
			// newsListPageLoading(false);
			self.setState({
				total,
				data
			})
		})
		.catch((err) => {
			const { newsListPageErrorMessage } = self.props;
			newsListPageErrorMessage(err.message);
			setTimeout(() => {
				newsListPageErrorMessage('');
			}, 2600);

			// newsListPageLoading(false);
		});
}