import httpfetch from 'httpfetch.js';

export default (self, id = 0) => {
	const { userListPageLoading, userListPageErrorMessage } = self.props;

	userListPageLoading(true);
	return httpfetch('/user/'+ id, 'DELETE')
		.then(() => {
			userListPageLoading(false);
			self.setState({
                prepareDeleteRowID: 0,
			});
		})
		.catch((err) => {
			userListPageLoading(false);
			userListPageErrorMessage(err.message);
			
			self.setState({
				prepareDeleteRowID: 0
			});
			setTimeout(() => {
				userListPageErrorMessage(err.message);
			}, 2600);
		});
}