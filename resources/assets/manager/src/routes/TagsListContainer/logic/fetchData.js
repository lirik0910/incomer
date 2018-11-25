import httpfetch from 'httpfetch.js';

export default (dataForFetch = {}, query = '', self = {}) => {
	const { tagsListPageLoading, tagsListPageSelectedRowsIDsArray } = self.props;
	
	tagsListPageSelectedRowsIDsArray([]);
	tagsListPageLoading(true);
	httpfetch('/tags', 'GET', dataForFetch, query)
		.then(({ data, total = 0 }) => {
			tagsListPageLoading(false);
			self.setState({
				total,
				data
			})
		})
		.catch((err) => {
			const { tagsListPageErrorMessage } = self.props;
			tagsListPageErrorMessage(err.message);
			setTimeout(() => {
				tagsListPageErrorMessage('');
			}, 2600);

			tagsListPageLoading(false);
		});
}