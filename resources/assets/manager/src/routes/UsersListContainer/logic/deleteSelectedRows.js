import httpfetch from 'httpfetch.js';

export default (self) => () => {
	const { userListPageLoading, selectedRowsIdsArray, userListPageSelectedRowsIDsArray } = self.props;

	userListPageLoading(true);
	httpfetch('/user?ids='+ JSON.stringify(selectedRowsIdsArray), 'DELETE')
		.then(() => {
			userListPageLoading(false);
			self.setState({ 
				data: [ ...self.state
					.data
					.filter((item) => selectedRowsIdsArray.indexOf(item.id) === -1) 
				]
			});
			userListPageSelectedRowsIDsArray([]);
		})
		.catch((err) => {
			const { userListPageErrorMessage } = self.props;
			userListPageErrorMessage(err.message);
			
			setTimeout(() => {
				userListPageErrorMessage('');
			}, 2600);

			userListPageSelectedRowsIDsArray([]);
			userListPageLoading(false);
		});
}