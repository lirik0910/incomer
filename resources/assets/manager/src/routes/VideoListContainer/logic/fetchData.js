import httpfetch from 'httpfetch.js';

export default (dataForFetch = {}, query = '', self = {}) => {
    const { videoListPageLoading, videoListPageErrorMessage } = self.props;

    videoListPageLoading(true);
	return httpfetch('/video', 'GET', dataForFetch, query)
		.then(({ data, total = 0 }) => {
			// videoListPageLoading(false);
			self.setState({
				total,
				data
			})
		})
		.catch((err) => {
			const { videoListPageErrorMessage } = self.props;
			videoListPageErrorMessage(err.message);
			setTimeout(() => {
				videoListPageErrorMessage('');
			}, 2600);

			videoListPageLoading(false);
		});
}