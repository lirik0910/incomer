import httpfetch from 'httpfetch.js';

export default (self, id = 0) => () => {
	const { userListPageLoading, userListPageErrorMessage } = self.props;

	userListPageLoading(true);
	httpfetch('/user/'+ id, 'DELETE')
		.then(() => {
			userListPageLoading(false);
			self.setState({
                prepareDeleteRowID: 0,
				data: [ ...self.state.data.filter((item) => item.id !== id) ]
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