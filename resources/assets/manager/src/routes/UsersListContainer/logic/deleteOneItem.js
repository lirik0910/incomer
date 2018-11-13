import httpfetch from 'httpfetch.js';

export default (self, id = 0) => () => {
	self.setState({
		dataLoadingFlag: true
	}, () => {
		self.selectedRowsIdsArray = [];

		httpfetch('/users/'+ id, 'DELETE')
			.then(() => {
				self.setState({ 
					dataLoadingFlag: false,
					data: [ ...self.state.data.filter((item) => item.id !== id) ]
				});
			})
			.catch((err) => {
				self.setState({
					dataLoadingFlag: false,
					prepareDeleteRow: {},
					catchedErrorMessage: err.message
				});
				setTimeout(() => {
					self.setState({
						catchedErrorMessage: ''
					});
				}, 2600);
			});
	});
}