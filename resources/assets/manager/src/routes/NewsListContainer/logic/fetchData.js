import httpfetch from 'httpfetch.js';

export default (dataForFetch = {}, self = {}) => {
	self.setState({
		dataLoadingFlag: true
	}, () => {
		self.selectedRowsIdsArray = [];
		
		httpfetch('http://localhost/api/news', 'GET', dataForFetch)
			.then(({ data, total = 0 }) => self.setState({
				dataLoadingFlag: false,
				total,
				data
			}))
			.catch((err) => {
				const { displayFetchErrorMessage } = self.props;
				displayFetchErrorMessage(err.message);
				setTimeout(() => {
					displayFetchErrorMessage('');
				}, 2600);

				self.setState({ dataLoadingFlag: false });
			});
	});
}