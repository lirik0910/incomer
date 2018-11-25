import httpfetch from 'httpfetch.js';

export default (self, id = 0) => {
	const { tagsListPageLoading, tagsListPageErrorMessage } = self.props;

	tagsListPageLoading(true);
	return httpfetch('/tags/trash/'+ id, 'DELETE')
		.then(() => {
			tagsListPageLoading(false);
			self.setState({
                prepareDeleteForeverRowID: 0,
			});
		})
		.catch((err) => {
			tagsListPageLoading(false);
			tagsListPageErrorMessage(err.message);
			
			self.setState({
				prepareDeleteForeverRowID: 0
			});
			setTimeout(() => {
				tagsListPageErrorMessage(err.message);
			}, 2600);
		});
}