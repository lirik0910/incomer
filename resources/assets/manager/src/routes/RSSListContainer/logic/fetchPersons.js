import httpfetch from 'httpfetch.js';

export default (self = {}) => {
	const { tagsListPageLoading, tagsListPageSelectedRowsIDsArray } = self.props;
	
	return httpfetch('/person?limit=1000', 'GET')
		.then(({ data, total = 0 }) => {
            self.setState({persons: data})
		})
		.catch((err) => {

		});
}