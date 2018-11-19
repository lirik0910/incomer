import httpfetch from 'httpfetch.js';

export default (self) => () => {
	self.setState({
		dataLoadingFlag: true
	}, () => {
		httpfetch('/users?ids='+ JSON.stringify(self.selectedRowsIdsArray), 'DELETE')
			.then(() => {
				self.setState({ 
					dataLoadingFlag: false,
					data: [ ...self.state
						.data
						.filter((item) => self.selectedRowsIdsArray.indexOf(item.id) === -1) 
					]
				});
				self.selectedRowsIdsArray = [];
			})
			.catch((err) => {
				const { displayFetchErrorMessage } = self.props;
				displayFetchErrorMessage(err.message);
				setTimeout(() => {
					displayFetchErrorMessage('');
				}, 2600);

				self.selectedRowsIdsArray = [];
				self.setState({ dataLoadingFlag: false });
			});
	});
}