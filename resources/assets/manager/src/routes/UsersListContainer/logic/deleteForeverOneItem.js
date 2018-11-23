import httpfetch from 'httpfetch.js';

export default (self, id = 0) => {
	const { userListPageLoading, userListPageErrorMessage } = self.props;

	userListPageLoading(true);
	return httpfetch('/user/trash/'+ id, 'DELETE')
		.then(() => {
			userListPageLoading(false);
			self.setState({
                prepareDeleteForeverRowID: 0,
			});
		})
		.catch((err) => {
			userListPageLoading(false);
			userListPageErrorMessage(err.message);
			
			self.setState({
				prepareDeleteForeverRowID: 0
			});
			setTimeout(() => {
				userListPageErrorMessage(err.message);
			}, 2600);
		});
}