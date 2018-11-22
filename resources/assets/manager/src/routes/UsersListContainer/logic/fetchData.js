import httpfetch from 'httpfetch.js';

export default (dataForFetch = {}, query = '', self = {}) => {
	const { userListPageLoading, userListPageSelectedRowsIDsArray } = self.props;
	
	userListPageSelectedRowsIDsArray([]);
	userListPageLoading(true);
	httpfetch('/user', 'GET', dataForFetch, query)
		.then(({ data, total = 0 }) => {
			userListPageLoading(false);
			self.setState({
				total,
				data
			})
		})
		.catch((err) => {
			const { userListPageErrorMessage } = self.props;
			userListPageErrorMessage(err.message);
			setTimeout(() => {
				userListPageErrorMessage('');
			}, 2600);

			userListPageLoading(false);
		});
}