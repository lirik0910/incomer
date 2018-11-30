import httpfetch from 'httpfetch.js';

export default (self, id = 0) => {
	const { videoListPageLoading, videoListPageErrorMessage } = self.props;

	videoListPageLoading(true);
	return httpfetch('/video/'+ id, 'DELETE')
		.then(() => {
			videoListPageLoading(false);
			self.setState({
                prepareDeleteRowID: 0,
			});
		})
		.catch((err) => {
			videoListPageLoading(false);
			videoListPageErrorMessage(err.message);
			
			self.setState({
				prepareDeleteRowID: 0
			});
			setTimeout(() => {
				videoListPageErrorMessage(err.message);
			}, 2600);
		});
}